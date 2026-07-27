---
sidebar_label: "Monitoring and incident response"
sidebar_position: 4
last_reviewed: 2026-07-27
---

# Monitoring and incident response

Production monitoring tests whether guardrails continue to reduce risk under real operating conditions. Incident response contains failures when they occur and turns them into evidence for improving the AI system.

## Establish production baselines

Define expected ranges during [production integration](./production-integration.md), then monitor changes after launch. Useful signals include:

- guardrail trigger rates by category and user journey;
- warnings, redactions, retries, blocks, and escalations;
- user abandonment after a guardrail response;
- human overrides and review outcomes;
- sampled false positives and false negatives;
- latency, timeouts, errors, and provider availability;
- tool-call denials and repeated action attempts;
- user reports and support escalations; and
- changes in input, score, or trace-length distributions.

Aggregate metrics can reveal changes without retaining raw sensitive content. Where case-level records are required for investigation, define access, retention, and redaction controls.

## Detect emerging risk

Set alerts for changes that require action, not every routine fluctuation. Compare signals against an appropriate baseline and account for traffic volume, releases, campaigns, and seasonal patterns.

Investigate:

- sudden changes in trigger or override rates;
- repeated attempts to bypass a control;
- a rise in similar user reports;
- new language or content patterns;
- disagreement between guardrails and human reviewers;
- performance changes after a model, prompt, provider, or policy update; and
- rare but high-impact actions, even when their aggregate rate is stable.

Threshold alerts are only one source of evidence. Combine them with sampled reviews, user reports, red-team findings, and scheduled re-evaluation.

## Prepare the response

Assign an owner and escalation route before an incident occurs. The response plan should allow the team to:

- restrict or disable an affected guardrail, tool, or user journey;
- route cases to human review;
- switch to a safer fallback;
- preserve relevant traces and configuration versions;
- identify affected users or transactions where appropriate;
- notify operational, product, security, and risk owners; and
- communicate service impact.

Use controls with the smallest effective scope. A per-tool or per-journey disable control can contain an incident without stopping the entire service. High-impact systems may also require a global stop control that the model or agent cannot access.

:::warning[Protect incident records]

Prompts, retrieved content, model outputs, and tool results may contain personal or sensitive information. Preserve only what the investigation requires and apply the agency's access and retention requirements.

:::

## Investigate the incident

Capture enough context to reconstruct what happened:

- model, prompt, guardrail, tool, and policy versions;
- relevant inputs and retrieved content;
- guardrail scores and actions;
- model outputs, tool calls, and tool results;
- user, reviewer, and system actions; and
- timestamps and request identifiers.

Replay the trace in a controlled environment when possible. Determine whether the failure came from detection, threshold choice, response logic, integration, permissions, unavailable dependencies, or a risk not represented in the evaluation set.

Agentic systems need particular attention because a failure can involve a sequence of actions rather than one response. Review the permissions, state changes, intermediate tool results, and approval decisions across the complete trace. See [Agentic improvements](../agentic-improvements.mdx) for controls on tool use and human approval.

## Feed evidence back into the system

After containment:

1. Add the incident and safe variations to the evaluation and regression sets.
2. Correct the relevant guardrail, threshold, response, prompt, retrieval rule, permission, or tool.
3. Test the change against both the incident and ordinary user journeys.
4. Record the cause, impact, response, and follow-up owner.
5. Recheck production baselines after deployment.

Do not treat every incident as a reason to tighten a threshold. A stricter threshold may suppress one failure while increasing false positives elsewhere. Revisit the [guardrail architecture](./guardrail-architecture.md) when the incident shows that the control was placed at the wrong point or lacked the context needed to respond safely.
