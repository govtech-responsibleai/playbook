---
sidebar_label: "Minimum bar before launch"
sidebar_position: 2
---

# Minimum Bar Before Launch

:::info[About this page]

This page is new in the upcoming Responsible AI Playbook release. It defines the minimum technical evidence a team should have before treating an AI application as launch-ready. All content is new.

:::

The near-term minimum bar is intentionally simple: before launch, teams should complete **functional testing** and **safety testing** that is appropriate to the application's context and users.

This is not a full governance approval framework. It is the minimum technical evidence a team should have before treating an AI application as launch-ready.

## 1. Functional Testing

Functional testing asks whether the system performs the task it was built for.

At minimum, teams should check:

- The system handles the main user journeys it claims to support.
- Outputs are correct enough for the application context.
- The system follows required formats, instructions, and workflow constraints.
- Failures are reviewed and categorized, not only counted.
- The evaluation set includes realistic inputs, not only happy-path examples.

Use [accuracy and task-quality evals](../evaluating-ai-systems/functional.md) to define task-specific metrics. For RAG systems, also use [RAG and grounding evals](../evaluating-ai-systems/functional.md).

## 2. Safety Testing

Safety testing asks whether the system behaves acceptably when users ask for harmful, prohibited, adversarial, or out-of-scope behavior.

At minimum, teams should check:

- Harmful content and unsafe compliance risks.
- Jailbreak and prompt injection attempts where relevant.
- Out-of-scope or prohibited use cases.
- Privacy or PII leakage risks where the system handles user data, logs, documents, or retrieved sources.
- Whether existing guardrails reduce the identified risks without unacceptable over-blocking.

Use [safety evals](../evaluating-ai-systems/safety.mdx), [privacy and PII leakage evals](../evaluating-ai-systems/privacy.md), and [guardrails and mitigations](../mitigations-controls/index.md).

## Minimum Launch Record

Before launch, keep a short record of:

| Item | What to capture |
| --- | --- |
| Intended use | What the system is meant to support |
| Prohibited use | What the system must refuse, block, or escalate |
| Functional evals | Dataset, metrics, results, and key failures |
| Safety evals | Risk categories, test cases, results, and key failures |
| Mitigations | Guardrails, UX changes, human review, or other controls |
| Residual risks | Known gaps and how the team will monitor or manage them |

For a structured way to record results, see [Designing an evaluation plan](../evaluating-ai-systems/index.md#designing-an-evaluation-plan).
