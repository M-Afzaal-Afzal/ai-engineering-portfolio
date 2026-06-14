from app.schemas.tickets import TicketCreate
from app.services.tickets import create_mock_ticket


def test_create_mock_ticket_returns_open_ticket():
    ticket = TicketCreate(
        subject="Login issue",
        description="User cannot login after resetting the password.",
        priority="high",
        customer_email="user@example.com",
    )

    result = create_mock_ticket(ticket)

    assert result.id == "ticket_mock_001"
    assert result.subject == "Login issue"
    assert result.description == "User cannot login after resetting the password."
    assert result.priority == "high"
    assert result.status == "open"
    assert result.created_at is not None


def test_create_mock_ticket_uses_default_priority():
    ticket = TicketCreate(
        subject="Billing issue",
        description="User was charged twice for the same subscription.",
    )

    result = create_mock_ticket(ticket)

    assert result.priority == "medium"
    assert result.status == "open"
