# Day 7 Notes - Week 1 Review

## Goal

Today I reviewed and cleaned Week 1 of the FastAPI backend foundation.

## What I learned today

1. A weekly review helps catch formatting, documentation, and evidence gaps.
2. Passing tests are stronger proof than only manual screenshots.
3. GitHub readability matters because reviewers inspect code in the browser.
4. A clean README makes the project easier to understand.
5. Git tags can mark stable project milestones such as `week-01-done`.

## Commands or tools I practiced

```bash
npx --yes prettier --write README.md "notes/**/*.md"
uv run ruff format .
uv run ruff check . --fix
uv run python -m compileall app tests
uv run pytest
mkdir -p docs/evidence/week-01/day-07
git tag week-01-done
git push origin week-01-done
```
