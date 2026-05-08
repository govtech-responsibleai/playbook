# Guardrail Tuning Template

!!! info "About this page"

    This page is new in the upcoming Responsible AI Playbook release. It is a reusable template for comparing guardrail thresholds, precision/recall, and action policies. All content is new.

Use this template to compare thresholds and action policies.

| Guardrail | Threshold | Precision | Recall | False positives | False negatives | Latency | Action policy | Decision |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  |  |  |  |  |  |  |  |  |

## Action Policy

Document what happens at each band:

| Score range | Action | User experience | Logging |
| --- | --- | --- | --- |
| Low | Allow |  |  |
| Medium | Warn or clarify |  |  |
| High | Block or escalate |  |  |

See [Threshold tuning](../mitigating-risks/threshold-tuning.md) and [Measuring guardrail impact](../mitigating-risks/measuring-impact.md).
