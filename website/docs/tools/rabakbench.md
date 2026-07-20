---
sidebar_label: "RabakBench"
sidebar_position: 5
---

# RabakBench

:::info[About this page]

This page is new in the upcoming Responsible AI Playbook release. It is the dedicated tool page for RabakBench, replacing the earlier section in the GovTech Benchmarks page. Unhighlighted sections are migrated from the previously published [GovTech's Benchmarks: RabakBench](https://playbooks.aip.gov.sg/responsibleai/testing/safety_testing/govtech/#rabakbench) page; new prose is highlighted.

:::

RabakBench is a multilingual AI safety benchmark tailored to Singapore's linguistic landscape, covering Singlish, Chinese, Malay, and Tamil. It addresses gaps left by existing benchmarks, moving beyond Singlish hate speech to include broader risk categories such as insults, sexual content, and self-harm. These categories align with the GovTech [risk taxonomy](./wog-safety-testing.md).

Use RabakBench to evaluate multilingual safety behaviour for LLMs, guardrails, or AI systems.

![RabakBench](/images/rabakbench.png)
_RabakBench — using Singapore's unique multilingual landscape as a stress test for AI safety_

## What It Reveals

RabakBench can evaluate guardrails, LLMs as models, and LLM applications. We evaluated widely-used guardrails and identified significant multilingual performance disparities — underscoring the need for localised benchmarks that uncover specific linguistic blind spots.

![RabakBench Results](/images/rabakbench_results.png)
_Results of evaluating 11 widely-used guardrails on RabakBench_

## How It Was Built

The creation of RabakBench followed a three-stage pipeline that carefully used LLMs to amplify human insights:

1. **Automated content generation paired with adversarial red-teaming** to discover challenging edge cases.
2. **Alternative testing approach** leveraging multiple LLM outputs and majority voting for scalable accuracy.
3. **Iterative human-in-the-loop translation** through annotation workshops and semantic similarity checks to ensure linguistic authenticity across all targeted languages.

## Access

- [Blog post](https://go.gov.sg/rabakbench-blog)
- [Paper](https://go.gov.sg/rabakbench-report)
- [Public benchmark](https://go.gov.sg/rabakbench)
