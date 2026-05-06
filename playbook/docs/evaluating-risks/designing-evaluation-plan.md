# Designing an Evaluation Plan

An evaluation plan turns broad concerns into tests that can be run, reviewed, and repeated.

## 1. Define the System Boundary

Capture:

- Application purpose and intended users.
- Inputs, outputs, tools, retrieved sources, and human review points.
- Intended use and prohibited use.
- Known high-risk user journeys or failure modes.

## 2. Choose Evaluation Dimensions

At minimum, most launch reviews should include:

- Functional or task-quality testing.
- Safety testing.

Add other dimensions when relevant:

- RAG and grounding evals for knowledge assistants.
- Privacy and PII leakage evals for systems handling user data, logs, documents, or retrieved sources.
- Performance evals for production readiness.
- Fairness evals where protected attributes could influence outcomes.
- Agentic evals where the system plans, uses tools, or takes multi-step actions.

## 3. Build the Evaluation Set

A useful evaluation set should include:

- Happy-path examples.
- Realistic edge cases.
- Known historical failures, if available.
- Out-of-scope and prohibited requests.
- Adversarial or stress cases where relevant.

Prefer examples that reflect the actual users, language, domain, and workflow of the application.

## 4. Define Metrics and Review Process

Use quantitative metrics when behavior is easy to score, and rubric-based or human evaluation when quality is contextual.

For each metric, define:

- What counts as success.
- What threshold is acceptable for launch.
- Which failures require mitigation before launch.
- How the evaluation will be rerun after changes.

## 5. Analyze Failures

Do not stop at headline scores. Group failures by root cause, severity, affected users, and whether they can be mitigated through system design, data changes, guardrails, or human review.
