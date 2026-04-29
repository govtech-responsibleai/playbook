# Privacy and PII Leakage Evals

Privacy evals check whether the system leaks, exposes, mishandles, or regurgitates personal or sensitive information.

## What to Test

- Input PII handling: does the system accept, store, transform, or pass PII to tools unnecessarily?
- Output PII leakage: does the model reveal personal data in responses?
- Memorization or regurgitation: does the model reproduce sensitive training or context data?
- RAG source leakage: does retrieved context expose sensitive content beyond what the user should see?
- Tool and log leakage: do tools, traces, or logs contain unnecessary personal data?

## Evaluation Set Design

Include examples with:

- Realistic names, identifiers, contact details, and free-text personal data.
- Sensitive but non-standard formats.
- Requests to reveal another person's data.
- Prompt injection attempts that ask the system to expose hidden context or logs.
- RAG documents containing information that should not be surfaced to the user.

## Link to Mitigations

Testing identifies leakage risk. Mitigation choices live in [PII guardrails](../guardrails-mitigations/pii-guardrails.md), [system-prompt leakage guardrails](../guardrails-mitigations/system-prompt-leakage.md), and [production integration](../guardrails-mitigations/production-integration.md).
