---
sidebar_label: "[JY] Monitoring and incident response"
sidebar_position: 14
---

# Monitoring and Incident Response

:::info[About this page]

This page is new in the upcoming Responsible AI Playbook release. It covers what to monitor and how to respond to agentic incidents, with placeholder sections for anomaly detection thresholds, trace replay, and kill-switch design. All content is new.

:::

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

## Anomaly Detection and Alert Thresholds

<mark class="new-since-v1">*Coming soon — this section will cover how to set anomaly thresholds on tool-call rates, permission-denial rates, refusal rates, and trace-length distributions so that real incidents page someone but routine variation does not.*</mark>

## Trace Replay for Incident Response

<mark class="new-since-v1">*Coming soon — this section will cover how to capture, store, and replay agent traces (prompts, tool calls, tool results, model outputs) so that responders can reconstruct what an agent did and why.*</mark>

## Kill-Switch Design

<mark class="new-since-v1">*Coming soon — this section will cover kill-switch architectures: per-tool disable flags, per-tenant pauses, global stop-the-world switches, and how to ensure the kill switch itself is not in the agent's control surface.*</mark>
