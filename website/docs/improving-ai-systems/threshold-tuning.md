---
sidebar_label: "[JY] Threshold tuning"
sidebar_position: 9
---

# Threshold Tuning

:::info[About this page]

This page is new in the upcoming Responsible AI Playbook release. It covers how to tune guardrail thresholds against product risk and user-journey impact. All content is new.

:::

Many guardrails return scores rather than simple yes/no decisions. Threshold tuning decides when the application should block, warn, log, or escalate.

## Tune Against the Product Risk

A high-recall threshold may catch more harmful content but over-block benign users. A high-precision threshold may reduce false alarms but miss more risky content.

Choose thresholds based on:

- User impact of false positives.
- Harm of false negatives.
- Whether a human review path exists.
- Whether the application is public-facing or internal.
- Whether the domain is high-stakes.

## Suggested Action Bands

| Score range | Example action |
| --- | --- |
| Low | Allow and log aggregate metrics |
| Medium | Warn, ask for clarification, or route to safer behaviour |
| High | Block or escalate |

Validate thresholds using held-out examples and ongoing monitoring.
