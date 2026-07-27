---
sidebar_label: "Overview"
sidebar_position: 1
---

# Improving AI systems

Evaluation tells you where an AI system fails. The next step is to choose an improvement that addresses the cause of the failure without creating unacceptable trade-offs elsewhere.

## Choose an improvement route

Start with the evaluated failure and identify its likely cause. Choose the least complex of the three improvement routes that can address the failure reliably. After making the change, evaluate the complete AI system again to confirm that the route was suitable and identify any new trade-offs.

| Improvement route                                       | Use when                                                                                      | Examples                                                                                                                      |
| ------------------------------------------------------- | --------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| **Model and system design changes**                     | The failure can be addressed without training the model or adding a separate runtime detector | Change the model or API, adjust model settings, clarify instructions, constrain retrieved sources or improve the user journey |
| [**Guardrails**](new-guardrails/what-are-guardrails.md) | The system must detect and respond to identifiable conditions at runtime                      | Detect personal data, block prompt injection or route high-risk outputs for review                                            |
| [**Finetuning**](finetuning.md)                         | A persistent behaviour or task-performance gap remains after simpler changes                  | Improve domain terminology, output format or task-specific behaviour                                                          |

These routes apply across the Responsible AI principles. Use the [principle-specific guidance](/improving-ai-systems/principle-specific-improvements) to determine what to improve for safety, robustness, fairness, privacy and agentic risks.

:::tip[Key message]

Choose improvements based on evaluated failure modes. Do not apply them blindly just because they are available: every improvement introduces trade-offs.

:::

These routes are not mutually exclusive. A single failure may require several improvements at different points in the system.

For example, an internal question-answering system that exposes personal data could:

- restrict which documents each user can retrieve;
- apply a PII guardrail to generated responses;
- require human review for high-impact disclosures; and
- add leakage cases to its evaluation and monitoring datasets.
