---
sidebar_label: "MetaEvaluator"
sidebar_position: 2
---
# MetaEvaluator

**Evaluate LLM-as-a-Judge systems by measuring alignment with judge outputs with human annotations.**

MetaEvaluator is a Python framework that answers the question: **"How well do LLM judges align with human judgment?"** Use it to evaluate the quality of your LLM-as-a-judge, or to compare performance across various LLMs and system prompts.

![A person considering a robot judge holding a set of scales](/images/metaevaluator.webp)

## What it does

1. **Collects human annotations** through a built-in annotation interface, with multi-annotator support and resume capability.
2. **Runs LLM judges** on the same evaluation tasks across different providers (OpenAI, Anthropic, Google, AWS, etc.) using LiteLLM.
3. **Computes alignment metrics** — classification (accuracy, F1, precision, recall), agreement (Cohen's Kappa, the Alt-Test), and text/semantic similarity — with reports and visualisations.

## Access

<div class="access-grid">

  <a class="access-card access-card--repo" href="https://github.com/govtech-responsibleai/meta-evaluator"><strong>Repository</strong><span>Open-source repository</span></a>
  <a class="access-card access-card--docs" href="https://govtech-responsibleai.github.io/meta-evaluator/"><strong>Documentation</strong><span>Tutorial, guides, and API reference</span></a>
  <a class="access-card access-card--blog" href="https://blog.ai.gov.sg/metaevaluator-systematically-evaluate-your-llm-judges/"><strong>Blog</strong><span>Why we built MetaEvaluator</span></a>

</div>

