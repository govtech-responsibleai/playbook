# Agentic Evals

Agentic evals check whether a system can complete tasks safely and reliably across multiple steps.

## What to Evaluate

- Task success.
- Planning reliability.
- Instruction-following.
- Tool-use correctness.
- Recovery from failed steps.
- Resistance to prompt injection.
- Data leakage and privilege misuse.
- Human override and escalation behavior.

## Evaluation Design

Use realistic task scenarios, not only isolated prompts. Each scenario should define the goal, allowed tools, forbidden actions, expected checkpoints, and success criteria.

Include failure cases: unavailable tools, ambiguous user requests, malicious retrieved content, conflicting instructions, and attempts to exceed permissions.

For current background material, see the existing [Agentic Testing](../testing/agentic_testing/agentic_testing.md) page.
