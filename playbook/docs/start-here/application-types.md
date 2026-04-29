# Common AI Application Types

Different application types need different evals and mitigations. Use this page to map your system to the most relevant parts of the playbook.

| Application type | Typical concerns | Useful starting points |
| --- | --- | --- |
| Chatbot or assistant | Unsafe responses, off-topic behavior, hallucination, PII leakage | [Safety evals](../evaluation-testing/safety-evals.md), [Content safety guardrails](../guardrails-mitigations/content-safety.md), [Off-topic and scope guardrails](../guardrails-mitigations/off-topic-scope.md) |
| RAG or knowledge assistant | Faithfulness, citation quality, source leakage, out-of-knowledge-base questions | [RAG and grounding evals](../evaluation-testing/rag-grounding.md), [Robustness evals](../evaluation-testing/robustness.md), [Hallucination and grounding guardrails](../guardrails-mitigations/hallucination-grounding.md) |
| Summarisation | Completeness, distortion, omission, sensitive information exposure | [Accuracy and task-quality evals](../evaluation-testing/accuracy-task-quality.md), [Privacy and PII leakage evals](../evaluation-testing/privacy-pii.md) |
| Information extraction | Schema adherence, missing fields, false positives, confidence thresholds | [Accuracy and task-quality evals](../evaluation-testing/accuracy-task-quality.md), [Human evaluation](../evaluation-testing/human-evaluation.md) |
| Classification or triage | Calibration, false positives, false negatives, fairness | [Fairness evals](../evaluation-testing/fairness.md), [Threshold tuning](../guardrails-mitigations/threshold-tuning.md) |
| Agentic workflow | Tool misuse, planning failures, privilege misuse, hard-to-monitor actions | [Agentic risk model](../agentic-ai/risk-model.md), [Tool-use and planning evals](../agentic-ai/tool-use-planning-evals.md), [Agentic safety controls](../agentic-ai/safety-controls.md) |

Use-case playbooks are KIV, but these mappings provide a lightweight route for now.
