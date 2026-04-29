# Continuous Evals and Monitoring

AI behavior changes as prompts, models, data, tools, and users change. Continuous evals help teams catch regressions after launch.

## What to Automate

Good candidates for continuous evals include:

- Stable functional tests for core user journeys.
- Safety regression tests.
- PII leakage tests.
- RAG grounding and abstention tests.
- Tool-use correctness tests for agentic systems.
- Guardrail precision and recall checks.

## Monitoring Signals

Track:

- Failure rates by category.
- Guardrail trigger rates.
- Refusal rates and over-refusal patterns.
- Latency, cost, and error rates.
- User feedback and escalation volume.
- Drift in input distribution or retrieved sources.

## Practical Advice

Start with a small, high-signal regression suite. Expand only when failures show where more coverage is needed.
