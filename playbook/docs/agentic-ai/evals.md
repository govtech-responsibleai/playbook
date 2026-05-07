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

For risk framing, see the [Agentic risk model](risk-model.md), which references the GovTech [Agentic Risk and Capability Framework](http://go.gov.sg/agentic-risk-capability).

## End-to-end Task Scenarios

*Coming soon — this section will cover how to design realistic multi-step task scenarios that test goal completion, checkpoint adherence, and failure recovery.*

## Tool-call Attack Surface

*Coming soon — this section will cover how to test tool-argument injection (shell, SQL, SSRF via tool args), permission-boundary violations, and credential exposure through tools.*

## Memory and State Evals

*Coming soon — this section will cover how to test agent memory and state for leakage, contamination across sessions, and context-window manipulation.*

## Multi-agent and Delegated-task Evals

*Coming soon — this section will cover how to evaluate multi-agent systems and delegated subtasks, where one agent invokes another or instructions cross trust boundaries.*
