---
sidebar_label: "Privacy evals"
sidebar_position: 6
---
# Privacy and Personally Identifable Information (PII) leakage evals

Privacy evals check whether the system leaks, exposes, mishandles, or regurgitates personal or sensitive information.

In the era of generative AI and foundation models, privacy can no longer be treated as a static compliance checkbox; it is a dynamic property that must be evaluated across the entire lifecycle of an AI system. Protecting an AI ecosystem requires a comprehensive approach that measures and tests privacy risks at three distinct layers: **the data, the model, and the application**.

## Data layer

The Data Layer serves as the foundation, where privacy vulnerabilities at data ingestion may be memorised or encoded in learned parameters. The training of foundational models often relies on indiscriminate web scraping; the resulting training datasets inadvertently contain Personally Identifiable Information (PII) such as names, phone numbers, addresses, and private emails without the data subjects' explicit consent. If this data is not rigorously filtered or anonymised prior to training, models can memorise and subsequently regurgitate this sensitive information to end users, directly enabling [severe harms such as identity theft and fraud](https://www.ijcai.org/proceedings/2025/1156.pdf).

The primary goal at this layer is to measure the risk of individual-level linkage — the ability to connect data back to a specific person. Concrete techniques:

- **PII density** — quantify PII within the dataset using descriptive metrics like entity frequency.
- **Scrubber effectiveness** — use precision, recall, and F1 to evaluate automated PII scrubbers.
- **Privacy models** — apply [*k*-anonymity](https://www.worldscientific.com/doi/abs/10.1142/S0218488502001648), [*l*-diversity](https://dl.acm.org/doi/10.1145/1217299.1217302), and [*t*-closeness](https://www.cs.purdue.edu/homes/ninghui/papers/t_closeness_icde07.pdf) to measure vulnerability to linkage attacks and re-identification via auxiliary public records.
- **Attribute inference attacks** — for unstructured text, simulate how easily adversaries can infer hidden attributes such as medical status or political affiliations from semantic context, even when explicit identifiers are scrubbed.

## Model layer

The Model Layer introduces the danger of machine learning models — especially LLMs — memorising their training data or learning feature correlations that malicious actors can exploit to reverse-engineer sensitive training data. Beyond direct regurgitation of PII, Protected Health Information (PHI), or proprietary code, attackers can exploit model weights and predictive probabilities to extract information that was never explicitly exposed.

Testing at this layer relies on simulated attacks to establish empirical privacy metrics:

- [**Data extraction attacks**](https://arxiv.org/abs/2311.17035) — measure how often the model regurgitates sensitive training data verbatim.
- [**Membership inference attacks**](https://ieeexplore.ieee.org/document/9793586) — quantify the probability of deducing an individual's presence in the training set.
- [**Model inversion attacks**](https://rist.tech.cornell.edu/papers/mi-ccs.pdf) — evaluate whether demographic profiles or exact identities can be reconstructed from the model's outputs.

## Application layer

The Application Layer introduces new attack vectors when the AI interface interacts with users, databases, or third-party APIs. Even well-intentioned users pose a risk by inadvertently including PII in their prompts, which can lead to data leakage if the application logs or trains on user interactions.

Test priorities at this layer:

- **Adversarial red-teaming and prompt injection** — bypass safety guardrails to leak proprietary instructions and private context.
- **Access control auditing** — ensure the system respects Role-Based Access Controls (RBAC) by testing that users can only access or infer information they are authorised to use.
- **Logs and traces** — verify that operational telemetry does not retain unnecessary personal data.

## Evaluation set design

Include examples with:

- Realistic names, identifiers, contact details, and free-text personal data.
- Sensitive but non-standard formats.
- Requests to reveal another person's data.
- Prompt injection attempts that ask the system to expose hidden context or logs.
- RAG documents containing information that should not be surfaced to the user.

## Link to mitigations

Testing identifies leakage risk. Mitigation choices live in [PII guardrails](../improving-ai-systems/privacy-improvements.mdx#pii-protection) and [system-prompt leakage guardrails](../improving-ai-systems/privacy-improvements.mdx#system-prompt-leakage) in the privacy improvements section.

:::note[Further reading]

By decoupling the AI lifecycle into these three layers, you can deploy targeted testing methodologies that transition privacy from a reactive obligation to a proactive engineering standard. For more details, see the [Identifying Privacy Risks](https://go.gov.sg/identifying-privacy-risks-for-rai) and [Measuring Privacy Risks](https://go.gov.sg/measuring-privacy-risks-for-rai) chapters in GovTech Data Practice's AI Privacy publication.

:::
