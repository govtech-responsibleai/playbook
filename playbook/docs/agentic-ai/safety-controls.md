# Agentic Safety Controls

Agentic systems need controls that limit what they can do, not only what they can say.

## Core Controls

- Least privilege for tools and data access.
- Tool allowlists and argument validation.
- Approval gates for high-impact actions.
- Sandboxing for code execution or external side effects.
- Memory controls for retention and retrieval.
- Traceability for plans, tool calls, and decisions.
- Kill switches or safe shutdown paths.
- Human escalation for ambiguous or high-risk states.

## Design Principle

Do not rely on prompting alone for high-impact controls. Use system-level permissions, validation, and workflow design wherever possible.
