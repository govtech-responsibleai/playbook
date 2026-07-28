---
sidebar_label: "LionGuard"
sidebar_position: 4
---
# LionGuard

<div class="tool-intro">

![LionGuard](/images/lionguard.png)

LionGuard is GovTech's localised content moderation guardrail for Singapore's linguistic and cultural context, addressing limitations in localisation and contextualisation faced by standard moderation guardrails.

</div>

## Capabilities

LionGuard 2 enhances moderation through:

1. Support for English, Singlish, Chinese, Malay, and partial Tamil.
2. Integration of our Whole-of-Government [risk taxonomy](./wog-safety-testing.md), enabling fine-grained moderation with defined severity levels.
3. Improved robustness against noisy and code-mixed inputs.

## Harm categories

LionGuard assigns a risk score to each of the categories below. Some categories are further classified into severity levels, with Level 2 indicating higher severity than Level 1. If a Level 2 instance is detected, Level 1 is also flagged by design.

<div class="table-centered">

| S/N | Category | Description |
| --- | --- | --- |
| 1 | Hateful | Text that discriminates, criticises, insults, denounces, or dehumanises a person or group on the basis of a protected identity (e.g., race, religion, nationality, ethnicity, or other protected categories as defined under Singapore law). <br />**[Level 1: Discriminatory Speech]** Derogatory statements or negative stereotypes against a protected group. <br />**[Level 2: Hate Speech]** Explicit calls for harm or violence against a protected group; or language praising or justifying violence. |
| 2 | Insults | Text that demeans, humiliates, mocks, or belittles a person or group without referencing a legally protected trait. This includes personal attacks on attributes such as someone's appearance, intellect, behaviour, or other non-protected characteristics. |
| 3 | Sexual | Text that depicts or indicates sexual interest, activity, or arousal, using direct or indirect references to body parts, sexual acts, or physical traits. This includes sexual content that may be inappropriate for certain audiences. <br />**[Level 1: Content not appropriate for minors]** Mild-to-moderate sexual content that is generally adult-oriented or potentially unsuitable for those under 16. May include matter-of-fact discussions about sex, sexuality, or sexual preference. <br />**[Level 2: Content not appropriate for all ages]** Sexual content aimed at adults and considered explicit, graphic, or otherwise inappropriate for a broad audience. |
| 4 | Physical Violence | Text that includes glorification of violence or threats to inflict physical harm or injury on a person, group, or entity. |
| 5 | Self-Harm | Text that promotes, suggests, or expresses intent to self-harm or commit suicide. <br />**[Level 1: Ideation]** Expressions of suicidal thoughts or self-harm intention; or content encouraging someone to self-harm. <br />**[Level 2: Self-harm action or Suicide]** Descriptions or indications of ongoing or imminent self-harm behaviour. |
| 6 | All Other Misconduct | Text that seeks or provides information about engaging in misconduct, wrongdoing, or criminal activity, or that threatens to harm, defraud, or exploit others. This includes facilitating illegal acts (under Singapore law) or other forms of socially harmful activity. <br />**[Level 1: Generally not socially accepted]** Advocates or instructs on unethical/immoral activities that may not necessarily be illegal but are socially condemned. <br />**[Level 2: Illegal activities]** Seeks or provides instructions to carry out clearly illegal activities or serious wrongdoing; includes credible threats of severe harm. |

</div>

## LionGuard's lightweight architecture

Lightweight deployment is central to LionGuard's design. LionGuard 2 pairs a pre-trained embedding model with a multi-head ordinal classifier, significantly outperforming commercial and open-source systems across 17 localised and general benchmarks. It achieves these accuracy improvements using a training dataset 70% smaller than its predecessor, LionGuard 1, and can be fully retrained within two minutes on standard CPUs.

## Model variants

There are three versions of LionGuard 2. All share the same methodology and differ only in the embedding model they use, so the LionGuard 2 [paper](https://arxiv.org/abs/2507.15339) and [blog post](https://go.gov.sg/lionguard-2-blog) describe how each version works. For best performance, we recommend **LionGuard 2.1**. For local deployment, we recommend **LionGuard 2 Lite**.


<div class="table-centered">

| Version          | Embedding model          | Best for                                                                                                                 |
| ---------------- | ------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| LionGuard 2      | `text-embedding-3-large` | Baseline classifier with strong, robust performance across all benchmarks.                                               |
| LionGuard 2.1    | `gemini-embedding-001`   | Strong performance across all benchmarks, particularly in multilingual settings.                                       |
| LionGuard 2 Lite | `embeddinggemma-300m`    | Most lightweight, on-prem variant with no external API dependency, best for restricted environments and local inference. |

</div>


## Access

All three versions are open-sourced for self-hosting via Hugging Face and accessible through the [Sentinel API](sentinel.md#available-guardrails).

<div class="access-grid">

  <a class="access-card access-card--repo" href="https://huggingface.co/collections/govtech/lionguard-673838d03777e5ccb1b0ac2f"><strong>Hugging Face</strong><span>Models for self-hosting</span></a>
  <a class="access-card access-card--paper" href="https://arxiv.org/abs/2507.15339"><strong>Paper</strong><span>Methodology and results</span></a>
  <a class="access-card access-card--blog" href="https://go.gov.sg/lionguard-2-blog"><strong>Blog</strong><span>Why we built LionGuard 2</span></a>

</div>

