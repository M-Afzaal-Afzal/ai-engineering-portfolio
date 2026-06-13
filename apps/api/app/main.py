from datetime import datetime, timezone

from fastapi import FastAPI, status

from app.schemas.tickets import TicketCreate, TicketResponse

app = FastAPI(
    title="AI Engineering Portfolio API",
    version="0.1.0",
)


@app.get("/health")
def health_check():
    return {
        "status": "ok",
        "service": "api",
        "version": "0.1.0",
    }


@app.post(
    "/tickets/mock",
    response_model=TicketResponse,
    status_code=status.HTTP_201_CREATED,
)
def create_mock_ticket(ticket: TicketCreate):
    return TicketResponse(
        id="ticket_mock_001",
        subject=ticket.subject,
        description=ticket.description,
        priority=ticket.priority,
        status="open",
        created_at=datetime.now(timezone.utc),
    )