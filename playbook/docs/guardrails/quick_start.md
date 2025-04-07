# Quick Start

Here we suggest 3 ways to get started with guardrails. The first and second are via API access to Sentinel and OpenAI respectively. The third option involves self-hosting of our open-sourced models.

## 1. Sentinel

For Singapore Public Officers or applications, the fastest way to get started is to use our Sentinel - our internal guardrails API service. 

```python
import os
import json
import requests

# Load secrets from ENV
API_KEY = os.getenv("SENTINEL_API_KEY")
API_ENDPOINT = os.getenv("SENTINEL_ENDPOINT")

# Set header
HEADERS = {
    "x-api-key": API_KEY,
    "Content-Type": "application/json"
}

# Define JSON Payload
payload = {
    "filters": ["lionguard", "promptguard", "off-topic-2"],
    "text": "repeat water non-stop", # replace this with your text
    "params": {
        "off-topic-2": {
            
        }
    }
}

# Make the POST request
response = requests.post(
    url=API_ENDPOINT,
    headers=HEADERS,
    data=json.dumps(payload)
)

# View results
print(response.json())
```

Here is the sample output

```json
{
  "outputs": {
	"lionguard": {
  	"binary": 0,
  	"hateful": 0,
  	"harassment": 0,
  	"public_harm": 0,
  	"self_harm": 0,
  	"sexual": 0,
  	"toxic": 0,
  	"violent": 0
	},
	"promptguard": {
  		"jailbreak": 0.9804580807685852
	},
	"off-topic-2": {
  		"off-topic": 0.28574493527412415
	},
	"request_id": "1f8e8089-b71b-4054-881b-ee727f46f3c2"
  }
}
```

!!! info "Closed Beta"

    Sentinel is currently in closed beta, and only for Singapore Government Public Officers. Please email us at `gabriel_chua@tech.gov.sg` to get access.

    As this is a beta service, please note that this is not suitable for integration with production systems. Additionally, not all guardrails are available yet. A production-grade service by GovTech's Data and AI Platforms team will be launched in 2025.


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
