# Performance Evals

Performance evals check whether an AI application is operationally viable, not only whether it is correct.

## What to Measure

- Latency at p50, p90, and p95.
- Cost per request or completed task.
- Throughput under expected load.
- Error rates and timeout rates.
- Retry behavior and fallback behavior.
- Provider or model differences.

## Why This Matters

A technically safe model can still be unsuitable if it is too slow, too costly, or too unreliable for production. Performance results also affect mitigation choices: a high-latency guardrail may be acceptable for back-office review but not for a public chatbot.

## Suggested Practice

Run performance evals on realistic prompts, realistic context sizes, and realistic traffic patterns. Record both end-to-end application latency and component-level latency for retrieval, model calls, guardrails, and tools.
