---
sidebar_label: "Functional evals"
sidebar_position: 2
---

# Functional Evals

:::info[About this page]

This page is new in the upcoming Responsible AI Playbook release. It combines task-quality, RAG/grounding, and performance evaluation under a single Functional area page. All content is new.

:::

For AI systems, "accuracy" is often too narrow. Functional evaluation asks whether the system performs the intended task well enough for its users and risk context. It covers task quality, retrieval-augmented generation (RAG), and operational performance.

## Task Quality

### Common Quality Criteria

Depending on the application, evaluate:

- Correctness: is the answer factually or logically correct?
- Completeness: does it include the required information?
- Relevance: does it address the user's actual request?
- Faithfulness: is it supported by the provided context or source?
- Format adherence: does it follow the required schema, tone, or output format?
- Task success: did the user journey complete successfully?
- Tool-use correctness: did the system call the right tool with the right arguments?

### Suggested Process

1. List the top user journeys.
2. Create realistic examples for each journey.
3. Define a scoring rubric for success, partial success, and failure.
4. Run the system on the examples.
5. Review failures manually before deciding what to automate.
6. Convert stable checks into repeatable evals.

### Metrics

Use exact-match or structured metrics when outputs are constrained. Use rubrics, human evaluation, or LLM-as-judge methods when outputs are open-ended. See [Evaluation methods](methods.mdx).

## RAG and Grounding

RAG systems should be evaluated on both retrieval quality and answer quality. A fluent answer is not enough; it must be supported by the right sources.

### What to Test

- Retrieval relevance: did the retriever fetch useful context?
- Answer correctness: is the final answer right?
- Faithfulness: is the answer supported by the retrieved sources?
- Citation correctness: do cited sources support the claims?
- Abstention: does the system refuse or say it does not know when the answer is outside the knowledge base?
- Source leakage: does the system expose sensitive or irrelevant source content?

### Evaluation Set Design

Include:

- Questions that should be answerable from the knowledge base.
- Questions that require combining multiple sources.
- Ambiguous questions.
- Out-of-knowledge-base questions.
- Questions involving stale, sensitive, or conflicting sources.

For out-of-knowledge-base behaviour, see [Robustness evals](robustness.md).

### Common Failure Modes

- Correct retrieval but unsupported generation.
- Incorrect retrieval followed by confident answer.
- Correct answer with wrong citation.
- Over-refusal when context is sufficient.
- Failure to abstain when context is missing.

## Performance

Performance evals check whether an AI system is operationally viable, not only whether it is correct.

### What to Measure

- Latency at p50, p90, and p95.
- Cost per request or completed task.
- Throughput under expected load.
- Error rates and timeout rates.
- Retry behaviour and fallback behaviour.
- Provider or model differences.

### Why This Matters

A technically safe model can still be unsuitable if it is too slow, too costly, or too unreliable for production. Performance results also affect mitigation choices: a high-latency guardrail may be acceptable for back-office review but not for a public chatbot.

### Suggested Practice

Run performance evals on realistic prompts, realistic context sizes, and realistic traffic patterns. Record both end-to-end application latency and component-level latency for retrieval, model calls, guardrails, and tools.
