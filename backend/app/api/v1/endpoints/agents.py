from fastapi import APIRouter

from app.schemas.agent import AgentRunRequest, AgentRunResponse
from app.services.agent_service import run_agent

router = APIRouter()


@router.post("/run", response_model=AgentRunResponse)
async def run(payload: AgentRunRequest) -> AgentRunResponse:
    return await run_agent(payload)
