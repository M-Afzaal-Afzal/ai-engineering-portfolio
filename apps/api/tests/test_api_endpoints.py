from typing import Any, Protocol, cast

from fastapi.testclient import TestClient
from httpx2 import Response

from app.main import app


class TypedTestClient(Protocol):
    def get(
        self,
        url: str,
        *,
        headers: dict[str, str] | None = None,
    ) -> Response:
        ...

    def post(
        self,
        url: str,
        *,
        json: dict[str, Any] | None = None,
        headers: dict[str, str] | None = None,
    ) -> Response:
        ...


client = cast(TypedTestClient, TestClient(app))


def test_health_endpoint_returns_api_status() -> None:
    response = client.get("/health")

    assert response.status_code == 200

    data = response.json()

    assert data["status"] == "ok"
    assert data["service"] == "api"
    assert data["version"] == "0.1.0"
    assert data["environment"] in ["development", "test", "production"]


def test_health_endpoint_includes_request_id_header() -> None:
    response = client.get("/health")

    assert response.status_code == 200
    assert "X-Request-ID" in response.headers
    assert len(response.headers["X-Request-ID"]) > 0


def test_create_mock_ticket_returns_created_ticket() -> None:
    response = client.post(
        "/tickets/mock",
        json={
            "subject": "Login issue",
            "description": "User cannot login after resetting the password.",
            "priority": "high",
            "customer_email": "user@example.com",
        },
    )

    assert response.status_code == 201

    data = response.json()

    assert data["id"] == "ticket_mock_001"
    assert data["subject"] == "Login issue"
    assert data["description"] == "User cannot login after resetting the password."
    assert data["priority"] == "high"
    assert data["status"] == "open"
    assert "created_at" in data
    assert "X-Request-ID" in response.headers


def test_create_mock_ticket_uses_default_priority() -> None:
    response = client.post(
        "/tickets/mock",
        json={
            "subject": "Billing issue",
            "description": "User was charged twice for the same subscription.",
        },
    )

    assert response.status_code == 201

    data = response.json()

    assert data["priority"] == "medium"
    assert data["status"] == "open"


def test_create_mock_ticket_rejects_invalid_priority() -> None:
    response = client.post(
        "/tickets/mock",
        json={
            "subject": "Login issue",
            "description": "User cannot login after resetting the password.",
            "priority": "very-high",
        },
    )

    assert response.status_code == 422


def test_create_mock_ticket_rejects_short_subject() -> None:
    response = client.post(
        "/tickets/mock",
        json={
            "subject": "Hi",
            "description": "User cannot login after resetting the password.",
            "priority": "high",
        },
    )

    assert response.status_code == 422


def test_create_mock_ticket_rejects_missing_description() -> None:
    response = client.post(
        "/tickets/mock",
        json={
            "subject": "Login issue",
            "priority": "high",
        },
    )

    assert response.status_code == 422