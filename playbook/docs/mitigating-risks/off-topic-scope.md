# Off-Topic and Scope Guardrails

Off-topic guardrails keep applications within their intended purpose. Beyond filtering harmful content, detecting and filtering irrelevant queries helps maintain application focus.

![Off-topic](../images/off_topic.png)

## Use Cases

- Public service chatbots that should only answer about a specific scheme or service.
- Internal assistants limited to a business process.
- Education or youth-facing applications with restricted topics.
- Retrieval systems that should not answer outside their knowledge base.

## Detection Approaches

- **Zero-shot/few-shot classifiers** to detect relevance against the system prompt. Suffers from lower precision — many valid queries are wrongly flagged off-topic.
- **Custom topic classifier guardrails** from Amazon Bedrock Guardrails or Azure AI Content Safety. Requires defining your own taxonomy of what is off-topic and/or providing custom training examples.
- **GovTech's Off-Topic guardrail** — a custom guardrail trained zero-shot on synthetic system-prompt and user-prompt pairs.

## GovTech's Off-Topic Guardrail

We built this guardrail because existing solutions either required training a use-case-specific guardrail or configuring it with examples of on- and off-topic prompts — challenging in the absence of real production data. Instead, we created a rich dataset of synthetic system-prompt / user-prompt pairs (on- and off-topic) and trained a lightweight classifier.

For v1 we trained a bi-encoder classifier on top of `jina-embeddings-v2-small-en` and a cross-encoder classifier on top of `stsb-roberta-base`.

- [Blog post](https://medium.com/dsaid-govtech/open-sourcing-an-off-topic-prompt-guardrail-fde422a66152)
- [Paper](https://arxiv.org/abs/2411.12946)
- Available via the [Sentinel API](../tools/sentinel.md#available-guardrails) (`govtech/off-topic`)

## Actions

- Redirect the user to supported topics.
- Refuse unsupported topics politely.
- Ask a clarifying question when scope is ambiguous.
- Escalate repeated or suspicious attempts.

## Code Example

=== "General (cosine similarity)"

    ```python
    # Lightweight off-topic check: embed system prompt and user prompt,
    # flag if cosine similarity falls below a threshold.
    from sentence_transformers import SentenceTransformer, util

    model = SentenceTransformer("jinaai/jina-embeddings-v2-small-en")

    def is_off_topic(system_prompt: str, user_prompt: str, threshold: float = 0.35) -> bool:
        s, u = model.encode([system_prompt, user_prompt])
        return float(util.cos_sim(s, u)) < threshold
    ```

=== "Sentinel"

    ```python
    payload = json.dumps({
        "text": user_input,
        "messages": [{"role": "system", "content": SYSTEM}],
        "guardrails": {"off-topic": {"system_prompt": SYSTEM}},
    })
    response = requests.post(SENTINEL_BASE_URL, headers=HEADERS, data=payload)
    if response.json()["results"]["off-topic"]["score"] > 0.7:
        return "I can only help with O-Level Maths questions."
    ```
