# Hallucination and Grounding Guardrails

Grounding mitigations reduce unsupported answers and help systems abstain when they lack enough evidence.

## Mitigation Patterns

- Require answers to cite retrieved sources.
- Check generated claims against retrieved context.
- Instruct the system to abstain when context is insufficient.
- Constrain retrieval to authorized and current sources.
- Add post-generation checks for unsupported claims.
- Route uncertain answers to human review.

## What to Measure

Use [RAG and grounding evals](../evaluating-risks/rag-grounding.md) to measure faithfulness, citation correctness, and abstention. A grounding guardrail should improve those metrics without causing excessive over-refusal.
