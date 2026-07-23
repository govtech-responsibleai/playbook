---
sidebar_label: "Responsible AI Benchmark"
sidebar_position: 7
---
# Responsible AI Benchmark

The Responsible AI Benchmark consolidates several of the key benchmarks and guardrails to give a baseline view of how the newest LLMs behave. A common set of tests runs across many models, reporting where they cluster on three dimensions:

- **Safety**: refusal on unsafe prompts, from [RabakBench](./rabakbench.md) and our WOG [risk taxonomy](./wog-safety-testing.md).
- **Robustness**: factual grounding and abstention on RAG tasks, from [KnowOrNot](./knowornot.md).
- **Fairness**: differential treatment across groups.

![Responsible AI Benchmark landing page](/images/rai-bench-main.png)

## When to Use

- Early model and guardrail comparison.
- A baseline view of safety, robustness, and fairness before tuning.

For launch readiness, combine results with [Designing an evaluation plan](../evaluating-ai-systems/index.md).