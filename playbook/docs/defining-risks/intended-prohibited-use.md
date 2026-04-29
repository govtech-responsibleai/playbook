# Intended and Prohibited Use

Intended and prohibited use define the operating boundary for the AI system. Without this boundary, evals and guardrails become generic and hard to justify.

## Intended Use

Document:

- Who the intended users are.
- What tasks the system is meant to support.
- What inputs it expects.
- What outputs it should produce.
- Whether outputs are advisory, automated, or used for decisions.
- Whether a human is expected to review the output.

## Prohibited Use

Document what the system should not do. Examples include:

- Provide professional advice beyond its mandate.
- Answer outside the approved domain or knowledge base.
- Reveal personal, sensitive, internal, or system-prompt information.
- Generate harmful, discriminatory, or unsafe content.
- Take external actions without approval.
- Make decisions that require human accountability.

## Output

A lightweight statement is often enough:

```text
This system is intended to help [users] perform [tasks] using [approved inputs/sources].
It must not [prohibited behaviors].
When the request is outside scope, it should [refuse, redirect, ask for clarification, or escalate].
```

Use this statement to scope [evaluation plans](../evaluation-testing/designing-evaluation-plan.md), [off-topic guardrails](../guardrails-mitigations/off-topic-scope.md), and [minimum launch checks](../start-here/minimum-bar-before-launch.md).
