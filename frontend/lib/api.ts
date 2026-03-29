export type AgentRunResponse = {
  status: string;
  result: string;
};

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000";

export async function runAgent(task: string): Promise<AgentRunResponse> {
  const response = await fetch(`${API_BASE_URL}/api/v1/agents/run`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ task }),
    cache: "no-store"
  });

  if (!response.ok) {
    throw new Error("Failed to run agent");
  }

  return response.json() as Promise<AgentRunResponse>;
}
