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

- [`PromptGuard`](https://huggingface.co/meta-llama/Prompt-Guard-86M) is a lightweight 86M parameter model specifically for detecting jailbreaks/prompt injections. We have integrated this into our Sentinel API.
- [Lakera](https://platform.lakera.ai/docs/api/guard) offers an API endpoint to detect prompt injections; however, not clear what/how effective the model is
- [`deberta-v3-base-injection`](https://huggingface.co/deepset/deberta-v3-base-injection) is a model finetuned on jailbreaks/prompt injections; however, it may be outdated
- [`ProtectAI`](https://github.com/protectai/rebuff) - multi-stage prompt injection detection framework relying on continually updated database of prompt injections and LLM-based detector; however, may be expensive and slow to run
- [Perplexity heuristics](https://docs.nvidia.com/nemo/guardrails/user-guides/guardrails-library.html#jailbreak-detection-heuristics) - perplexity-based heuristics/rules for detecting jailbreaking templates with adversarial prefixes/suffixes

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


## 6. Hallucination and factuality        

Ensuring LLM outputs are grounded in facts and the provided context improves reliability. Techniques include:

- Comparing responses against a reference (likely retrieved)
- [Knowledge graph validation](https://github.com/xz-liu/GraphEval)
- Citation checking

Of the above, the first technique is most popular, particularly in the RAG setting. There are currently many tools available for doing so (see [GovTech AIP's RAG Playbook](https://playbooks.aip.gov.sg/rag/evaluation/) for an assessment), including:

- [RAGAS](https://docs.ragas.io/en/latest/concepts/metrics/available_metrics/faithfulness/)
- [TruLens](https://www.trulens.org/getting_started/quickstarts/groundtruth_evals_for_retrieval_systems/)
- [DeepEval](https://docs.confident-ai.com/docs/metrics-hallucination)
- [AWS Bedrock Guardrails Contextual Grounding](https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails-contextual-grounding-check.html)
- [Azure AI Content Safety Groundedness](https://learn.microsoft.com/en-gb/azure/ai-services/content-safety/overview)

There is also a parallel track of research generally known as *reference-free* hallucination detection, which does not require a reference or source to verify claims. This is based on the intuition that LLMs may exhibit tell-tale behaviours when hallucinating, much like humans sweating when lying. There are three main approaches:

| Approach | Description | Examples |
|----------|-----------|----------|
| Sampling-based | Prompting the LLM to respond multiple times and evaluating the consistency of the responses; however, this can be computationally costly | - [Self-evaluation](https://arxiv.org/pdf/2207.05221 "asking models to first propose answers, and then to evaluate the probability 'P(True)' that their answers are correct and 'P(I Know)' that they know the answer to the question") <br> - [SelfCheckGPT](https://github.com/potsawee/selfcheckgpt "sample multiple responses and measure consistency of information among responses") <br> - [Semantic-aware cross-check consistency (SAC<sup>3</sup>)](https://github.com/intuit/sac3 "overcomes key limitations of self-consistency such as LMs consistently producing hallucinated facts, by conducting question-level (generating alternative, semantically equivalent input queries) and model-level (additional verified LM to generate answers) cross-checking; however, this is computationally heavy and slow") <br> - [Cross-examination](https://aclanthology.org/2023.emnlp-main.778.pdf "facilitate a multi-turn interaction between the LM that generated the claim and another LM (acting as an examiner) which introduces questions to discover inconsistencies") <br> - [CleanLab](https://aclanthology.org/2024.acl-long.283/ "combines enhanced self-consistency check (with more diverse prompts) and self-evaluation (asking the LLM to state how confident its original answer is correct) into a single score") |
| Probability-based | Examining and aggregating the probabilities of tokens generated, reframing hallucination detection as **uncertainty estimation**; however, this requires access to token probabilities, which close APIs do not provide | - [Token probability](https://arxiv.org/pdf/2307.03987 "obtain probabilities of concepts in response and additionally validate uncertain concepts") <br> - [Claim Conditioned Probability](https://github.com/IINemo/lm-polygraph/blob/5f3755e7c16d14aacf8c33ea97b26b4c619d2d54/README.md?plain=1#L156 "calculates claim-level uncertainty scores") <br> - [Semantic Entropy](https://www.nature.com/articles/s41586-024-07421-0 "sampling several possible answers to each question and clustering them algorithmically into answers that have similar meanings, before summing probabilities of sequences that share the same meaning and computing entropy") <br> - [LM-Polygraph](https://github.com/IINemo/lm-polygraph?tab=readme-ov-file#overview_of_methods "suite of uncertainty estimation (UE) methods and confidence scores") |
| Model-based | Finetuning new models to detect hallucination | - [Lynx](https://huggingface.co/PatronusAI/Llama-3-Patronus-Lynx-70B-Instruct "8b hallucination LLM that has been finetuned on hard-to-detect hallucinations, requiring users to provide question, answer and context triplets") |

!!! note "Latency and cost" 
    When using these evaluators at inference time, latency and cost may be of concern, especially when the response is long and has to be broken down into multiple claims/statements. Most methods rely on multiple calls to an evaluator LLM, compounding latency. An alternative method is to use [light weight natural language inference (NLI) models](https://huggingface.co/tasksource/deberta-small-long-nli) to detect entailment. Another option is to simply provide citations, allowing end-users to perform reference and fact verification on their own. 


While closely related to hallucination, <u>**factuality**</u> refers to the accuracy of information presented in accordance to world knowledge. World knowledge can be obtained from external tools like Wikipedia or Google Search, or stored in a knowledge base that serves as a single source of truth. Verifying responses with respect to world knowledge then becomes similar to hallucination detection in the RAG setting, with [this world knowledge akin to the retrieved context](https://docs.ragas.io/en/latest/concepts/metrics/available_metrics/factual_correctness/). 

In practice, facts can exist in multiple external knowledge bases. Hence, many tools have emerged to create pipelines for fact checking and verification. This includes: 

- [Loki](https://github.com/Libr-AI/OpenFactVerification) - end-to-end pipeline for dissecting long texts into individual claims, assessing their worthiness for verification, generating queries for evidence search, crawling for evidence, and verifying the claims; optimised with parallelism and human-in-the-loop
- [Search-Augmented Factuality Evaluator (SAFE)](https://github.com/google-deepmind/long-form-factuality) - use LLM agents to reason and send search queries to Google Search
- [Grounding with Gemini](https://ai.google.dev/gemini-api/docs/grounding?lang=python) - ground Gemini responses with Google Search


!!! tip "Tip: Prompt Design"

    Beyond having a separate guardrail model, it is prudent to design your prompt to minimise hallucination. This includes:

    - Charater role prompting
    - Chain of Thought/Chain of Knowledge
    - Instructing the model to respond "I don't know" if it is not certain
    - Opinion-based prompts
    - Counterfactual demonstrations

!!! tip "Tip: Decoding"

    Given access to model weights, it is also possible to improve decoding strategies to reduce hallucinations. This includes: 
    
    - factual-nucleas sampling
    - context-aware decoding

## 7. Relevance

Beyond topical relevance, responses should be:

- Contextually appropriate
- Within defined scope
- Aligned with user intent
- Grounded in provided references

!!! warning "This section is under development"

    This section is under development. We will add more details here soon.
