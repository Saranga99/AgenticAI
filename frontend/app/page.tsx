"use client";

import { FormEvent, useState } from "react";
import { runAgent } from "@/lib/api";

export default function HomePage() {
  const [task, setTask] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    setLoading(true);
    setResult("");
    try {
      const data = await runAgent(task);
      setResult(data.result);
    } catch (error) {
      setResult(error instanceof Error ? error.message : "Unexpected error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main style={{ maxWidth: 840, margin: "40px auto", padding: 24 }}>
      <h1>Agentic AI Console</h1>
      <p>Submit a task to your FastAPI agent backend.</p>
      <form onSubmit={onSubmit} style={{ display: "grid", gap: 12 }}>
        <textarea
          value={task}
          onChange={(e) => setTask(e.target.value)}
          minLength={3}
          required
          placeholder="Example: Analyze support tickets and summarize top 3 issues"
          style={{ minHeight: 160, borderRadius: 8, border: "1px solid #334155", padding: 12, background: "#111827", color: "#e2e8f0" }}
        />
        <button
          type="submit"
          disabled={loading}
          style={{ width: 180, borderRadius: 8, padding: "10px 14px", border: 0, background: "#4f46e5", color: "white", fontWeight: 700 }}
        >
          {loading ? "Running..." : "Run Agent"}
        </button>
      </form>
      {result && (
        <section style={{ marginTop: 24, padding: 16, border: "1px solid #334155", borderRadius: 8 }}>
          <h2>Result</h2>
          <pre style={{ whiteSpace: "pre-wrap" }}>{result}</pre>
        </section>
      )}
    </main>
  );
}
