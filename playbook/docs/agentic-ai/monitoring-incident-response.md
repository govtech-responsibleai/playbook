# Monitoring and Incident Response

Agentic systems should be monitored for both model failures and action failures.

## Monitor

- Tool calls and arguments.
- Failed or repeated actions.
- Permission denials.
- Human override events.
- Guardrail triggers.
- Unexpected state or memory use.
- User reports and escalations.

## Respond

Define what happens when the system behaves unexpectedly:

- Pause or disable specific tools.
- Fall back to human review.
- Preserve traces for investigation.
- Notify owners.
- Patch prompts, tools, permissions, or evals.
- Add the incident to the regression suite.

Governance and incident response guidance is KIV, but basic monitoring should still be part of agentic system readiness.
