# PII Guardrails

PII guardrails detect, redact, block, warn, log, or escalate content that may contain personal data. The goal is to avoid passing PII to LLMs unnecessarily, especially when the LLM is accessed via an external managed service.

## Where PII Can Appear

- User prompts.
- Model outputs.
- Retrieved documents.
- Tool arguments and tool results.
- Logs, traces, analytics, and feedback forms.

## Detection Tools

- **[Cloak](https://cloak.gov.sg)** — GovTech's dedicated internal service for comprehensive and localised PII detection (names, addresses, etc.). Direct integration with the Sentinel API is coming soon.
- **[Presidio](https://github.com/microsoft/presidio)** — open-source tool that identifies PII entities like names, phone numbers, addresses.
- **Custom regex patterns** — for basic PII detection of structured formats.

## Possible Actions

| Action | Use when |
| --- | --- |
| Redact or mask | The task can continue without the raw identifier |
| Block | The request should not proceed with personal data |
| Warn | The user should confirm or remove sensitive details |
| Log carefully | The team needs operational visibility without retaining unnecessary PII |
| Escalate | The request is high-impact or ambiguous |

## Testing

Evaluate PII guardrails using [privacy and PII leakage evals](../evaluating-risks/privacy.md). Include standard formats, free text, multilingual examples, copied documents, and adversarial requests to reveal personal data.
