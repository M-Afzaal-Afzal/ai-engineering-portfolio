from datetime import datetime
from typing import Literal

from pydantic import BaseModel, Field


class TicketCreate(BaseModel):
    subject: str = Field(
        ...,
        min_length=3,
        max_length=120,
        description="Short title of the support ticket",
    )
    description: str = Field(
        ...,
        min_length=10,
        max_length=2000,
        description="Full description of the customer issue",
    )
    priority: Literal["low", "medium", "high", "urgent"] = "medium"
    customer_email: str | None = None


class TicketResponse(BaseModel):
    id: str
    subject: str
    description: str
    priority: Literal["low", "medium", "high", "urgent"]
    status: Literal["open", "in_progress", "resolved", "closed"]
    created_at: datetime


class ErrorResponse(BaseModel):
    error: str
    detail: str