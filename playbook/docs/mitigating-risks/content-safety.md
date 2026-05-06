# Content Safety Guardrails

Content safety guardrails detect harmful, offensive, or prohibited content in user inputs and model outputs.

## Common Categories

- Hate or harassment.
- Sexual content.
- Violence or threats.
- Self-harm.
- Illegal or harmful instructions.
- Public harm or misconduct.

Use a taxonomy that fits your users and context. For Singapore public sector safety categories, see the [Risk Taxonomy](../testing/safety_testing/taxonomy.md) and [LionGuard](../tools/lionguard.md).

## Integration Choices

- Block high-confidence harmful content.
- Warn or redirect ambiguous content.
- Escalate high-impact cases.
- Log aggregate trends for monitoring.
- Use different thresholds for public-facing and internal systems.
