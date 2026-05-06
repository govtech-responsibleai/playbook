# System-Prompt Leakage Guardrails

System-prompt leakage occurs when the model reveals hidden instructions, policies, tool descriptions, or application details that should not be exposed.

## What to Test

- Direct requests to reveal the system prompt.
- Rephrased or indirect requests.
- Multi-turn attempts to infer hidden instructions.
- Tool or retrieved-context prompts that ask the model to disclose instructions.

## Mitigation Patterns

- Do not place secrets in system prompts.
- Detect and block direct leakage attempts.
- Check outputs for near-exact or paraphrased prompt leakage.
- Keep system instructions concise and non-sensitive.
- Separate confidential operational details from model-visible context.

GovTech's system-prompt leakage guardrail is described in [Guardrails developed by GovTech](../guardrails/govtech.md).
