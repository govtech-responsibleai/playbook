# Building Your Own Guardrail

Build a custom guardrail when off-the-shelf options do not match your risk, language, domain, latency, privacy, or deployment constraints.

## When to Build

Consider a custom guardrail when:

- The risk category is specific to your domain.
- Existing tools miss local language or cultural context.
- You need a lightweight classifier with predictable latency.
- You need configurable thresholds or action bands.
- You have examples from production or expert review.

## Basic Workflow

1. Define the risk category and action policy.
2. Collect positive and negative examples.
3. Label examples with clear guidance.
4. Train or configure a detector.
5. Evaluate precision, recall, latency, and robustness.
6. Tune thresholds against product risk.
7. Monitor failures and refresh the dataset.

For examples of GovTech-developed guardrails, see [LionGuard](../tools/lionguard.md) and [Guardrails developed by GovTech](../guardrails/govtech.md).
