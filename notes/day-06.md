# Day 6 Notes - Testing Foundation

## Goal

Today I added API endpoint tests for the FastAPI backend.

## What I learned today

1. `pytest` runs test functions that start with `test_`.
2. `TestClient` allows API testing without manually opening the browser.
3. API tests check real route behavior, not only internal service functions.
4. Pydantic validation can be verified by testing `422` responses.
5. Automated tests give confidence before adding AI features later.

## Commands or tools I practiced

```bash
touch tests/test_api_endpoints.py
uv sync
uv run pytest
uv run uvicorn app.main:app --reload --port 8000
```
