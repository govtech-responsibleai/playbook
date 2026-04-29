# PII Guardrails

PII guardrails detect, redact, block, warn, log, or escalate content that may contain personal data.

## Where PII Can Appear

- User prompts.
- Model outputs.
- Retrieved documents.
- Tool arguments and tool results.
- Logs, traces, analytics, and feedback forms.

## Possible Actions

| Action | Use when |
| --- | --- |
| Redact or mask | The task can continue without the raw identifier |
| Block | The request should not proceed with personal data |
| Warn | The user should confirm or remove sensitive details |
| Log carefully | The team needs operational visibility without retaining unnecessary PII |
| Escalate | The request is high-impact or ambiguous |

## Testing

Evaluate PII guardrails using [privacy and PII leakage evals](../evaluation-testing/privacy-pii.md). Include standard formats, free text, multilingual examples, copied documents, and adversarial requests to reveal personal data.
