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
    ) -> Response: ...

    def post(
        self,
        url: str,
        *,
        json: dict[str, Any] | None = None,
        headers: dict[str, str] | None = None,
    ) -> Response: ...


client = cast(TypedTestClient, TestClient(app))


def test_health_response_includes_request_id_header() -> None:
    response = client.get("/health")

    assert response.status_code == 200
    assert "X-Request-ID" in response.headers
    assert len(response.headers["X-Request-ID"]) > 0


def test_ticket_response_includes_request_id_header() -> None:
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
    assert "X-Request-ID" in response.headers
    assert len(response.headers["X-Request-ID"]) > 0


def test_existing_request_id_is_preserved() -> None:
    custom_request_id = "test-request-id-123"

    response = client.get(
        "/health",
        headers={"X-Request-ID": custom_request_id},
    )

    assert response.status_code == 200
    assert response.headers["X-Request-ID"] == custom_request_id
