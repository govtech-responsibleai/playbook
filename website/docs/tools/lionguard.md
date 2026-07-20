---
sidebar_label: "[L] LionGuard"
sidebar_position: 4
---

# LionGuard

:::info[About this page]

This page is new in the upcoming Responsible AI Playbook release. It pulls together LionGuard's capabilities, design rationale, and access points into a single tool page. Unhighlighted sections are migrated from the previously published [Guardrails developed by GovTech: LionGuard](https://playbooks.aip.gov.sg/responsibleai/guardrails/govtech/#lionguard) page; new prose is highlighted.

:::

LionGuard is GovTech's localized content moderation guardrail for Singapore's linguistic and cultural context, addressing limitations in localisation and contextualisation faced by standard moderation guardrails.

![LionGuard](/images/lionguard.png)

## Capabilities

LionGuard 2 enhances moderation through:

1. Support for English, Singlish, Chinese, Malay, and partial Tamil.
2. Integration of our Whole-of-Government [risk taxonomy](./wog-safety-testing.md), enabling fine-grained moderation with defined severity levels.
3. Improved robustness against noisy and code-mixed inputs.

LionGuard categories include hateful content, insults, sexual content, physical violence, self-harm, and other misconduct. Some categories include severity levels.

## Why It's Lightweight

Lightweight deployment is central to LionGuard's design. LionGuard 2 uses pre-trained OpenAI embeddings combined with a multi-head ordinal classifier, significantly outperforming commercial and open-source systems across 17 localised and general benchmarks. It achieves these accuracy improvements using a training dataset 70% smaller than its predecessor, LionGuard 1, and can be fully retrained within two minutes on standard CPUs.

## Access

LionGuard 2 is open-sourced for self-hosting and accessible via the Sentinel API:

- [Sentinel: Available Guardrails](sentinel.md#available-guardrails)
- [GovTech Hugging Face collection](https://huggingface.co/collections/govtech/lionguard-673838d03777e5ccb1b0ac2f)
- [Blog post](https://go.gov.sg/lionguard-2-blog) and [paper](https://arxiv.org/abs/2507.15339)
