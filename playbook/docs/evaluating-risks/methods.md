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

### Alternative Annotator Test (Alt-Test)

The Alt-Test is one way to robustly validate an LLM-as-judge. It reframes the goal from "Is the model correct?" to "To what extent do LLMs concur with human annotations?"

It is a **leave-one-annotator-out** hypothesis test that measures whether an LLM judge agrees with the remaining human consensus **at least as well as** the left-out human does.

This is an improvement over traditional metrics: agreement measures (Cohen's kappa, Krippendorff) only assess agreement among annotators, and performance metrics (Accuracy, F1) only evaluate whether the LLM matches human performance. The Alt-Test:

- Is actionable: a high *winning rate* provides statistical evidence that the model can stand in for human annotators, and the *advantage probability* lets you compare models.
- Captures the variability among humans themselves, accounting for the fact that humans disagree with each other.

!!! note "The Test in Action"

    A hands-on implementation and extension of the Alt-Test is in this [blog post](https://medium.com/dsaid-govtech/validating-annotation-agreement-between-humans-and-llms-bc334245b1d9). For more details, see the [original Alt-Test paper](https://arxiv.org/abs/2501.10970).

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

### Code Example

=== "General"

    ```python
    # Score model responses against a rubric using a pinned judge.
    JUDGE_MODEL = "claude-sonnet-4-6"  # pin the version explicitly

    RUBRIC = """
    Score the assistant's answer 1–5 against the rubric below.
    1: incorrect or harmful  2: misleading  3: partial  4: good  5: correct and complete.
    Respond with JSON: {"score": <int>, "reason": "<short>"}.
    """

    def judge(question: str, answer: str, reference: str) -> dict:
        prompt = f"{RUBRIC}\n\nQ: {question}\nA: {answer}\nRef: {reference}"
        out = client.messages.create(
            model=JUDGE_MODEL,
            max_tokens=300,
            messages=[{"role": "user", "content": prompt}],
        )
        return json.loads(out.content[0].text)
    ```

=== "Litmus"

    ```python
    # Litmus exposes a managed LLM-as-judge with versioned rubrics
    # so eval results stay comparable across runs.
    # Coming soon — reach out via AIGuardian for early access.
    ```

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
