# AI Engineering Portfolio

A project-based AI Engineering portfolio built step by step with Python, FastAPI, Next.js, LLM APIs, RAG, vector databases, AI agents, evaluation, deployment, security, and LLMOps.

This repository documents my journey from full-stack development toward job-ready AI Engineering by building real projects, not only studying theory.

## Current Status

Active AI Engineering portfolio build.

I am updating this repository regularly with working code, daily notes, verification evidence, screenshots, tests, and project documentation.

Current milestone:

Current product focus: SupportDesk AI full-stack support ticket workflow. The
active work is the support dashboard, local ticket workflows, validation, and
the frontend-to-backend path that will be connected later.

- [x] Day 1: Repository and FastAPI environment setup
- [x] Day 2: Pydantic contracts and mock ticket endpoint
- [x] Day 3: Service layer and router structure
- [x] Day 4: Config management with environment settings
- [x] Day 5: Request logging middleware
- [x] Day 6: API testing foundation
- [x] Day 7: Week 1 review and cleanup
- [x] Week 1: FastAPI + AI repo foundation
- [x] Day 8: Next.js app shell, navigation, and reusable UI components
- [x] Day 9: Create-ticket frontend flow with local state and validation
- [ ] Week 2: Next.js + FastAPI full-stack workflow
- [ ] Week 3: LLM APIs, Claude/OpenAI basics, and streaming
- [ ] Week 4: Structured outputs and reliability
- [ ] Week 5: Embeddings, Chroma, and PDF ingestion
- [ ] Week 6: RAG with citations and grounding
- [ ] Week 7: Anthropic Contextual Retrieval
- [ ] Week 8: RAG evaluation and quality gates

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
- Product-focused frontend development with Next.js
- LLM application development
- Prompt versioning and provider abstraction
- Streaming AI responses
- Structured outputs and reliability patterns
- Retrieval-Augmented Generation systems
- Vector search and embeddings
- PDF ingestion, chunking, and metadata
- Citations, grounding, and refusal behavior
- Anthropic-style Contextual Retrieval
- RAG evaluation and quality testing
- Deployment and production-readiness
- Security and observability basics
- Clear technical documentation and learning consistency

## Portfolio Projects

This repository will grow into practical AI Engineering projects that can be reviewed through code, screenshots, tests, evidence, demos, and case studies.

### Project 1: Support Ticket Dashboard

A full-stack support ticket workflow built with Next.js and FastAPI.

It proves the core product foundation before adding AI:

- Dashboard UI
- Reusable frontend components
- Ticket forms
- API integration
- Validation
- Ticket list and filters
- Status updates
- Simple tenant/user context
- Tests and evidence

### Project 2: AI Text Intelligence Assistant

An LLM-powered assistant with streaming responses, prompt templates, structured outputs, provider abstraction, token/cost logging, and reliability patterns.

It proves practical LLM application development:

- OpenAI/Claude provider interface
- Chat endpoint
- Streaming UI
- Prompt versioning
- Structured extraction
- Retries and timeouts
- Token, latency, and cost telemetry

### Project 3: AI Document Intelligence Platform with Contextual RAG

A document-based RAG application with PDF upload, parsing, chunking, embeddings, vector search, cited answers, refusal behavior, contextual retrieval, and evaluation reports.

It proves production-style RAG engineering:

- Text and PDF ingestion
- Chunking with metadata
- Persistent Chroma vector store
- Semantic search
- Ask-document chat
- Citations and source cards
- Weak-context refusal
- Prompt-injection safeguards
- Anthropic-style Contextual Retrieval
- RAG evaluation with quality gates

### Future Projects

Later phases will extend the portfolio into:

- AI Support Agent with tool calling
- Enterprise Agent Memory Hub
- MCP-style Tool Hub
- Multi-agent enterprise assistant
- Enterprise data intelligence copilot
- AI Engineering control center

## Tech Stack

### Backend

- Python
- FastAPI
- Uvicorn
- Pydantic
- pydantic-settings
- pytest
- httpx
- Ruff

### Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS
- ESLint

### AI Engineering

- LLM APIs
- OpenAI
- Claude / Anthropic
- Prompt templates
- Streaming responses
- Structured outputs
- Embeddings
- Vector databases
- Chroma
- RAG
- Contextual Retrieval
- Citations
- RAG evaluation
- LLMOps basics

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

Current frontend structure:

```text
apps/web/
  app/
    layout.tsx
    page.tsx
    globals.css
  components/
    ui/
      Button.tsx
      Card.tsx
      Input.tsx
  package.json
```

## Quick Start

### 1. Clone the repository

```bash
git clone https://github.com/M-Afzaal-Afzal/ai-engineering-portfolio.git
cd ai-engineering-portfolio
```

### 2. Prepare the backend environment file

```bash
cd apps/api
cp .env.example .env
```

The `.env.example` file is safe to commit.
The local `.env` file should not be committed.

### 3. Run the FastAPI backend

From inside `apps/api`:

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

### 7. Run the Next.js frontend

From the repository root:

```bash
cd apps/web
npm install
npm run dev
```

Open this in your browser:

```text
http://localhost:3000
```

### 8. Run backend tests

From inside `apps/api`:

```bash
uv run pytest
```

Expected result:

```text
All tests passed
```

### 9. Run formatting and quality checks

From inside `apps/api`:

```bash
uv run ruff format .
uv run ruff check .
uv run python -m compileall app tests
uv run pytest
```

From inside `apps/web`:

```bash
npm run lint
npm run build
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
docs/evidence/week-02/day-08/
docs/evidence/week-02/day-09/
```

## Daily Learning Notes

Daily notes are stored in:

```text
notes/
```

Each note includes:

- Goal
- What I learned
- Commands or tools I practiced
- Files created or updated
- Key concepts
- Difficulty and solution
- Evidence folder
- Checklist
- Git commit commands
- Daily score
- Short reflection

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

## Current Day 7 Result

Completed:

- Reviewed Week 1 backend foundation
- Formatted Python files with Ruff
- Formatted Markdown files with Prettier
- Verified Python files compile successfully
- Verified all tests pass with pytest
- Saved final Week 1 evidence
- Updated README documentation
- Prepared Week 1 completion tag

## Current Day 8 Result

Built the Week 2 Next.js frontend foundation inside `apps/web`:

- Next.js 16 App Router shell with TypeScript, Tailwind CSS v4, and ESLint
- Reusable `Button`, `Input`, and `Card` UI components
- Sidebar navigation with `SupportDesk AI` branding
- Responsive layout: dark sidebar on desktop, top nav bar on mobile
- Static Support Ticket Dashboard page
- Three metric cards
- Recent tickets table with five realistic rows
- Status and priority badges
- Filter panel using reusable `Input` and `Button` components
- OKLCH-based design token palette registered through Tailwind v4 `@theme inline`
- Web lint: 0 problems
- Web build: clean
- Backend pytest: 14 passed

## Current Day 9 Result

Added a polished create-ticket workflow to the SupportDesk AI dashboard:

- Create-ticket flow added through a right-side panel opened by `New Ticket`
- Client-side validation added for subject, customer email, priority, and description
- Local ticket submission added with no backend connection yet
- New tickets are created in memory and inserted at the top of the visible table
- Inline errors added below each invalid field
- Success feedback added after valid local submission
- Existing sample tickets remain as the initial local state
- Web lint: 0 problems
- Web build: clean
- Backend pytest: 14 passed

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

## Week 2 Target

Build Project 1 v1: a full-stack support ticket dashboard.

Planned Week 2 work:

- Day 8: Next.js app shell, navigation, and reusable UI components
- Day 9: Create ticket form with client validation
- Day 10: Connect frontend to FastAPI ticket API
- Day 11: Ticket list and filters
- Day 12: Ticket status update endpoint and UI action
- Day 13: Simple user/tenant context flow
- Day 14: Weekly review, demo evidence, and Project 1 v1 documentation

## Roadmap Through Week 8

| Week   | Theme                                     | End-of-week proof                                                                                             | Main output                         |
| ------ | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| Week 1 | FastAPI + AI Repo Foundation              | Backend skeleton, Pydantic contracts, logs, tests, and evidence folders                                       | Support Ticket Dashboard foundation |
| Week 2 | Next.js + FastAPI Full-Stack Workflow     | Ticket UI, API integration, forms, validation, auth-lite, and deployment baseline                             | Project 1 v1                        |
| Week 3 | LLM APIs, Claude/OpenAI Basics, Streaming | AI assistant with streaming chat, prompt versions, and token/cost logs                                        | Project 2 v1                        |
| Week 4 | Structured Outputs and Reliability        | JSON extraction, retries/timeouts, telemetry, and provider wrapper                                            | Project 2 v2                        |
| Week 5 | Embeddings, Chroma, PDF Ingestion         | Text/PDF ingestion, chunking, metadata, and vector search UI                                                  | Document search app                 |
| Week 6 | RAG with Citations and Grounding          | Ask-document chat, citations, weak-context refusal, and prompt-injection basics                               | Project 3 v1                        |
| Week 7 | Anthropic Contextual Retrieval            | Contextual chunk enrichment, contextual embeddings, contextual BM25/hybrid retrieval, and before/after report | Contextual RAG upgrade              |
| Week 8 | RAG Evaluation and Quality Gates          | Ragas eval dataset, baseline, failure analysis, CI regression gate, and dashboard                             | Project 3 v2                        |

## Roadmap

The repository will gradually include:

- FastAPI API foundation
- Pydantic schemas
- Service layer architecture
- Environment configuration
- Request logging middleware
- Testing with pytest
- Next.js dashboard UI
- Full-stack ticket workflow
- LLM chat endpoints
- Streaming responses
- Prompt templates
- Structured outputs
- Provider abstraction
- Token, latency, and cost logging
- Document ingestion
- PDF parsing
- Chunking and metadata
- Vector search
- RAG with citations
- Grounded refusal behavior
- Prompt-injection safeguards
- Anthropic-style Contextual Retrieval
- Hybrid retrieval
- RAG evaluation
- CI quality gates
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
3. `apps/web` for frontend implementation
4. `notes/` for daily learning progress
5. `docs/evidence/` for verification proof
6. Future case studies inside `docs/`

This is an active portfolio build. The repository will continue to improve as each milestone is completed.

## Author

Muhammad Afzaal Afzal

AI Engineering learner and full-stack developer building practical, production-style AI applications.

## License

No open-source license has been added yet.

This repository is public for portfolio and learning visibility. Please do not reuse, copy, or redistribute the code without permission.
