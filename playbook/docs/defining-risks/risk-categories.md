# Risk Categories

Risk categories help teams decide what to evaluate and mitigate. Start broad, then narrow to the categories that matter for the application.

## Core Categories

| Category | What can go wrong | Where to go next |
| --- | --- | --- |
| Functional quality | The system gives incorrect, incomplete, irrelevant, or badly formatted outputs | [Accuracy and task-quality evals](../evaluation-testing/accuracy-task-quality.md) |
| Grounding | The system fabricates, cites the wrong source, or fails to abstain when context is missing | [RAG and grounding evals](../evaluation-testing/rag-grounding.md) |
| Safety | The system produces harmful content or complies with unsafe requests | [Safety evals](../evaluation-testing/safety-evals.md) |
| Privacy and PII | The system exposes personal, sensitive, source, tool, or log data | [Privacy and PII leakage evals](../evaluation-testing/privacy-pii.md) |
| Robustness | The system fails on realistic variation, ambiguity, or out-of-scope inputs | [Robustness evals](../evaluation-testing/robustness.md) |
| Fairness | The system behaves differently or unfairly across groups or attributes | [Fairness evals](../evaluation-testing/fairness.md) |
| Performance | The system is too slow, costly, unreliable, or error-prone for production | [Performance evals](../evaluation-testing/performance.md) |
| Agentic behavior | The system misuses tools, plans poorly, exceeds permissions, or acts without approval | [Agentic AI](../agentic-ai/what-makes-agentic.md) |

## Choosing Categories

For each category, decide:

- Is this risk plausible for the application?
- Who would be harmed if it occurs?
- Can it be detected through evals?
- Can it be reduced through mitigations?
- What residual risk remains after mitigation?

Use the result to create an evaluation scope and risk register.
