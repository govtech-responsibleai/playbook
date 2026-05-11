# Common AI Application Types

!!! info "About this page"

    This page is new in the upcoming Responsible AI Playbook release. It maps common application types (chatbots, RAG assistants, classifiers, agents) to the relevant parts of the playbook. All content is new.

Different application types need different evals and mitigations. Use this page to map your system to the most relevant parts of the playbook.

| Application type | Typical concerns | Useful starting points |
| --- | --- | --- |
| Chatbot or assistant | Unsafe responses, off-topic behavior, hallucination, PII leakage | [Safety evals](../evaluating-ai-systems/safety.md), [Content safety guardrails](../mitigations-controls/content-safety.md), [Off-topic and scope guardrails](../mitigations-controls/off-topic-scope.md) |
| RAG or knowledge assistant | Faithfulness, citation quality, source leakage, out-of-knowledge-base questions | [RAG and grounding evals](../evaluating-ai-systems/functional.md), [Robustness evals](../evaluating-ai-systems/robustness.md), [Hallucination and grounding guardrails](../mitigations-controls/hallucination-grounding.md) |
| Summarisation | Completeness, distortion, omission, sensitive information exposure | [Accuracy and task-quality evals](../evaluating-ai-systems/functional.md), [Privacy and PII leakage evals](../evaluating-ai-systems/privacy.md) |
| Information extraction | Schema adherence, missing fields, false positives, confidence thresholds | [Accuracy and task-quality evals](../evaluating-ai-systems/functional.md), [Human evaluation](../evaluating-ai-systems/methods.md) |
| Classification or triage | Calibration, false positives, false negatives, fairness | [Fairness evals](../evaluating-ai-systems/fairness.md), [Threshold tuning](../mitigations-controls/threshold-tuning.md) |
| Agentic workflow | Tool misuse, planning failures, privilege misuse, hard-to-monitor actions | [Agentic risk model](../agentic-ai/risk-model.md), [Tool-use and planning evals](../agentic-ai/tool-use-planning-evals.md), [Agentic safety controls](../agentic-ai/safety-controls.md) |

Use-case playbooks are KIV, but these mappings provide a lightweight route for now.
