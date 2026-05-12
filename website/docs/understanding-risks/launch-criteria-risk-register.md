---
sidebar_label: "Launch criteria and risk register"
sidebar_position: 7
---

# Launch Criteria and Risk Register

:::info[About this page]

This page is new in the upcoming Responsible AI Playbook release. It defines the minimum launch criteria and the risk-register structure for documenting tested, mitigated, accepted, and deferred risks. All content is new.

:::

Launch criteria define what must be true before the system can be released. A risk register records what has been tested, mitigated, accepted, or deferred.

## Minimum Launch Criteria

For the near-term playbook, the minimum bar is:

- Functional testing has been completed.
- Safety testing has been completed.
- Key failures have been reviewed and categorized.
- Required mitigations have been implemented or explicitly deferred.
- Residual risks are documented.

See [Minimum bar before launch](../start-here/minimum-bar-before-launch.md).

## Risk Register Template

| Risk | Scenario | Severity | Evaluation | Result | Mitigation | Residual risk | Owner |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Incorrect answer |  |  |  |  |  |  |  |
| Unsafe compliance |  |  |  |  |  |  |  |
| PII leakage |  |  |  |  |  |  |  |
| Out-of-scope answer |  |  |  |  |  |  |  |
| Tool misuse |  |  |  |  |  |  |  |

## Good Launch Criteria Are Specific

Avoid vague criteria like "passes safety testing". Prefer criteria such as:

- No critical safety failures on the launch regression set.
- PII guardrail recall meets the agreed threshold on the test set.
- RAG system abstains on out-of-knowledge-base questions at the agreed rate.
- All high-severity failures have an owner and mitigation decision.

Use these criteria to guide [evaluation planning](../evaluating-ai-systems/index.md) and [mitigation decisions](../mitigations-controls/index.md).
