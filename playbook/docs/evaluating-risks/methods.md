# Evaluation Methods

These methods are used across all five evaluation areas (functional, safety, robustness, fairness, privacy). They are not areas in themselves — they are how you score outputs and keep evaluations running.

## Human Evaluation

Human evaluation is useful when outputs are open-ended, contextual, or hard to score automatically.

### When to Use Human Evaluation

Use human review when:

- The task requires domain judgment.
- Multiple answers may be acceptable.
- The risk of a false pass is high.
- You are validating an LLM-as-judge or automated metric.
- You need qualitative failure analysis before automation.

### Designing Human Review

Define:

- The rubric and scoring scale.
- Reviewer qualifications.
- Examples of pass, partial pass, and fail.
- How disagreements will be resolved.
- How many samples each reviewer sees.
- How results feed into mitigation decisions.

### Validate Agreement

Track agreement between reviewers. When using LLM judges, compare them against human annotations rather than assuming that model-based scores are correct.

See the [Human annotation template](../tools/human-annotation-template.md).

## LLM-as-Judge

LLM-as-judge methods use a language model to evaluate outputs against a rubric, reference answer, or preference criteria.

### Useful For

- Open-ended quality scoring.
- Comparing candidate models or prompts.
- Checking faithfulness, completeness, or relevance.
- Scaling review after a smaller human-labeled set is available.

### Risks

LLM judges can be biased, inconsistent, sensitive to prompt wording, and overconfident. They may also prefer verbose or stylistically familiar answers.

### Minimum Validation

Before relying on an LLM judge:

1. Write a clear rubric.
2. Test the judge on examples with known human labels.
3. Measure agreement with humans.
4. Inspect disagreements.
5. Revalidate when the task, model, rubric, or data distribution changes.

See the [LLM-as-judge template](../tools/llm-as-judge-template.md).

### Pinning Judge Models

*Coming soon — this section will cover how to version-pin judge models so eval results stay comparable over time.*

### Judge Drift and Re-validation

*Coming soon — this section will cover how to detect when an LLM judge's behavior has drifted, and the cadence for re-validating against human annotations.*

## Continuous Evals and Monitoring

AI behavior changes as prompts, models, data, tools, and users change. Continuous evals help teams catch regressions after launch.

### What to Automate

Good candidates for continuous evals include:

- Stable functional tests for core user journeys.
- Safety regression tests.
- PII leakage tests.
- RAG grounding and abstention tests.
- Tool-use correctness tests for agentic systems.
- Guardrail precision and recall checks.

### Monitoring Signals

Track:

- Failure rates by category.
- Guardrail trigger rates.
- Refusal rates and over-refusal patterns.
- Latency, cost, and error rates.
- User feedback and escalation volume.
- Drift in input distribution or retrieved sources.

### Practical Advice

Start with a small, high-signal regression suite. Expand only when failures show where more coverage is needed.

### Regression Baselines and Alert Thresholds

*Coming soon — this section will cover how to set regression baselines and what change triggers a real alert vs. routine variation.*

### Model-version Migration Evals

*Coming soon — this section will cover how to run a comparison eval when migrating between model versions so behavior changes are caught before they reach users.*
