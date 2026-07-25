---
sidebar_label: "[JY] Measuring guardrail impact"
sidebar_position: 10
---

# Measuring guardrail impact

:::info[About this page]

This page is new in the upcoming Responsible AI Playbook release. It covers metrics, evaluation design, and failure-review patterns for evaluating guardrails as application components. All content is new.

:::

A guardrail should be evaluated like any other model or system component. The goal is not only to catch risks, but to improve the overall user journey.

## Metrics

Measure:

- Precision and recall against labelled examples.
- False positive and false negative rates.
- Latency and cost added by the guardrail.
- Over-refusal or unnecessary blocking.
- User completion rate after warnings or redirects.
- Downstream reduction in safety failures.

## Evaluation design

Test the full application with and without the guardrail when possible. A guardrail that performs well in isolation may still create poor behaviour when combined with prompts, retrieval, tools, or other guardrails.

## Failure review

Review both misses and over-blocks. Misses show where risk remains; over-blocks show where the mitigation may harm usefulness or user trust.
