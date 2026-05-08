# LLM Evaluation

LLM evaluation covers functional quality, safety, privacy, robustness, and fairness — plus the cross-cutting techniques (human review, LLM-as-judge, continuous evals) used across all of those.

## What's Distinctive About LLM Evaluation

*Coming soon — this section will cover what changes when the system under test is generative: open-ended outputs that resist exact-match scoring, the need for rubrics and judges, the cost of human evaluation at scale, judge drift over time, and the cat-and-mouse cycle between testing data and the models that train on it.*

## Where to Start

- [Designing an evaluation plan](../evaluating-risks/index.md#designing-an-evaluation-plan) — system boundary, dimensions, eval set, metrics, failure analysis.
- [Functional evals](../evaluating-risks/functional.md) — task quality, RAG/grounding, performance.
- [Safety evals](../evaluating-risks/safety.md) — ASR, refusal taxonomy, benchmark leakage.
- [Robustness](../evaluating-risks/robustness.md), [Fairness](../evaluating-risks/fairness.md), [Privacy](../evaluating-risks/privacy.md) — area-specific evaluation.
- [Evaluation methods](../evaluating-risks/methods.md) — human evaluation, LLM-as-judge (with the Alternative Annotator Test), continuous evals and monitoring.

For external papers and tools, see [Papers and external tools](../resources.md).
