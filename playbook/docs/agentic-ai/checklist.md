# Agentic System Checklist

!!! info "About this page"

    This page is new in the upcoming Responsible AI Playbook release. It is a Define / Evaluate / Mitigate readiness checklist for agentic systems with each item cross-linked to the page that explains how to do it. All content is new.

Use this checklist before piloting or launching an agentic system. Each item links to the page that explains how to do it.

## Define

- [ ] Intended use and prohibited use are documented. → [Intended and prohibited use](../understanding-risks/intended-prohibited-use.md)
- [ ] Agentic capabilities are listed. → [What makes a system agentic?](what-makes-agentic.md), [Capability assessment](capability-assessment.md)
- [ ] Tools, data access, memory, and external actions are mapped. → [Capability assessment](capability-assessment.md), [Agentic risk model](risk-model.md)
- [ ] Human approval points are defined. → [Agentic safety controls](safety-controls.md#approval-gate-ux)

## Evaluate

- [ ] Task success scenarios are tested. → [Agentic evals](evals.md#end-to-end-task-scenarios)
- [ ] Tool-use correctness is tested. → [Tool-use and planning evals](tool-use-planning-evals.md#tool-use-checks)
- [ ] Planning reliability is tested. → [Tool-use and planning evals](tool-use-planning-evals.md#planning-checks)
- [ ] Prompt injection and malicious context scenarios are tested. → [Agentic evals](evals.md#tool-call-attack-surface), [Prompt injection guardrails](../mitigations-controls/prompt-injection-jailbreak.md)
- [ ] Data leakage and privilege misuse scenarios are tested. → [Tool-use and planning evals](tool-use-planning-evals.md#permission-boundary-scenarios), [Privacy evals](../evaluating-ai-systems/privacy.md#application-layer)

## Mitigate

- [ ] Tools follow least privilege. → [Agentic safety controls](safety-controls.md#core-controls)
- [ ] Sensitive actions require approval. → [Agentic safety controls](safety-controls.md#mid-loop-human-review-hitl-architectures)
- [ ] Tool arguments are validated. → [Agentic safety controls](safety-controls.md#sandboxing-patterns), [Tool-use and planning evals](tool-use-planning-evals.md#tool-argument-injection-tests)
- [ ] Logs and traces are available for review. → [Monitoring and incident response](monitoring-incident-response.md#trace-replay-for-incident-response)
- [ ] A safe stop or rollback path exists. → [Monitoring and incident response](monitoring-incident-response.md#kill-switch-design)
