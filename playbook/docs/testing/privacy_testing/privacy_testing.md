# Privacy Testing

In the era of generative AI and foundation models, privacy can no longer be treated as a static compliance checkbox; it is a dynamic property that must be evaluated across the entire lifecycle of an AI system. Protecting an AI ecosystem requires a comprehensive approach that measures and tests privacy risks at three distinct layers: the data, the model, and the application.

## The Data Layer

The Data Layer serves as the foundation, where privacy vulnerabilities at data ingestion become fundamentally baked into the model's weights. The primary goal here is to measure the risk of individual-level linkage, which refers to the ability to connect data back to a specific person. This involves quantifying Personally Identifiable Information (PII) density within the datasets using descriptive metrics like entity frequency, while utilizing precision, recall, and F1 scores to evaluate the effectiveness of the automated PII scrubbers. It also requires applying privacy models like [_k_-anonymity](https://www.worldscientific.com/doi/abs/10.1142/S0218488502001648), [_l_-diversity](https://dl.acm.org/doi/10.1145/1217299.1217302), and [_t_-closeness](https://www.cs.purdue.edu/homes/ninghui/papers/t_closeness_icde07.pdf) to measure vulnerability to linkage attacks and re-identification via auxiliary public records. In unstructured text data, simulations of attribute inference attacks can be used to determine how easily adversaries can infer hidden attributes such as medical status or political affiliations from semantic context, even when explicit identifiers are scrubbed.

## The Model Layer

The Model Layer introduces the danger of machine learning models, especially Large Language Models, memorizing their training data or learning feature correlations that malicious actors can exploit to reverse-engineer sensitive training data. Testing at this level relies on simulated attacks to establish empirical privacy metrics: automated [data extraction attacks](https://arxiv.org/abs/2311.17035) measure how often the model regurgitates sensitive training data verbatim, [membership inference attacks](https://ieeexplore.ieee.org/document/9793586) quantify the probability of deducing an individual's presence in the training set, and [model inversion attacks](https://rist.tech.cornell.edu/papers/mi-ccs.pdf) evaluate whether demographic profiles or exact identities can be reconstructed from the model's outputs.

## The Application Layer

The Application Layer introduces new attack vectors when the AI interface interacts with users, databases, or third-party APIs. Adversarial red teaming and prompt injections can be used to bypass safety guardrails and leak proprietary instructions and private context. Mitigating these risks requires strict access control auditing to ensure the system respects Role-Based Access Controls (RBAC), guaranteeing that users only generate insights from data they are explicitly authorized to query.

!!! note "Learn More"
    By decoupling the AI lifecycle into these three layers, we can deploy targeted testing methodologies that transition privacy from a reactive obligation to a proactive engineering standard. For more details, see the [Measuring Privacy Risks](https://go.gov.sg/measuring-privacy-risks-for-rai) chapter in GovTech Data Practice's AI Privacy publication.
