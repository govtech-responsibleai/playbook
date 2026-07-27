---
sidebar_label: "Off-Topic guardrail"
sidebar_position: 5
---

# Off-Topic guardrail

GovTech's Off-Topic guardrail detects user prompts that fall outside an AI system's intended purpose. It scores relevance against your system prompt, so it needs no topic taxonomy of your own.

## Why we built it

Existing solutions either required training a use-case-specific guardrail or configuring it with examples of on- and off-topic prompts — challenging in the absence of real production data. Instead, we created a rich dataset of synthetic system-prompt / user-prompt pairs (on- and off-topic) and trained a lightweight classifier.

In v1, we trained a bi-encoder classifier on top of `jina-embeddings-v2-small-en` and a cross-encoder classifier on top of `stsb-roberta-base`.

## Access

Available via the [Sentinel API](sentinel.md#available-guardrails) (`govtech/off-topic`). For guidance on when and how to apply it, see [Robustness improvements](../improving-ai-systems/robustness-improvements.mdx#handling-off-topic-queries).

<div class="access-grid">

  <a class="access-card access-card--paper" href="https://arxiv.org/abs/2411.12946"><strong>Paper</strong><span>Methodology and results</span></a>
  <a class="access-card access-card--blog" href="https://medium.com/dsaid-govtech/open-sourcing-an-off-topic-prompt-guardrail-fde422a66152"><strong>Blog</strong><span>Why we open-sourced an off-topic prompt guardrail</span></a>

</div>
