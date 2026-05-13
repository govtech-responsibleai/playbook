---
sidebar_label: "LLM evaluation"
sidebar_position: 7
---

# LLM Evaluation

:::info[About this page]

This page is new in the upcoming Responsible AI Playbook release. It is a short LLM-evaluation primer that points readers at the canonical Evaluating AI Systems pages. All content is new.

:::

LLM evaluation covers functional quality, safety, privacy, robustness, and fairness — plus the cross-cutting techniques (human review, LLM-as-judge, continuous evals) used across all of those.

## What's Distinctive About LLM Evaluation

<mark class="new-since-v1">*Coming soon — this section will cover what changes when the system under test is generative: open-ended outputs that resist exact-match scoring, the need for rubrics and judges, the cost of human evaluation at scale, judge drift over time, and the cat-and-mouse cycle between testing data and the models that train on it.*</mark>

## Where to Start

- [Designing an evaluation plan](../evaluating-ai-systems/index.md#designing-an-evaluation-plan) — system boundary, dimensions, eval set, metrics, failure analysis.
- [Functional evals](../evaluating-ai-systems/functional.md) — task quality, RAG/grounding, performance.
- [Safety evals](../evaluating-ai-systems/safety.mdx) — ASR, refusal taxonomy, benchmark leakage.
- [Robustness](../evaluating-ai-systems/robustness.md), [Fairness](../evaluating-ai-systems/fairness.md), [Privacy](../evaluating-ai-systems/privacy.md) — area-specific evaluation.
- [Evaluation methods](../evaluating-ai-systems/methods.mdx) — human evaluation, LLM-as-judge (with the Alternative Annotator Test), continuous evals and monitoring.

For external papers and tools, see [Papers and external tools](../resources.md).
