# Overview of Guardrails

!!! warning "Check your organization's compliance policies when using external services"

    In this section, we do mention a few external services as examples. Using such external services means your data is sent to a third party. Please ensure that this is compliant with your organization's relevant policies.


## 1. Toxicity/Content Moderation

Content moderation is crucial for filtering out inappropriate or harmful content before it's processed or returned by the LLM. While most state-of-the-art LLMs have built-in safety features through their alignment process, having an additional moderation layer enhances security.

Popular options include:

- [OpenAI's Moderation API](https://platform.openai.com/docs/guides/moderation)
- [AWS Bedrock Guardrails](https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails.html) 
- [Azure AI Content Safety](https://learn.microsoft.com/en-us/azure/ai-services/content-safety/)
- Open source models like [LlamaGuard](https://huggingface.co/meta-llama/Llama-Guard-3-8B) by Meta and [ShieldGemma](https://huggingface.co/google/shieldgemma-2b) by Google
- [Mistral's moderation API](https://docs.mistral.ai/capabilities/guardrailing/)

These guardrails tend to have their taxonomy of what is considered harmful content. These categories are typically defined in the documentation.


### 1.1 Localised Content Moderation

Generic moderation models may not be sufficiently localized for specific contexts. For example, LionGuard was developed specifically for Singapore-specific content moderation. It's available through:

- Sentinel API (for Singapore Public Officers)
- Open source model on [HuggingFace](https://huggingface.co/govtech/lionguard-v1) (for self-hosting)

In the table below, we list the categories that LionGuard uses. The model provides a risk score for each risk category.

| S/N | Category | Description |
|-----|----------|-------------|
| 1 | Hateful | Content that expresses, incites, or promotes hate based on race, gender, ethnicity, religion, nationality, sexual orientation, disability status, or caste. Hateful content aimed at non-protected groups is considered harassment. Content that includes violence or serious harm towards protected groups. |
| 2 | Harassment | Content that expresses, incites, or promotes harassing language towards any target/individual. Content that causes prolonged mental or emotional suffering (>1 hour) without mention of violence. Any harassment content that includes violence or serious harm. |
| 3 | Encouraging Public Harm | Content that promotes, facilitates, or encourages harmful public acts, vice or organized crime. |
| 4 | Encouraging Self-Harm | Content that promotes, encourages, or depicts acts of self-harm, such as suicide, cutting, and eating disorders. Content that provides instructions or advice on committing such acts. |
| 5 | Sexual | Content meant to arouse sexual excitement, including descriptions of sexual activity or promotion of sexual services (excluding sex education and wellness). Sexual content involving minors under 18. |
| 6 | Toxic | Content that is rude, disrespectful, or profane, including use of slurs. Highly aggressive or disrespectful content likely to discourage user participation or discussion. |
| 7 | Violent | Content that depicts death, violence, or physical injury. |


## 2. Personal Identifiable Information (PII)

We do not want to pass PII to LLMs, especially when the LLM is accessed via an external managed service. 

To detect PII, we can use:

- [Cloak](https://cloak.gov.sg) - GovTech's dedicated internal service for comprehensive and localised PII detection (e.g., names, addresses). Direct integration with Sentinel API is coming soon.
- [Presidio](https://github.com/microsoft/presidio) - Open source tool that identifies various PII entities like names, phone numbers, addresses
- Custom regex patterns for basic PII detection

## 3. Jailbreak/Prompt Injection

As models evolve, jailbreak and prompt injection techniques become increasingly sophisticated. Applications should be robust against common attack patterns. 

[`PromptGuard`](https://huggingface.co/meta-llama/Prompt-Guard-86M) is a lightweight 86M parameter model specifically for detecting jailbreaks/prompt injections. We have integrated this into our Sentinel API.

!!! tip "Tip: Input Validation and Sanitization"

    Beyond having a separate guardrail model, it is also important to design your application in a way that is robust against prompt injection attacks. This includes:

    - Using structured inputs instead of free-form text
    - Classification for input validation (e.g., you have a free textbox for users to enter their resume. You can use a LLM to classify if the input is indeed a valid resume or not.) 

!!! warning "This is an evolving area"

    This is an evolving area, and new jailbreak techniques routinely emerge. As models are typically trained on known jailbreak patterns, they may be susceptible to these new jailbreak techniques. Nevertheless, it is still a good idea to have a guardrail model to detect **common** jailbreak attempts.

## 4. Off-Topic

Beyond harmful content, it's important to detect and filter irrelevant queries to maintain application focus. We call such queries as "off-topic".

![Off-topic](../images/off_topic.png)

Approaches include:

- Zero-shot/few-shot classifiers to detect relevance against system prompt. This approach, however, suffers from lower precision (i.e., many valid queries are incorrectly classified as off-topic).
- Using a custom topic classifier guardrail from Amazon Bedrock Guardrails or Azure AI Content Safety. To use this approach, however, you need to define your own taxonomy of what is considered off-topic and/or provide custom examples for model training.

Noting these limitations, we trained our own custom off-topic guardrail model that works zero-shot. It classifies if a given prompt is off-topic based on the system prompt. Further details can be found in our blog post here.

## 5. System-Prompt Leakage 

We typically include a system prompt in our Sentinel API to guide the LLM's behaviour. This system prompt usually contains the rules that the LLM must follow. Exposing it to the user may not be desirable as it may reveal sensitive information or allow the user to better manipulate the LLM's behaviour.

To detect if the system prompt is leaked, we can use:

- Word overlap analysis
- Semantic similarity checks

Here is an example of how we could use simple keyword overlap analysis to detect if the system prompt is leaked.

!!! warning "This section is under development"

    This section is under development. We will add more details here soon.


## 6. Hallucination

Ensuring LLM outputs are grounded in facts and provided context improves reliability. Techniques include:

- Comparing responses against source material
- Zero-shot verification of factual consistency
- Citation checking
- Knowledge graph validation

!!! warning "This section is under development"

    This section is under development. We will add more details here soon.

## 7. Relevance

Beyond topical relevance, responses should be:

- Contextually appropriate
- Within defined scope
- Aligned with user intent
- Grounded in provided references

!!! warning "This section is under development"

    This section is under development. We will add more details here soon.
