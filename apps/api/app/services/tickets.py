from datetime import datetime, timezone

from app.schemas.tickets import TicketCreate, TicketResponse


def create_mock_ticket(ticket: TicketCreate) -> TicketResponse:
    return TicketResponse(
        id="ticket_mock_001",
        subject=ticket.subject,
        description=ticket.description,
        priority=ticket.priority,
        status="open",
        created_at=datetime.now(timezone.utc),
    )