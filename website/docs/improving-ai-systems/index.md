---
sidebar_label: "Overview"
sidebar_position: 1
---
# Improving AI systems

Evaluation tells you where an AI system fails. The next step is to choose an improvement that addresses the cause of the failure without creating unacceptable trade-offs elsewhere.

## Choose an improvement route

Start with the evaluated failure and identify its likely cause. Choose the least complex of the improvement routes that can address the failure reliably. After making the change, evaluate the complete AI system again to confirm that the route was suitable and identify any new trade-offs.


| Route                                                | Use when                                                                                      |
| ---------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| **Model and system design**                          | The failure can be addressed without training the model or adding a separate runtime detector |
| [**Guardrails**](guardrails/what-are-guardrails.mdx) | The system must detect and respond to identifiable conditions at runtime                      |
| [**Finetuning**](finetuning.md)                      | A persistent behaviour or task-performance gap remains after simpler changes                  |


:::tip[Key message]

Choose improvements based on evaluated failure modes. Do not apply them blindly just because they are available: every improvement introduces trade-offs.

:::

## Specific tactics within each route


| Route                                                | Tactic                 | Use when                                                                                 | Examples                                                             |
| ---------------------------------------------------- | ---------------------- | ---------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| **Model and system design**                          | UX and policy design   | Users need clearer expectations, warnings, consent, or escalation paths                  | Improve the user journey, add warnings or consent flows              |
|                                                      | Retrieval constraints  | Retrieved context may be irrelevant, stale, sensitive, or unauthorised                   | Constrain retrieved sources, filter document access                  |
| [**Guardrails**](guardrails/what-are-guardrails.mdx) | Input guardrails       | Risky requests should be blocked, warned, rewritten, or escalated before model execution | Detect personal data, block prompt injection                         |
|                                                      | Output guardrails      | Generated responses may contain unsafe, private, irrelevant, or unsupported content      | Route high-risk outputs for review                                   |
|                                                      | Tool-use controls      | A system can take actions or access systems beyond text generation                       | Restrict API calls or system access                                  |
| [**Finetuning**](finetuning.md)                      | —                      | A persistent behaviour or task-performance gap remains after simpler changes             | Improve domain terminology, output format or task-specific behaviour |
| **Ongoing practice**                                 | Human review           | Errors are high-impact or hard to classify automatically                                 | Escalate uncertain cases for review                                  |
|                                                      | Monitoring and logging | Risks must be detected after launch and fed back into evals                              | Add cases to evaluation datasets, track incidents                    |


## Improve across the five principles

These improvement routes apply across all Responsible AI principles. Choose principle-specific mitigations based on your evaluation findings:

1. **[Safety improvements](safety-improvements.mdx)** — avoid harmful, prohibited, or adversarial behaviour
2. **[Robustness improvements](robustness-improvements.md)** — stay consistent, grounded, and usable with real input
3. **[Fairness improvements](fairness-improvements.md)** — treat affected groups consistently
4. **[Privacy improvements](privacy-improvements.mdx)** — avoid leaking PII or sensitive data
5. **[Agentic improvements](agentic-improvements.md)** — improve planning, tool use, and multi-step actions

These routes are not mutually exclusive. A single failure may require several improvements at different points in the system.

For example, an internal question-answering application that exposes personal data could:

- restrict which documents each user can retrieve;
- apply a PII guardrail to generated responses;
- require human review for high-impact disclosures; and
- add leakage cases to its evaluation and monitoring datasets.

