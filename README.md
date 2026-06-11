# AI Engineering Portfolio

A project-based AI Engineering portfolio built step by step with Python, FastAPI, Next.js, LLM APIs, RAG, vector databases, AI agents, evaluation, deployment, security, and LLMOps.

This repository documents my journey from full-stack development toward job-ready AI Engineering by building real projects, not only studying theory.

## Current Status

Active 16-week AI Engineering portfolio build.

I am updating this repository regularly with working code, daily notes, verification evidence, screenshots, tests, and project documentation.

Current milestone:

- [x] Day 1: Repository and FastAPI environment setup
- [ ] Week 1: FastAPI + project foundation
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
- LLM application development
- Retrieval-Augmented Generation systems
- Vector search and embeddings
- AI agents with tools and guardrails
- Evaluation and quality testing
- Deployment and production-readiness
- Security and observability basics
- Clear technical documentation and learning consistency

## Final Portfolio Projects

This repository will grow into four main portfolio projects:

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
- pytest

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

### Infrastructure

- GitHub
- Docker
- Cloud deployment
- CI/CD
- Environment configuration
- Secret management

## Repository Structure

```text
apps/
  api/        FastAPI backend
  web/        Next.js frontend

notes/        Daily learning notes
docs/         Evidence, screenshots, architecture notes, and case studies
```

## Quick Start

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd ai-engineering-portfolio
```

### 2. Run the FastAPI backend

```bash
cd apps/api
uv run uvicorn app.main:app --reload --port 8000
```

### 3. Test the health endpoint

Open this in your browser:

```text
http://127.0.0.1:8000/health
```

Expected response:

```json
{
  "status": "ok",
  "service": "api",
  "version": "0.1.0"
}
```

### 4. Open API documentation

```text
http://127.0.0.1:8000/docs
```

## Verification Evidence

Each completed day includes evidence such as API responses, screenshots, terminal logs, test results, or demo captures.

Evidence is stored in:

```text
docs/evidence/
```

Example:

```text
docs/evidence/week-01/day-01/
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

## For Recruiters and Hiring Managers

This repository is built to be reviewed as practical proof of my AI Engineering progress.

The best places to review are:

1. This README for the project overview
2. `apps/api` for backend implementation
3. `notes/` for daily learning progress
4. `docs/evidence/` for verification proof
5. Future case studies inside `docs/`

This is an active portfolio build. The repository will continue to improve as each milestone is completed.

## Current Day 1 Result

Completed:

- Monorepo structure created
- FastAPI backend initialized
- `/health` endpoint added
- Local API server running
- README started
- Daily notes folder created
- Evidence folder created

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

## Author

Muhammad Afzaal Afzal

AI Engineering learner and full-stack developer building practical, production-style AI applications.

## License

No open-source license has been added yet.

This repository is public for portfolio and learning visibility. Please do not reuse, copy, or redistribute the code without permission.
