# Day 3 Notes - Service Layer

## Goal

Today I refactored the FastAPI backend by separating routes, services, and app startup logic.

## What I learned today

1. `main.py` should start and configure the FastAPI app, not contain all business logic.
2. `routers/` contains API endpoints, similar to Express routers in Node.js.
3. `services/` contains business logic that can be tested without HTTP.
4. `APIRouter` helps split a larger FastAPI app into smaller files.
5. Refactoring should keep the same external API behavior while improving internal structure.

## Commands or tools I practiced

```bash
mkdir -p app/routers app/services app/core tests
touch app/routers/__init__.py
touch app/services/__init__.py
touch app/core/__init__.py
touch app/routers/health.py
touch app/routers/tickets.py
touch app/services/tickets.py
uv add --dev pytest
uv run pytest
uv run uvicorn app.main:app --reload --port 8000
```
