# Day 4 Notes - Config Management

## Goal

Today I added environment-based configuration to the FastAPI backend.

## What I learned today

1. Application settings should not be hardcoded directly in route files.
2. Environment variables let the same app run differently in development, test, and production.
3. `.env.example` is safe to commit, but `.env` should not be committed.
4. CORS controls which frontend URLs can call the backend.
5. `pydantic-settings` gives typed configuration for Python apps.

## Commands or tools I practiced

```bash
uv add pydantic-settings
touch app/core/settings.py
touch .env.example
cp .env.example .env
uv run pytest
uv run uvicorn app.main:app --reload --port 8000
```
