# Sentinel

Sentinel is GovTech's internal guardrail API service that provides a comprehensive suite of input and output guardrails for AI applications. It offers protection against risks like toxicity, prompt injection, PII exposure, and hallucination.

Sentinel is designed to be:

- Fast and performant with minimal latency impact
- Model-agnostic and compatible with any LLM
- Highly configurable with adjustable confidence thresholds
- Easy to integrate via REST API

You can explore Sentinel's capabilities through:

- Web demo: 🌐 [Try Sentinel](https://go.gov.sg/try-sentinel)
- API documentation: 📚 [Sentinel Docs](https://go.gov.sg/rai-sentinel-docs)

Currently in closed beta, Sentinel is available exclusively to Singapore Public Officers and government applications. To request access, please contact `gabriel_chua@tech.gov.sg`.

## Available Guardrails

| Name | Description | Remarks |
|------|-------------|---------|
| LionGuard | An input/output guardrail to detect Not Safe For Work (NSFW) language in the Singapore context | - |
| PromptGuard | An input guardrail to detect prompt injection and jailbreak attempts | - |
| Off-Topic | An input guardrail to detect off-topic responses | - |
| System-Prompt-Leakage | An output guardrail to detect exposure of substantive information of the system prompt | Coming soon |
| Cloak | An input/output guardrail to detect personally identifiable information (PII), developed by GovTech | Direct integration to [cloak.gov.sg](https://cloak.gov.sg) coming soon |

## Benchmarking

!!! warning "Coming Soon"

    We will be releasing a benchmarking report soon.