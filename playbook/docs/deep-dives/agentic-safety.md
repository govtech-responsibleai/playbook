# Agentic Safety

!!! info "About this page"

    This page is new in the upcoming Responsible AI Playbook release. It is a short Agentic Safety primer that points readers at the canonical agentic guidance across the playbook. All content is new.

Agentic safety focuses on risks introduced by planning, tool use, memory, autonomy, delegation, and external actions.

## Why Agentic Safety Differs from Text-only Safety

<mark class="new-since-v1">*Coming soon — this section will cover what changes when an LLM gains the ability to take actions: the failure surface expands from "what the model says" to "what the model does, with what permissions, against what systems." It will explain why traditional content-safety guardrails are necessary but not sufficient, and why testing, controls, and monitoring all need agent-aware variants.*</mark>

## Where to Start

- [What makes a system agentic?](../understanding-risks/index.md#what-makes-a-system-agentic) — definition and signals.
- [Agentic risk model](../understanding-risks/agentic-risk-model.md) — risk sources, capability-to-control mapping, and the GovTech [Agentic Risk and Capability Framework](http://go.gov.sg/agentic-risk-capability).
- [Agentic risk categories](../understanding-risks/agentic-risk-categories.md) — questions to map your system's capabilities to risks and controls.
- [Agentic evals](../evaluating-ai-systems/agentic-evals.md) — task scenarios, tool-call attack surface, memory & state, multi-agent.
- [Agentic safety controls](../mitigations-controls/agentic-safety-controls.md) — least privilege, sandboxing, approval gates, kill switches.
- [Monitoring and incident response](../mitigations-controls/monitoring-incident-response.md) — anomaly thresholds, trace replay.
