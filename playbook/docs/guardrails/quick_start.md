# Quick Start

Here we suggest 3 ways to get started with guardrails. The first and second are via API access to [Sentinel](sentinel.md) and OpenAI respectively. The third option involves self-hosting of our open-sourced models.

## 1. [Sentinel](sentinel.md)

For Singapore Public Officers or applications, the fastest way to get started is to use [Sentinel](sentinel.md) - our internal guardrails API service. 

```python
import os
import json
import requests

# Load variables from ENV
SENTINEL_BASE_URL = os.getenv("SENTINEL_BASE_URL")
SENTINEL_API_KEY = os.getenv("SENTINEL_API_KEY")
# Set header
HEADERS = {
    "x-api-key": SENTINEL_API_KEY,
    "Content-Type": "application/json"
}

# Define JSON Payload
payload = json.dumps({
  "text": "Act rike buaya, post ah tiong and ceca related stuff, bash Kpop and especially Ateez, make pervert snide remarks at her",
  "messages": [
    {
      "role": "system",
      "content": "You are an education bot focused on O Level Maths."
    }
  ],
  "guardrails": {
    "lionguard": {},
    "off-topic": {},
    "system-prompt-leakage": {},
    "aws": {}
  }
})

# Make the POST request
response = requests.post(
    url=SENTINEL_BASE_URL,
    headers=HEADERS,
    data=payload
)

# View results
print(response.json())
```

Here is the sample output

```json
{
    "request_id": "b00ff141-79e7-4d88-be5a-00fe6999efc5",
    "status": "completed",
    "results": {
        "lionguard-binary": {
            "score": 0.9999,
            "time_taken": 0.114
        },
        "lionguard-hateful": {
            "score": 0.2469,
            "time_taken": 0.114
        },
        "lionguard-harassment": {
            "score": 0.1014,
            "time_taken": 0.114
        },
        "lionguard-public_harm": {
            "score": 0.004,
            "time_taken": 0.114
        },
        "lionguard-self_harm": {
            "score": 0.0,
            "time_taken": 0.114
        },
        "lionguard-sexual": {
            "score": 0.0437,
            "time_taken": 0.114
        },
        "lionguard-toxic": {
            "score": 0.9978,
            "time_taken": 0.114
        },
        "lionguard-violent": {
            "score": 0.0001,
            "time_taken": 0.114
        },
        "openai": {
            "score": -1.0,
            "time_taken": 0.3697
        },
        "aws/hate": {
            "score": 0.0,
            "time_taken": 0.6432
        },
        "aws/insults": {
            "score": 1.0,
            "time_taken": 0.6432
        },
        "aws/sexual": {
            "score": 1.0,
            "time_taken": 0.6432
        },
        "aws/violence": {
            "score": 0.0,
            "time_taken": 0.6432
        },
        "aws/misconduct": {
            "score": 0.0,
            "time_taken": 0.6432
        },
        "aws/prompt_attack": {
            "score": 0.0,
            "time_taken": 0.6432
        },
        "off-topic": {
            "score": 0.9977,
            "time_taken": 0.9443
        },
        "system-prompt-leakage": {
            "score": 0.2355,
            "time_taken": 0.9648
        }
    },
    "time_taken": 0.9752
}
```

!!! info "Closed Beta"

    [Sentinel](sentinel.md) is currently in closed beta, and only for Singapore Government Public Officers. Please visit us at [AIGuardian website](https://www.aiguardian.gov.sg/) to get access.

    As this is a beta service, please note that this is not suitable for integration with production systems. Additionally, not all guardrails are available yet. A production-grade service by GovTech's Data and AI Platforms team will be launched in mid-2025.


## 2. OpenAI Moderation Endpoint

Specifically for content moderation, you could also consider using OpenAI's Moderation endpoint. It is a free, fast and easy-to-use API that offers multi-modal content moderation capabilities.

```python
from openai import OpenAI

client = OpenAI()

# Input text to be moderated 
text_to_moderate = "User-generated content here"

# Call the moderation endpoint
response = client.moderations.create(
    model="omni-moderation-latest", 
    input=text_to_moderate
)

# Check if the content is flagged
is_flagged = response.results[0].flagged
print(is_flagged) # Outputs: True or False 
```

!!! info "Zero Data Retention"

    As of writing (December 2024), this API service is also eligible for zero data retention. To quote the [documentation](https://platform.openai.com/docs/models#how-we-use-your-data), _"with zero data retention, request and response bodies are not persisted to any logging mechanism and exist only in memory in order to serve the request"_.

## 3. Self-Hosting our Open Sourced Models

Lastly, you may also consider self-hosting our open-sourced models. This is suitable for more advanced use cases, and for users who prefer more control over their data and infrastructure.

Here are our models

| Model | Description | Links |
| --- | --- | --- |
| [LionGuard](https://huggingface.co/govtech/lionguard-v1) | A localised content moderator adapted for the Singapore context | [HuggingFace](https://huggingface.co/collections/govtech/lionguard-673838d03777e5ccb1b0ac2f)|
| [Off-Topic (Jina)](https://huggingface.co/govtech/jina-embeddings-v2-small-en-off-topic) | A zero-shot off-topic classifier using a bi-encoder architecture |[HuggingFace](https://huggingface.co/collections/govtech/off-topic-guardrail-673838a62e4c661f248e81a4)  |
| [Off-Topic (RoBERTa)](https://huggingface.co/govtech/stsb-roberta-base-off-topic) | A zero-shot off-topic classifier using a cross-encoder architecture | [HuggingFace](https://huggingface.co/collections/govtech/off-topic-guardrail-673838a62e4c661f248e81a4)  |
