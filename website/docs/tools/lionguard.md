---
sidebar_label: "LionGuard"
sidebar_position: 4
---
# LionGuard

<div class="tool-intro">

<img src="/images/lionguard.png" alt="LionGuard" class="tool-logo" />

LionGuard is GovTech's localised content moderation guardrail for Singapore's linguistic and cultural context, addressing limitations in localisation and contextualisation faced by standard moderation guardrails.

</div>

## Capabilities

LionGuard 2 enhances moderation through:

1. Support for English, Singlish, Chinese, Malay, and partial Tamil.
2. Integration of our Whole-of-Government [risk taxonomy](./wog-safety-testing.md), enabling fine-grained moderation with defined severity levels.
3. Improved robustness against noisy and code-mixed inputs.

## LionGuard's lightweight architecture

Lightweight deployment is central to LionGuard's design. LionGuard 2 pairs a pre-trained embedding model with a multi-head ordinal classifier, significantly outperforming commercial and open-source systems across 17 localised and general benchmarks. It achieves these accuracy improvements using a training dataset 70% smaller than its predecessor, LionGuard 1, and can be fully retrained within two minutes on standard CPUs.

## Model variants

There are three versions of LionGuard 2. All share the same methodology and differ only in the embedding model they use, so the LionGuard 2 [paper](https://arxiv.org/abs/2507.15339) and [blog post](https://go.gov.sg/lionguard-2-blog) describe how each version works. For best performance, we recommend **LionGuard 2.1**. For local deployment, we recommend **LionGuard 2 Lite**.


| Version          | Embedding model          | Best for                                                                                                                 |
| ---------------- | ------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| LionGuard 2      | `text-embedding-3-large` | Baseline classifier with strong, robust performance across all benchmarks.                                               |
| LionGuard 2.1    | `gemini-embedding-001`   | Strong performance across all benchmarks, particularly in multilingual settings.                                       |
| LionGuard 2 Lite | `embeddinggemma-300m`    | Most lightweight, on-prem variant with no external API dependency, best for restricted environments and local inference. |


## Access

All three versions are open-sourced for self-hosting via Hugging Face and accessible through the [Sentinel API](sentinel.md#available-guardrails).

<div class="access-grid">

  <a class="access-card access-card--repo" href="https://huggingface.co/collections/govtech/lionguard-673838d03777e5ccb1b0ac2f"><strong>Hugging Face</strong><span>Models for self-hosting</span></a>
  <a class="access-card access-card--paper" href="https://arxiv.org/abs/2507.15339"><strong>Paper</strong><span>Methodology and results</span></a>
  <a class="access-card access-card--blog" href="https://go.gov.sg/lionguard-2-blog"><strong>Blog</strong><span>Why we built LionGuard 2</span></a>

</div>

