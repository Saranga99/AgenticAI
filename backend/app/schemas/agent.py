from pydantic import BaseModel, Field


class AgentRunRequest(BaseModel):
    task: str = Field(..., min_length=3, max_length=2_000)
    user_id: str | None = None


class AgentRunResponse(BaseModel):
    status: str
    result: str
