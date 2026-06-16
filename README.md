# AI Engineering Portfolio

A project-based AI Engineering portfolio built step by step with Python, FastAPI, Next.js, LLM APIs, RAG, vector databases, AI agents, evaluation, deployment, security, and LLMOps.

This repository documents my journey from full-stack development toward job-ready AI Engineering by building real projects, not only studying theory.

## Current Status

Active AI Engineering portfolio build.

I am updating this repository regularly with working code, daily notes, verification evidence, screenshots, tests, and project documentation.

Current milestone:

- [x] Day 1: Repository and FastAPI environment setup
- [x] Day 2: Pydantic contracts and mock ticket endpoint
- [x] Day 3: Service layer and router structure
- [x] Day 4: Config management with environment settings
- [x] Day 5: Request logging middleware
- [x] Day 6: API testing foundation
- [x] Day 7: Week 1 review and cleanup
- [x] Week 1: FastAPI + project foundation
- [x] Day 8: Next.js app shell, navigation, and reusable UI components
- [ ] Week 2: LLM APIs, prompting, streaming, structured outputs
- [ ] Week 3: Embeddings, chunking, vector search
- [ ] Week 4: RAG with citations and grounding
- [ ] Week 5: Advanced retrieval and RAG quality
- [ ] Week 6: RAG evaluation and regression testing
- [ ] Week 7: Tool-calling AI agents
- [ ] Week 8: Workflow automation
- [ ] Week 9: Multi-provider AI and model routing
- [ ] Week 10: Cloud deployment, storage, secrets, CI/CD
- [ ] Week 11: Production security, monitoring, and LLMOps
- [ ] Week 12: Enterprise agent memory
- [ ] Week 13: MCP-style tool architecture
- [ ] Week 14: Multi-agent orchestration
- [ ] Week 15: Enterprise data agent and governance
- [ ] Week 16: Final portfolio, case studies, and interview pack

## Why This Repository Exists

The goal of this repository is to prove practical AI Engineering ability through real, reviewable work.

This repo is designed to show:

- Clean backend architecture with Python and FastAPI
- API design and validation
- Service-layer architecture
- Environment-based configuration
- Request logging and observability basics
- Automated testing with pytest
- Code formatting and linting with Ruff
- Markdown formatting with Prettier
- LLM application development
- Retrieval-Augmented Generation systems
- Vector search and embeddings
- AI agents with tools and guardrails
- Evaluation and quality testing
- Deployment and production-readiness
- Security and observability basics
- Clear technical documentation and learning consistency

## Final Portfolio Projects

This repository will grow into four main portfolio projects.

### Project A: AI Document Intelligence Platform

A document-based RAG application with PDF upload, parsing, chunking, embeddings, vector search, cited answers, refusal behavior, and evaluation reports.

### Project B: AI Support Agent with Tool Calling

A support agent that can search documentation, summarize user issues, create tickets, use tools safely, and show traceable agent steps.

### Project C: Enterprise Agent Memory and Tool Hub

An agent system with thread memory, durable facts, semantic memory retrieval, MCP-style tools, permissions, and audit logs.

### Project D: Multi-Agent Enterprise Data Assistant

A multi-agent assistant that combines document retrieval, structured data, memory, governance, citations, and audit trails.

## Tech Stack

### Backend

- Python
- FastAPI
- Uvicorn
- Pydantic
- pydantic-settings
- pytest
- httpx2
- Ruff

### Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS

### AI Engineering

- LLM APIs
- Embeddings
- Vector databases
- RAG
- AI agents
- Tool calling
- Structured outputs
- Evaluation
- LLMOps

### Infrastructure and Tooling

- GitHub
- Docker
- Cloud deployment
- CI/CD
- Environment configuration
- Secret management
- Ruff formatting and linting
- Prettier Markdown formatting

## Repository Structure

```text
apps/
  api/        FastAPI backend
  web/        Next.js frontend

notes/        Daily learning notes
docs/         Evidence, screenshots, architecture notes, and case studies
```

Current backend structure:

```text
apps/api/
  app/
    main.py
    core/
      settings.py
    middleware/
      logging.py
    routers/
      health.py
      tickets.py
    schemas/
      tickets.py
    services/
      tickets.py
  tests/
    test_api_endpoints.py
    test_request_logging.py
    test_settings.py
    test_ticket_service.py
  .env.example
  pyproject.toml
```

## Quick Start

### 1. Clone the repository

```bash
git clone https://github.com/M-Afzaal-Afzal/ai-engineering-portfolio.git
cd ai-engineering-portfolio
```

### 2. Prepare environment file

```bash
cd apps/api
cp .env.example .env
```

The `.env.example` file is safe to commit.
The local `.env` file should not be committed.

### 3. Run the FastAPI backend

```bash
uv run uvicorn app.main:app --reload --port 8000
```

### 4. Test the health endpoint

Open this in your browser:

```text
http://127.0.0.1:8000/health
```

Expected response:

```json
{
  "status": "ok",
  "service": "api",
  "version": "0.1.0",
  "environment": "development"
}
```

All API responses also include an `X-Request-ID` response header for request tracing.

### 5. Open API documentation

```text
http://127.0.0.1:8000/docs
```

### 6. Test the mock ticket endpoint

```bash
curl -i -X POST "http://127.0.0.1:8000/tickets/mock" \
  -H "Content-Type: application/json" \
  -d '{
    "subject": "Login issue",
    "description": "User cannot login after resetting the password.",
    "priority": "high",
    "customer_email": "user@example.com"
  }'
```

Expected response body:

```json
{
  "id": "ticket_mock_001",
  "subject": "Login issue",
  "description": "User cannot login after resetting the password.",
  "priority": "high",
  "status": "open",
  "created_at": "..."
}
```

Expected response header:

```text
X-Request-ID: ...
```

### 7. Run tests

From inside `apps/api`:

```bash
uv run pytest
```

Expected result:

```text
All tests passed
```

### 8. Run formatting and quality checks

From inside `apps/api`:

```bash
uv run ruff format .
uv run ruff check .
uv run python -m compileall app tests
uv run pytest
```

From the repository root, Markdown can be formatted with:

```bash
npx --yes prettier --write README.md "notes/**/*.md"
```

## Configuration

The API uses environment-based configuration through `pydantic-settings`.

Configuration is defined in:

```text
apps/api/app/core/settings.py
```

Template environment variables are stored in:

```text
apps/api/.env.example
```

Current environment variables:

```env
APP_NAME="AI Engineering Portfolio API"
APP_VERSION="0.1.0"
APP_ENV="development"
LOG_LEVEL="INFO"
CORS_ORIGINS="http://localhost:3000,http://127.0.0.1:3000"
```

Important:

- `.env.example` is committed as a safe template.
- `.env` is local only and should not be committed.
- Secrets should never be pushed to GitHub.

## Observability

The API includes request logging middleware.

Current logging behavior:

- Generates a unique request ID for every request
- Preserves an existing `X-Request-ID` if the client sends one
- Stores the request ID on `request.state.request_id`
- Adds `X-Request-ID` to every response header
- Logs request method, path, status code, and latency
- Logs failed requests with exception details

This creates a foundation for future production observability, tracing, debugging, and LLMOps monitoring.

## Testing

The API includes automated tests with `pytest`.

Current test coverage includes:

- Service-layer ticket creation behavior
- Settings and configuration loading
- Request logging middleware
- `X-Request-ID` response headers
- `GET /health` endpoint behavior
- Valid `POST /tickets/mock` behavior
- Default ticket priority behavior
- Invalid ticket request validation with `422` responses

Run all tests from inside `apps/api`:

```bash
uv run pytest
```

## API Endpoints

### Health Check

```text
GET /health
```

Returns API status, version, and current environment.

### Mock Ticket Creation

```text
POST /tickets/mock
```

Creates a mock support ticket using Pydantic validation.

Invalid request bodies return a `422` validation error.

## Verification Evidence

Each completed day includes evidence such as API responses, screenshots, terminal logs, test results, or demo captures.

Evidence is stored in:

```text
docs/evidence/
```

Examples:

```text
docs/evidence/week-01/day-01/
docs/evidence/week-01/day-02/
docs/evidence/week-01/day-03/
docs/evidence/week-01/day-04/
docs/evidence/week-01/day-05/
docs/evidence/week-01/day-06/
docs/evidence/week-01/day-07/
```

## Daily Learning Notes

Daily notes are stored in:

```text
notes/
```

Each note includes:

- What I learned
- What I built
- What I verified
- Problems I faced
- How I solved them
- Next steps

## Current Day 1 Result

Completed:

- Monorepo structure created
- FastAPI backend initialized
- `/health` endpoint added
- Local API server running
- README started
- Daily notes folder created
- Evidence folder created

## Current Day 2 Result

Completed:

- Created Pydantic ticket schemas
- Added `TicketCreate`, `TicketResponse`, and `ErrorResponse`
- Added `POST /tickets/mock`
- Verified valid request returns a ticket response
- Verified invalid request returns `422` validation error
- Saved Day 2 evidence

## Current Day 3 Result

Completed:

- Split FastAPI routes into `app/routers`
- Moved ticket creation logic into `app/services`
- Created `app/core` for future configuration
- Kept `GET /health` working
- Kept `POST /tickets/mock` working
- Added service tests with pytest
- Saved Day 3 evidence

## Current Day 4 Result

Completed:

- Added `app/core/settings.py`
- Added `.env.example`
- Added `APP_ENV`, `LOG_LEVEL`, and `CORS_ORIGINS`
- Updated FastAPI app to read config from settings
- Added CORS middleware
- Updated `/health` to show the current environment
- Verified `.env` is ignored and not committed
- Added settings tests with pytest
- Saved Day 4 evidence

## Current Day 5 Result

Completed:

- Added request logging middleware
- Generated a unique request ID for every request
- Preserved existing `X-Request-ID` when provided by the client
- Stored request ID on `request.state.request_id`
- Added `X-Request-ID` response header
- Logged request method, path, status code, and latency
- Added exception logging for failed requests
- Added middleware tests with pytest
- Verified `/health` includes `X-Request-ID`
- Verified `/tickets/mock` includes `X-Request-ID`
- Verified all tests pass
- Saved Day 5 evidence

## Current Day 6 Result

Completed:

- Added API endpoint tests with pytest
- Tested `GET /health`
- Tested valid `POST /tickets/mock`
- Tested default ticket priority behavior
- Tested invalid priority returns `422`
- Tested short subject returns `422`
- Tested missing description returns `422`
- Verified `X-Request-ID` appears in API responses
- Verified all tests pass in one command
- Saved Day 6 evidence

## Day 8 Result

Built the Week 2 Next.js frontend foundation inside `apps/web`:

- Next.js 16 App Router shell with TypeScript, Tailwind CSS v4, and ESLint
- Reusable `Button`, `Input`, and `Card` UI components
- Sidebar navigation (`SupportDesk AI` branding, Day 8 badge, four nav items)
- Responsive layout: dark sidebar on desktop, top nav bar on mobile
- Static Support Ticket Dashboard page with three metric cards, a recent
  tickets table with five realistic rows and status/priority badges, and a
  filter panel using the reusable `Input` and `Button` components
- OKLCH-based design token palette registered via Tailwind v4 `@theme inline`
- Web lint: 0 problems. Web build: clean. Backend pytest: 14 passed.

## Previous Day 7 Result

Completed:

- Reviewed Week 1 backend foundation
- Formatted Python files with Ruff
- Formatted Markdown files with Prettier
- Verified Python files compile successfully
- Verified all tests pass with pytest
- Saved final Week 1 evidence
- Updated README documentation
- Prepared Week 1 completion tag

## Week 1 Result

Completed FastAPI backend foundation:

- Repository and monorepo structure
- FastAPI health endpoint
- Pydantic request and response schemas
- Mock ticket endpoint
- Router and service layer structure
- Environment-based configuration
- CORS setup
- Request logging middleware
- Request ID tracing with `X-Request-ID`
- API endpoint tests with pytest
- Ruff formatting and linting setup
- Prettier Markdown formatting workflow
- Verification evidence for every day

## Roadmap

The repository will gradually include:

- FastAPI API foundation
- Pydantic schemas
- Service layer architecture
- Environment configuration
- Request logging middleware
- Testing with pytest
- LLM chat endpoints
- Streaming responses
- Structured outputs
- Document ingestion
- Vector search
- RAG with citations
- RAG evaluation
- Tool-calling agents
- Agent memory
- MCP-style tools
- Multi-agent workflows
- Deployment and security documentation

## For Recruiters and Hiring Managers

This repository is built to be reviewed as practical proof of my AI Engineering progress.

The best places to review are:

1. This README for the project overview
2. `apps/api` for backend implementation
3. `notes/` for daily learning progress
4. `docs/evidence/` for verification proof
5. Future case studies inside `docs/`

This is an active portfolio build. The repository will continue to improve as each milestone is completed.

## Author

Muhammad Afzaal Afzal

AI Engineering learner and full-stack developer building practical, production-style AI applications.

## License

No open-source license has been added yet.

This repository is public for portfolio and learning visibility. Please do not reuse, copy, or redistribute the code without permission.
