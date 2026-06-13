# Day 2 Notes - Pydantic Contracts

## 5 things I learned

1. Pydantic models define the shape of API data.
2. FastAPI uses Pydantic to validate request bodies automatically.
3. If the request body is invalid, FastAPI returns a 422 error.
4. `response_model` controls the structure of the API response.
5. Schemas are important before AI because LLM outputs also need strict validation.

## What I built

- Created `app/schemas/tickets.py`.
- Added `TicketCreate`.
- Added `TicketResponse`.
- Added `ErrorResponse`.
- Built `POST /tickets/mock`.

## JavaScript comparison

Pydantic models feel like TypeScript types, but they also validate data at runtime.

Example:

- TypeScript tells the developer what type should be used.
- Pydantic checks the real incoming API data while the app is running.

## Verification

- Valid ticket request returns a ticket response.
- Invalid ticket request returns 422 validation error.
- Swagger docs show the new endpoint.

## Why this matters

Before building AI agents, RAG systems, or tool calling, the backend needs clear data contracts.

A schema tells the API:

- what data is required
- what data is optional
- what values are allowed
- what response shape should be returned

## Evidence

- `docs/evidence/week-01/day-02/valid-ticket-response.json`
- `docs/evidence/week-01/day-02/invalid-ticket-response.json`
- `docs/evidence/week-01/day-02/swagger-docs.png`
