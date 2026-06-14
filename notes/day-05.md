# Day 5 Notes - Logging Middleware

## Goal

Today I added request logging middleware to the FastAPI backend.

## What I learned today

1. Middleware runs before and after an API endpoint.
2. Request IDs help trace one request across logs and API responses.
3. Latency shows how long an API request takes.
4. Logging method, path, status code, and latency improves observability.
5. Production APIs should make debugging easier from the beginning.

## Commands or tools I practiced

```bash
mkdir -p app/middleware
touch app/middleware/__init__.py
touch app/middleware/logging.py
touch tests/test_request_logging.py
uv add --dev httpx2
uv run pytest
uv run uvicorn app.main:app --reload --port 8000
```

## Files created or updated

- `apps/api/app/middleware/__init__.py`
- `apps/api/app/middleware/logging.py`
- `apps/api/app/main.py`
- `apps/api/tests/test_request_logging.py`
- `apps/api/pyproject.toml`
- `apps/api/uv.lock`
- `docs/evidence/week-01/day-05/`

## Key concepts

- Middleware: code that runs around every request.
- Request ID: unique ID used to trace one request.
- Latency: time taken to complete a request.
- Logs: structured records of backend behavior.
- Observability: the ability to understand what the app is doing.

## Difficulty and solution

The main difficulty was understanding how middleware connects to every request.

The solution was to think like Express.js middleware:

- Request enters the app.
- Middleware creates or reads a request ID.
- Middleware calls the real endpoint.
- Middleware adds the request ID to the response.
- Middleware logs method, path, status code, and latency.

## Evidence

- `docs/evidence/week-01/day-05/health-with-request-id.txt`
- `docs/evidence/week-01/day-05/ticket-with-request-id.txt`
- `docs/evidence/week-01/day-05/pytest-output.txt`

## Checklist

- [x] Created middleware folder
- [x] Added request logging middleware
- [x] Added request ID generation
- [x] Preserved existing `X-Request-ID` when provided
- [x] Added latency measurement
- [x] Added `X-Request-ID` response header
- [x] Added request logging for completed requests
- [x] Added exception logging for failed requests
- [x] Added middleware tests
- [x] Verified `/health`
- [x] Verified `/tickets/mock`
- [x] Saved evidence
- [x] Updated README
- [x] Pushed commit to GitHub

## Git commit commands

```bash
git add .
git commit -m "feat: add request logging"
git push
```

## Day 5 Score

Learn: 15/15
Build: 45/45
Verify: 15/15
Ship: 15/15
Reflect: 10/10

Total: 100/100

## Short reflection

Today I learned how middleware improves API observability. Every request now has a traceable request ID, latency measurement, and a log record, which makes the backend easier to debug and operate.
