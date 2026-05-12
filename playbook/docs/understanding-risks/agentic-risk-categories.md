# Agentic Risk Categories

!!! info "About this page"

    This page is new in the upcoming Responsible AI Playbook release. It walks through assessment questions for agentic capabilities and the capability → risk → eval → control mapping that follows. All content is new.

Capability assessment identifies what an agentic system can do and which risks follow from those capabilities.

## Assessment Questions

- Can the system call tools?
- Can it access private or sensitive data?
- Can it write, delete, purchase, publish, message, or trigger workflows?
- Can it run code or queries?
- Can it persist memory across sessions?
- Can it delegate tasks to other agents or services?
- Can it operate without step-by-step human approval?

## Output

The output should be a capability table:

| Capability | Enabled? | Risk introduced | Required eval | Required control |
| --- | --- | --- | --- | --- |
| Tool use |  |  |  |  |
| Memory |  |  |  |  |
| External action |  |  |  |  |

Use the result to scope [agentic evals](../evaluating-ai-systems/agentic-evals.md) and [agentic safety controls](../mitigations-controls/agentic-safety-controls.md).
