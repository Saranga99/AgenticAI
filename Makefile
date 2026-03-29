.PHONY: up down backend-dev frontend-dev

up:
	docker compose up --build

down:
	docker compose down -v

backend-dev:
	cd backend && uvicorn app.main:app --reload --port 8000

frontend-dev:
	cd frontend && npm run dev
