# Evaluating Risks

Evaluation is the process of defining what good behavior means, creating representative tests, measuring system performance, and analyzing failures. For AI applications, this includes both functional quality and Responsible AI risks.

!!! success "Key message"
    Start by testing whether the system works for its intended task. Then test whether it behaves safely, privately, robustly, and fairly in the contexts that matter.

## What to Evaluate

A practical evaluation plan usually covers five areas. Each has its own page in this section:

1. **[Functional](functional.md)** — does the application complete the task well? Includes accuracy, RAG grounding, and performance.
2. **[Safety](safety.md)** — does it avoid harmful, prohibited, or adversarial behavior?
3. **[Robustness](robustness.md)** — does it behave consistently across realistic variation and out-of-scope inputs?
4. **[Fairness](fairness.md)** — does it treat affected groups consistently?
5. **[Privacy](privacy.md)** — does it avoid leaking PII or sensitive data?

For cross-cutting techniques used across all five areas — human evaluation, LLM-as-judge, and continuous evals — see [Evaluation methods](methods.md).

## Designing an Evaluation Plan

An evaluation plan turns broad concerns into tests that can be run, reviewed, and repeated.

### 1. Define the System Boundary

Capture:

- Application purpose and intended users.
- Inputs, outputs, tools, retrieved sources, and human review points.
- Intended use and prohibited use.
- Known high-risk user journeys or failure modes.

### 2. Choose Evaluation Dimensions

At minimum, most launch reviews should include functional and safety testing. Add other dimensions when relevant:

- RAG and grounding evals for knowledge assistants.
- Privacy and PII leakage evals for systems handling user data, logs, documents, or retrieved sources.
- Performance evals for production readiness.
- Fairness evals where protected attributes could influence outcomes.
- Agentic evals where the system plans, uses tools, or takes multi-step actions.

### 3. Build the Evaluation Set

A useful evaluation set should include:

- Happy-path examples.
- Realistic edge cases.
- Known historical failures, if available.
- Out-of-scope and prohibited requests.
- Adversarial or stress cases where relevant.

Prefer examples that reflect the actual users, language, domain, and workflow of the application.

### 4. Define Metrics and Review Process

Use quantitative metrics when behavior is easy to score, and rubric-based or human evaluation when quality is contextual.

For each metric, define:

- What counts as success.
- What threshold is acceptable for launch.
- Which failures require mitigation before launch.
- How the evaluation will be rerun after changes.

### 5. Analyze Failures

Do not stop at headline scores. Group failures by root cause, severity, affected users, and whether they can be mitigated through system design, data changes, guardrails, or human review.

## Eval Ownership and Review Cadence

*Coming soon — this section will cover who runs evals, how often, and how results feed back into the application lifecycle.*
