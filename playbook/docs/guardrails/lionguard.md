# LionGuard

LionGuard is a multilingual moderation system designed specifically for Singapore's unique linguistic and cultural context, addressing limitations in localisation and contextualisation faced by standard moderation guardrails.

<img src="images/lionguard.png" alt="LionGuard" style="width: 50%;" />

Our latest version, LionGuard 2, enhances moderation capabilities through:
1. Support for English, Singlish, Chinese, Malay, and partial Tamil.
2. Integration of our Whole-of-Government [safety taxonomy](../testing/safety_testing/taxonomy.md), enabling fine-grained moderation with defined severity levels.
3. Improved robustness against noisy and code-mixed inputs.

Lightweight deployment remains central to LionGuard’s design. LionGuard 2 utilises pre-trained OpenAI embeddings combined with a multi-head ordinal classifier, significantly outperforming commercial and open-source systems across 17 localised and general benchmarks. Importantly, LionGuard 2 achieves these accuracy improvements using a training dataset 70% smaller than its predecessor, LionGuard 1, and can be fully retrained within two minutes on standard CPUs.

To foster wider adoption and further research, LionGuard 2 is open-sourced for self-hosting and also accessible via the Sentinel API. Detailed insights are available in our [blog post](PLACEHOLDER) and [paper](PLACEHOLDER).