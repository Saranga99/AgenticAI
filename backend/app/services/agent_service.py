from app.schemas.agent import AgentRunRequest, AgentRunResponse


async def run_agent(payload: AgentRunRequest) -> AgentRunResponse:
    # Replace with real orchestration (tools, memory, model routing, retries)
    summary = f"Processed task: {payload.task[:120]}"
    return AgentRunResponse(status="completed", result=summary)
