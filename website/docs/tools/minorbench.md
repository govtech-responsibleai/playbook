---
sidebar_label: "MinorBench"
sidebar_position: 6
---

# MinorBench


MinorBench is a benchmark for child-specific safety risks in AI systems. It is a hand-curated set of prompts across six child-specific risk categories: **Danger, Sexual, Profanities, Hateful, Self-harm, and Substance Use**.

Use MinorBench when evaluating a system that may be used by minors or deployed in an educational context.

## Background

LLMs are rapidly entering children's lives through parent-driven adoption, schools, and peer networks, yet AI safety research has not adequately addressed content-related risks specific to minors. We developed MinorBench after a real-world case study of an LLM-based chatbot deployed in a middle school, including educator interviews and analysis of student chat logs that revealed both appropriate use and misuse.

The benchmark reflects how children might interact with educational chatbots, from asking "How to kiss properly?" to requesting instructions for illegal or inappropriate activities.

## What the results showed

Our evaluation of six prominent LLMs found substantial variability in child-safety compliance, with performance influenced by both model choice and system prompt configuration.

| Model | v1 | v2 | v3 | v4 |
| --- | --- | --- | --- | --- |
| GPT-4o-mini | 4.3% (2.3–6.7) | 56.2% (50.8–61.2) | 97.0% (95.0–99.0) | 89.3% (85.6–92.6) |
| o3-mini | 5.4% (3.0–8.0) | 28.8% (24.1–33.8) | 76.6% (71.2–81.6) | 44.1% (39.1–49.2) |
| Gemini 2.0 Flash | 5.7% (3.0–8.7) | 70.6% (65.6–75.6) | 96.3% (94.3–98.3) | 85.6% (81.6–89.3) |
| Claude 3.5 Haiku | 29.4% (24.4–35.1) | 65.9% (60.5–71.6) | 87.3% (83.3–90.6) | 66.6% (61.5–71.7) |
| Llama 3.3 70b | 8.4% (5.4–11.4) | 31.4% (26.1–37.1) | 92.6% (89.3–95.3) | 71.6% (66.2–76.3) |
| R1 distilled (Llama 3.3 70b) | 6.4% (3.7–9.4) | 17.1% (13.0–21.4) | 22.4% (17.7–27.1) | 19.1% (14.4–23.7) |

_Table: refusal rates on MinorBench with 95% bootstrap confidence intervals, higher is better, across four system prompt versions. Read down each column rather than across: at v1 every model except Claude 3.5 Haiku refuses less than 10% of the time, while at v3 most exceed 85% and R1 distilled remains at 22.4%._

The system prompt effect is the practically important finding. The same model moved from single-digit refusal rates to above 90% depending on how it was prompted, which means a benchmark score attached to a model name tells you little about how your system will behave. Run MinorBench against your own system prompt rather than relying on a published per-model figure.

## Access

<div class="access-grid">

  <a class="access-card access-card--paper" href="https://arxiv.org/abs/2503.10242"><strong>Paper</strong><span>Methodology, risk categories, and full results</span></a>
  <a class="access-card access-card--dataset" href="https://huggingface.co/datasets/govtech/MinorBench"><strong>Dataset</strong><span>Prompts on Hugging Face</span></a>

</div>

## Where to go next

- [Safety evals](../evaluating-ai-systems/safety.mdx) — where benchmark results fit in a wider safety evaluation.
- [RabakBench](rabakbench.md) — multilingual safety benchmarking for the Singapore context.
