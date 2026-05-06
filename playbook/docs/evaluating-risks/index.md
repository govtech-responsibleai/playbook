# Evaluation and Testing

Evaluation is the process of defining what good behavior means, creating representative tests, measuring system performance, and analyzing failures. For AI applications, this includes both functional quality and Responsible AI risks.

!!! success "Key message"
    Start by testing whether the system works for its intended task. Then test whether it behaves safely, privately, robustly, and fairly in the contexts that matter.

## What to Evaluate

A practical evaluation plan usually covers:

1. **Functional quality**: does the application complete the task well?
2. **Grounding and reliability**: does it answer from the right evidence and abstain when it should?
3. **Performance**: is latency, cost, throughput, and error rate acceptable?
4. **Safety**: does it avoid harmful, prohibited, or adversarial behavior?
5. **Privacy**: does it avoid leaking PII or sensitive data?
6. **Robustness and fairness**: does it behave consistently across realistic variation and affected groups?

## Where to Start

- Use [Designing an evaluation plan](designing-evaluation-plan.md) to scope the work.
- Use [Accuracy and task-quality evals](accuracy-task-quality.md) for functional testing.
- Use [Safety evals](safety-evals.md) for the minimum safety testing expected before launch.
- Use [Evaluation report template](evaluation-report-template.md) to record results and failures.

For existing Responsible AI testing material, see the deeper notes on [safety testing](../testing/safety_testing/safety_testing.md), [fairness testing](../testing/fairness_testing/fairness_generative.md), [robustness testing](../testing/robustness_testing/robustness_testing.md), and [agentic testing](../testing/agentic_testing/agentic_testing.md).
