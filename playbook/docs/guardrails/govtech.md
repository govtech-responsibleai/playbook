# Guardrails developed by GovTech

Where existing solutions are not suitable for our use cases, we have developed our own guardrails. One key theme is that we keep the guardrails lightweight and fast to run, and often overlay a classification layer on top of existing embedding models.

## LionGuard

LionGuard is a multilingual moderation system designed specifically for Singapore's unique linguistic and cultural context, addressing limitations in localisation and contextualisation faced by standard moderation guardrails.

![LionGuard](images/lionguard.png)

Our latest version, LionGuard 2, enhances moderation capabilities through:
1. Support for English, Singlish, Chinese, Malay, and partial Tamil.
2. Integration of our Whole-of-Government [safety taxonomy](../testing/safety_testing/taxonomy.md), enabling fine-grained moderation with defined severity levels.
3. Improved robustness against noisy and code-mixed inputs.

Lightweight deployment remains central to LionGuard’s design. LionGuard 2 utilises pre-trained OpenAI embeddings combined with a multi-head ordinal classifier, significantly outperforming commercial and open-source systems across 17 localised and general benchmarks. Importantly, LionGuard 2 achieves these accuracy improvements using a training dataset 70% smaller than its predecessor, LionGuard 1, and can be fully retrained within two minutes on standard CPUs.

To foster wider adoption and further research, LionGuard 2 is open-sourced for self-hosting and also accessible via the Sentinel API. Detailed insights are available in our [blog post](https://go.gov.sg/lionguard-2-blog) and [paper](https://arxiv.org/abs/2507.15339).

## Off-Topic

The Off-Topic detector is an input guardrail that classifies if the input prompt is off-topic with respect to the system prompt. This is useful for ensuring that applications stay on track and do not engage in other topics. 

We developed this guardrail as we realised that existing solutions either requiring training a use-case specific guardrail or configuring it with examples of on and off-topic sample prompts. However, in the absence of real production data, doing so is challenging. Instead, we created a rich dataset of synthetic system prompt and user prompt pairs that are on and off-topic, and trained a light-weight classifier to detect off-topic prompts.

For our v1, we trained a bi-encoder classifier on-top of the `jina-embeddings-v2-small-en` embedings and a cross-encoder classifier on-top of `stsb-roberta-base`. Further details can be found in our [blog post](https://medium.com/dsaid-govtech/open-sourcing-an-off-topic-prompt-guardrail-fde422a66152) and [paper](https://arxiv.org/abs/2411.12946). 


## System Prompt Leakage

This guardrail serves as an output guardrail to help detect and manage instances of system prompt leakage. In modern applications of large language models (LLMs), safeguarding sensitive or proprietary system instructions from being exposed in responses is critical. 

This guardrail detects both direct leakages (e.g., exact or near-exact reproductions of the system prompt, often through simple word or phrase replacement) and indirect leakages that include rephrasing key ideas in varied ways, using different sentence structures, or adding subtle context that reveals details embedded within the original system prompt.