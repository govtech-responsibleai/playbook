---
sidebar_label: "Production integration"
sidebar_position: 3
last_reviewed: 2026-07-27
---

# Production integration

Production integration turns a selected guardrail into a reliable part of the AI system. Before launch, verify both the guardrail's detection performance and its effect on the complete user journey.

## Define the production behaviour

For each guardrail, document:

- where it runs in the [guardrail architecture](./guardrail-architecture.md);
- which input, output, retrieval result, or tool action it inspects;
- which result leads to allow, warn, redact, retry, block, or escalate;
- what happens when the guardrail is unavailable or times out; and
- who owns its performance and operational response.

Keep detection separate from response. A personal-data detector may support redaction in one journey and blocking in another. A low-confidence off-topic result may prompt clarification instead of ending the interaction.

## Measure the effect

Evaluate the guardrail on held-out examples that represent expected traffic and known failure modes. Measure:

- precision and recall;
- false-positive and false-negative rates;
- over-refusal or unnecessary blocking;
- latency and cost;
- completion rates after warnings, redactions, or redirects; and
- reduction in downstream failures.

Review both misses and over-blocks. Misses show where risk remains. Over-blocks show where the control reduces usefulness or erodes user trust.

Test the full AI system with and without the guardrail where possible. A detector that performs well in isolation can still produce poor results when combined with prompts, retrieval, tools, or other guardrails. Use the broader [evaluation methods](../../evaluating-ai-systems/methods.mdx) to design representative tests.

## Tune thresholds and responses

Many guardrails return confidence or severity scores rather than binary decisions. Choose thresholds by comparing the cost of false positives with the harm of false negatives.

Factors include:

- whether the service is public-facing or internal;
- whether the domain or action is high-impact;
- whether a human review route is available;
- whether the response is reversible; and
- how an interruption affects the user journey.

Use action bands when the score supports more than one response.

| Result | Possible response |
| --- | --- |
| Low risk or confidence | Allow and record aggregate metrics |
| Uncertain or moderate | Clarify, warn, redact, retry, or route for review |
| High risk or confidence | Block, restrict the action, or escalate |

Do not copy one threshold across every user journey. Validate each threshold against labelled examples and inspect cases close to the decision boundary. Record the chosen value, the evaluation results, and the risk rationale.

## Integrate for reliability

Minimise unnecessary latency while preserving the order of controls that must run before an action:

- run independent checks in parallel;
- use lightweight models or deterministic rules where they meet the requirement;
- cache results only when the content and policy context are equivalent;
- set explicit timeouts and retry limits; and
- load-test the complete guarded flow.

Layer controls when they address different weaknesses. For example, combine access controls at retrieval time with personal-data detection on the output. Avoid adding layers that make the same decision without improving coverage.

Log enough information to measure and investigate the guardrail without retaining unnecessary sensitive data. Use structured event types and policy versions instead of storing raw prompts by default.

## Complete the launch review

Before launch:

- add known misses and over-blocks to the regression set;
- test multi-turn, retrieval, and tool-use paths;
- verify degraded and unavailable-guardrail behaviour;
- confirm that alerts have named owners;
- exercise human-review and escalation routes;
- prepare a way to disable or roll back a faulty control; and
- define the production metrics and baselines to monitor.

Launch readiness is not evidence that the guardrail will remain effective. Input patterns, models, prompts, tools, providers, and user behaviour change. Continue to [Monitoring and incident response](./monitoring-incident-response.md) for the post-launch workflow.
