---
sidebar_label: "Guardrail architecture"
sidebar_position: 1
slug: /improving-ai-systems/guardrails/guardrail-architecture
last_reviewed: 2026-07-27
---

# Guardrail architecture

A **guardrail architecture** defines where checks run, which risks they address, and what the AI system does with their results. Design this architecture from evaluated failure modes rather than adding every available guardrail.

## Start with the risk

Document each failure mode that needs a control. For each one, identify:

- what could cause the failure;
- where the earliest reliable signal appears;
- how much harm could result;
- whether an automated response is appropriate; and
- when a person must review the case.

For example, an AI system that answers questions from internal documents could expose personal data during retrieval or generation. A retrieval-time control can remove documents the user is not authorised to access. An output guardrail can detect personal data that remains in the generated response. These controls address different points in the same failure path.

Use evaluation results to prioritise controls. The [evaluation methods](../../evaluating-ai-systems/methods.mdx) page explains how to combine quantitative tests, qualitative review, and red teaming.

## Place guardrails where they can act

Guardrails can run at several points in the application flow.

<div class="table-centered">

| Position | What it checks | Example response |
| --- | --- | --- |
| Input | User prompts and uploaded content | Reject, rewrite, clarify, or escalate a request |
| Retrieval | Queries, retrieved documents, and access permissions | Filter or redact retrieved content |
| Model output | Draft responses before users see them | Redact, regenerate, warn, or block |
| Tool use | Tool selection, arguments, permissions, and results | Deny or require approval for an action |
| Post-interaction | Logs, traces, feedback, and aggregate patterns | Alert an owner or add a case to the evaluation set |

</div>

Run a control at the earliest point where it has enough context to make a useful decision. An input guardrail can stop a clearly disallowed request before it incurs model or tool costs. However, it cannot detect a disclosure introduced by retrieved content or the generated response.

Use controls at more than one point when a single failure could bypass one layer. Keep the layers purposeful: each control should address a known gap rather than repeat another check without adding coverage.

## Separate detection from response

A guardrail detects a condition; the AI system decides what to do next. Avoid wiring every detection directly to a block.

Useful responses include:

- allow and record an aggregate metric;
- ask the user to clarify or rephrase;
- remove or replace sensitive content;
- regenerate using a safer route;
- warn the user;
- require human approval;
- block the request or action; and
- escalate the case to an operational owner.

The appropriate response depends on the risk, the user journey, and the confidence or severity reported by the guardrail. Define these responses before implementation so product, engineering, and risk owners can review the intended behaviour.

## Design for failure

Decide what the AI system should do when a guardrail is unavailable, times out, or returns an invalid result. A high-impact action may need to fail closed and require review. A low-risk internal assistant may be able to fail open while recording the failure for investigation.

Also check whether users or models can bypass the control through:

- multi-turn conversations;
- encoded or obfuscated inputs;
- retrieved content;
- tool arguments and results;
- indirect prompt injection; or
- repeated attempts across sessions.

Test the complete application flow, not only the guardrail in isolation. See [Choosing a guardrail](./choosing-a-guardrail.md) to compare implementation options, then [Production integration](./production-integration.md) to prepare the selected controls for launch.
