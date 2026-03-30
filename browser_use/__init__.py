import asyncio
from typing import Any

class Agent:
    """Simple agent placeholder used for testing."""

    def __init__(self, task: str, llm: Any | None = None):
        self.task = task
        self.llm = llm
        self.history: list[str] = []

    async def run(self, max_steps: int = 1) -> str:
        """Pretend to execute the provided task."""
        self.history.append(self.task)
        # Simulate work so async usage makes sense
        await asyncio.sleep(0)
        return f"Task finished: {self.task}"

    def create_history_gif(self) -> None:
        """Placeholder method for compatibility."""
        # In a real implementation this would record a GIF of browser actions.
        # Here we simply ignore the request.
        pass

