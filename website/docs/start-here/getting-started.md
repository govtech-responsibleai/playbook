---
sidebar_label: "[ALL] Getting started"
sidebar_position: 1
---

# Getting started

Welcome to the Responsible AI Playbook! This playbook is developed by GovTech Singapore's AI Practice, and aims to help you **build safe and trustworthy AI systems** by **providing practical guidance and useful insights**. 

We designed this playbook to cater to three main archetypes within the Singapore public sector. Find yourself below, then follow the route into the playbook — each one is ordered, so start at step 1.

<div class="rai-card-grid">

<div class="rai-card archetype-route archetype-route--developer">
<strong>Application developers</strong>
<span>You build and launch AI systems, and want to ship safely without becoming a Responsible AI specialist.</span>
<ol>
<li><a href="../../evaluating-ai-systems/">Plan your evaluation</a></li>
<li><a href="../../tools/lionguard/">Add an off-the-shelf guardrail</a></li>
<li><a href="../../improving-ai-systems/safety-improvements/">Defend against prompt injection</a></li>
</ol>
</div>

<div class="rai-card archetype-route archetype-route--governance">
<strong>Governance teams</strong>
<span>You oversee AI risk across an organisation — setting policy, reviewing launches, and tracking residual risk.</span>
<ol>
<li><a href="../about-responsible-ai/">Start with the six principles</a></li>
<li><a href="../../evaluating-ai-systems/">Adopt a shared evaluation framework</a></li>
<li><a href="../../improving-ai-systems/">Require improvement patterns</a></li>
</ol>
</div>

<div class="rai-card archetype-route archetype-route--practitioner">
<strong>AI practitioners</strong>
<span>You build models, evaluations, or systems, and want patterns you can apply alongside your existing work.</span>
<ol>
<li><a href="../../evaluating-ai-systems/methods/">Choose an evaluation method</a></li>
<li><a href="../../improving-ai-systems/threshold-tuning/">Tune your thresholds</a></li>
<li><a href="../../improving-ai-systems/building-your-own-guardrail/">Build your own guardrail</a></li>
</ol>
</div>

</div>

## Application developers

You build and launch AI products and want to ship safely without becoming a Responsible AI specialist. 

What this playbook gives you:

- A [simple and effective approach to developing an evaluation plan](../evaluating-ai-systems/index.md) you can run before launch.
- Open-source guardrails, like [LionGuard 2](../tools/lionguard.md), and benchmarks, like [MinorBench](../tools/minorbench.md) you can drop into your stack.
- Concrete guides for [PII redaction](../improving-ai-systems/privacy-improvements.mdx#pii-protection), [content safety](../improving-ai-systems/safety-improvements.mdx#content-safety), [prompt-injection defence](../improving-ai-systems/safety-improvements.mdx#prompt-injection-and-jailbreaks).

## Governance teams

You oversee AI risk across an organisation — setting policy, reviewing launches, and tracking residual risk.

What this playbook gives you:

- [A shared evaluation framework](../evaluating-ai-systems/index.md) across safety, robustness, fairness, and privacy dimensions.
- [Clear understanding of Responsible AI](./about-responsible-ai.md) and the six principles.
- Concrete [improvement patterns](../improving-ai-systems/index.md) — guardrails, finetuning, and principle-specific controls — to require of product teams.
- The full [Glossary](../tools/glossary.md) of terms used across the playbook.

## AI practitioners

You are an AI practitioner — a data scientist or ML engineer building AI models, evaluations, or systems — and want practical Responsible AI patterns you can apply alongside your existing work.

What this playbook gives you:

- Deep technical guidance on [evaluation methods](../evaluating-ai-systems/methods.mdx), [threshold tuning](../improving-ai-systems/threshold-tuning.md), and [building your own guardrail](../improving-ai-systems/building-your-own-guardrail.md).
- Benchmarks we maintain — [RabakBench](../tools/rabakbench.md), [MinorBench](../tools/minorbench.md), the [Responsible AI Benchmark](../tools/responsible-ai-benchmark.md) — and the [Litmus](../tools/litmus.md) test harness.
- A curated reading list of papers, surveys, and external tools in [External resources](../resources.md).

## The lifecycle

The playbook is organised around a practical lifecycle:

```mermaid
flowchart LR
  define[Define] --> evaluate[Evaluate]
  evaluate --> mitigate[Mitigate]
```

:::note[On the roadmap]

Two further stages, Govern and Apply, will join this lifecycle once their guidance is written.

:::