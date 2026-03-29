# Fullstack Agentic AI Template (Next.js + FastAPI)

Production-ready starter for building agentic AI applications with:

- **Frontend**: Next.js 15 (App Router, TypeScript)
- **Backend**: FastAPI (Python 3.12, async-first)
- **Infra**: Docker Compose, healthchecks, environment-driven config

## Project Structure

```
.
├── frontend/
├── backend/
├── docker-compose.yml
├── Makefile
└── .env.example
```

## Quick Start

1. Copy environment values:
   ```bash
   cp .env.example .env
   ```
2. Start services:
   ```bash
   docker compose up --build
   ```
3. Open:
   - Frontend: http://localhost:3000
   - Backend docs: http://localhost:8000/docs

## Development

### Backend
```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements-dev.txt
uvicorn app.main:app --reload --port 8000
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

## API Endpoints

- `GET /api/v1/health` - health check
- `POST /api/v1/agents/run` - run agent task

## Production Notes

- Strict CORS from `CORS_ORIGINS`
- Typed settings via Pydantic Settings
- Request/response schemas and versioned API router
- Structured logging middleware
- Containerized deployments
