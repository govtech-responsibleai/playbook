---
sidebar_label: "RabakBench"
sidebar_position: 5
---
# RabakBench

RabakBench is a multilingual AI safety benchmark tailored to Singapore's linguistic landscape, covering Singlish, Chinese, Malay, and Tamil. It addresses gaps left by existing benchmarks, moving beyond Singlish hate speech to include broader risk categories such as insults, sexual content, and self-harm. These categories align with the GovTech [risk taxonomy](./wog-safety-testing.md).

Use RabakBench to evaluate multilingual safety behaviour for LLMs, guardrails, or AI systems.

![RabakBench](/images/rabakbench.png)
*RabakBench — using Singapore's unique multilingual landscape as a stress test for AI safety*

## What it reveals

RabakBench can evaluate guardrails, LLMs as models, and LLM applications. We evaluated widely-used guardrails and identified significant multilingual performance disparities — underscoring the need for localised benchmarks that uncover specific linguistic blind spots.

![RabakBench Results](/images/rabakbench_results.png)
*Results of evaluating 11 widely-used guardrails on RabakBench*

## How it was built

The creation of RabakBench followed a three-stage pipeline that carefully used LLMs to amplify human insights:

1. **Automated content generation paired with adversarial red-teaming** to discover challenging edge cases.
2. **Alternative testing approach** leveraging multiple LLM outputs and majority voting for scalable accuracy.
3. **Iterative human-in-the-loop translation** through annotation workshops and semantic similarity checks to ensure linguistic authenticity across all targeted languages.

## Access

<div class="access-grid">

  <a class="access-card access-card--paper" href="https://go.gov.sg/rabakbench-report"><strong>Paper</strong><span>Methodology and results</span></a>
  <a class="access-card access-card--dataset" href="https://go.gov.sg/rabakbench"><strong>Public benchmark</strong><span>Multilingual safety dataset</span></a>
  <a class="access-card access-card--blog" href="https://go.gov.sg/rabakbench-blog"><strong>Blog</strong><span>Why we built RabakBench</span></a>

</div>

