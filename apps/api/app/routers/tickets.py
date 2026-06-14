from fastapi import APIRouter, status

from app.schemas.tickets import TicketCreate, TicketResponse
from app.services.tickets import create_mock_ticket

router = APIRouter(
    prefix="/tickets",
    tags=["tickets"],
)


@router.post(
    "/mock",
    response_model=TicketResponse,
    status_code=status.HTTP_201_CREATED,
)
def create_ticket(ticket: TicketCreate) -> TicketResponse:
    return create_mock_ticket(ticket)