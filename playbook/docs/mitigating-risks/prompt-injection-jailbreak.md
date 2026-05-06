# Prompt Injection and Jailbreak Guardrails

Prompt injection and jailbreak attempts try to override system instructions, bypass safety constraints, reveal hidden context, or misuse tools.

## What to Defend

- System prompts and hidden instructions.
- Retrieved context and internal documents.
- Tool credentials, arguments, and outputs.
- Safety policies and refusal behavior.
- User or organization data.

## Mitigation Patterns

- Detect suspicious instructions in input and retrieved content.
- Separate trusted instructions from untrusted content.
- Limit tool permissions and require explicit approval for sensitive actions.
- Avoid placing secrets in prompts or retrievable context.
- Test multi-turn attacks, not only single-turn jailbreaks.

See [safety evals](../evaluating-risks/safety.md) and [agentic safety controls](../agentic-ai/safety-controls.md) for related testing and control guidance.
