---
sidebar_label: "[JY] Building your own guardrail"
sidebar_position: 11
---

# Building your own guardrail

:::info[About this page]

This page is new in the upcoming Responsible AI Playbook release. It covers when to build a custom guardrail and the basic workflow from data collection through threshold tuning. All content is new.

:::

Build a custom guardrail when off-the-shelf options do not match your risk, language, domain, latency, privacy, or deployment constraints.

## When to build

Consider a custom guardrail when:

- The risk category is specific to your domain.
- Existing tools miss local language or cultural context.
- You need a lightweight classifier with predictable latency.
- You need configurable thresholds or action bands.
- You have examples from production or expert review.

## Basic workflow

1. Define the risk category and action policy.
2. Collect positive and negative examples.
3. Label examples with clear guidance.
4. Train or configure a detector.
5. Evaluate precision, recall, latency, and robustness.
6. Tune thresholds against product risk.
7. Monitor failures and refresh the dataset.

For examples of GovTech-developed guardrails, see [LionGuard](../tools/lionguard.md), the [GovTech Off-Topic guardrail](../tools/off-topic-guardrail.md), and the [system-prompt leakage guardrail](privacy-improvements.mdx#govtechs-system-prompt-leakage-guardrail).
