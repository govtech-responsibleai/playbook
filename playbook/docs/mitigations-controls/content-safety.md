# Content Safety Guardrails

!!! info "About this page"

    This page is new in the upcoming Responsible AI Playbook release. It covers content-safety categories, popular moderation services, and a General/Sentinel code example. Unhighlighted sections are migrated from the previously published [Different Types of Guardrails: Toxicity / Content Moderation](https://playbooks.aip.gov.sg/responsibleai/guardrails/diff_guardrails/#1-toxicitycontent-moderation) page; new prose and the code example are highlighted.

Content safety guardrails detect harmful, offensive, or prohibited content in user inputs and model outputs. While most state-of-the-art LLMs have built-in safety features through their alignment process, an additional moderation layer enhances security.

!!! warning "Check compliance policies before using external services"

    External moderation services receive your data. Confirm compliance with your organisation's policies before integrating.

## Common Categories

- Hate or harassment.
- Sexual content.
- Violence or threats.
- Self-harm.
- Illegal or harmful instructions.
- Public harm or misconduct.

Use a taxonomy that fits your users and context. For Singapore public-sector safety categories, see the [Risk taxonomy](../understanding-risks/risk-categories.md) and [LionGuard](../tools/lionguard.md).

## Popular Moderation Services

- [OpenAI's Moderation API](https://platform.openai.com/docs/guides/moderation)
- [AWS Bedrock Guardrails](https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails.html)
- [Azure AI Content Safety](https://learn.microsoft.com/en-us/azure/ai-services/content-safety/)
- [LlamaGuard](https://huggingface.co/meta-llama/Llama-Guard-3-8B) (Meta) and [ShieldGemma](https://huggingface.co/google/shieldgemma-2b) (Google) — open-source
- [Mistral's moderation API](https://docs.mistral.ai/capabilities/guardrailing/)

These guardrails define their own taxonomy of harmful content, typically described in their documentation.

## Localised Content Moderation

Generic moderation models may miss local nuance. [LionGuard](../tools/lionguard.md) was developed specifically for Singapore-contextualised content moderation across English, Singlish, Chinese, Malay, and partial Tamil.

## Integration Choices

- Block high-confidence harmful content.
- Warn or redirect ambiguous content.
- Escalate high-impact cases.
- Log aggregate trends for monitoring.
- Use different thresholds for public-facing and internal systems.

## Code Example

=== "OpenAI Moderation"

    ```python
    from openai import OpenAI

    client = OpenAI()
    text_to_moderate = "User-generated content here"

    response = client.moderations.create(
        model="omni-moderation-latest",
        input=text_to_moderate,
    )

    is_flagged = response.results[0].flagged
    print(is_flagged)  # True or False
    ```

    !!! info "Zero data retention"

        At the time of writing, this API service is eligible for zero data retention — request and response bodies are not persisted to any logging mechanism and exist only in memory to serve the request.

=== "Sentinel"

    ```python
    import os
    import json
    import requests

    SENTINEL_BASE_URL = os.getenv("SENTINEL_BASE_URL")
    SENTINEL_API_KEY = os.getenv("SENTINEL_API_KEY")
    HEADERS = {
        "x-api-key": SENTINEL_API_KEY,
        "Content-Type": "application/json",
    }

    payload = json.dumps({
        "text": "Act rike buaya, post ah tiong and ceca related stuff",
        "messages": [
            {"role": "system", "content": "You are an education bot focused on O-Level Maths."}
        ],
        "guardrails": {"lionguard": {}, "aws": {}},
    })

    response = requests.post(SENTINEL_BASE_URL, headers=HEADERS, data=payload)
    print(response.json())
    ```

    See [Sentinel](../tools/sentinel.md) for the full set of available guardrails and onboarding details.
