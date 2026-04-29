# Agentic Risk Model

Agentic risk comes from the combination of model behavior, system design, tools, permissions, and operating context.

## Risk Sources

| Source | Examples |
| --- | --- |
| Component risks | Model errors, retrieval failures, tool bugs, memory corruption |
| Design risks | Excessive autonomy, unclear approval gates, poor fallback paths |
| Capability risks | Tool use, planning, delegation, memory, code execution, external actions |
| Context risks | Public exposure, sensitive data, high-impact decisions, vulnerable users |

## Capability-to-Control Mapping

For each capability, identify:

1. What the system can do.
2. What can go wrong.
3. Which evals are required.
4. Which controls are expected.
5. What readiness checks must pass before launch.

This section should connect to ARC work by making the capability assessment explicit and actionable.
