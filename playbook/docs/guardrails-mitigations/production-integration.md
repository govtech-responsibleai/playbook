# Production Integration

Production integration is where mitigations become part of the application workflow.

## Integration Checklist

- Decide where each mitigation runs: input, retrieval, model output, tool call, log, or human review.
- Define actions for allow, warn, block, redact, and escalate outcomes.
- Set thresholds and document why they are appropriate.
- Measure latency and cost impact.
- Log enough for monitoring without retaining unnecessary sensitive data.
- Add regression tests for known failures.
- Define who reviews alerts and failures after launch.

## Common Mistakes

- Adding guardrails without testing their false positives.
- Treating provider safety filters as the only mitigation.
- Logging raw PII while trying to detect PII leakage.
- Applying the same threshold to every user journey.
- Not testing multi-turn and tool-use behavior.
