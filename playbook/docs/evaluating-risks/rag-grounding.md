# RAG and Grounding Evals

RAG systems should be evaluated on both retrieval quality and answer quality. A fluent answer is not enough; it must be supported by the right sources.

## What to Test

- Retrieval relevance: did the retriever fetch useful context?
- Answer correctness: is the final answer right?
- Faithfulness: is the answer supported by the retrieved sources?
- Citation correctness: do cited sources support the claims?
- Abstention: does the system refuse or say it does not know when the answer is outside the knowledge base?
- Source leakage: does the system expose sensitive or irrelevant source content?

## Evaluation Set Design

Include:

- Questions that should be answerable from the knowledge base.
- Questions that require combining multiple sources.
- Ambiguous questions.
- Out-of-knowledge-base questions.
- Questions involving stale, sensitive, or conflicting sources.

For out-of-knowledge-base behavior, see [Robustness evals](robustness.md) and the `KnowOrNot` work referenced in the existing [robustness testing page](../testing/robustness_testing/robustness_testing.md).

## Common Failure Modes

- Correct retrieval but unsupported generation.
- Incorrect retrieval followed by confident answer.
- Correct answer with wrong citation.
- Over-refusal when context is sufficient.
- Failure to abstain when context is missing.
