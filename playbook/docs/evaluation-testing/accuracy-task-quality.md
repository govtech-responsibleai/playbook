# Accuracy and Task-Quality Evals

For AI applications, "accuracy" is often too narrow. The practical question is whether the system performs the intended task well enough for its users and risk context.

## Common Quality Criteria

Depending on the application, evaluate:

- Correctness: is the answer factually or logically correct?
- Completeness: does it include the required information?
- Relevance: does it address the user's actual request?
- Faithfulness: is it supported by the provided context or source?
- Format adherence: does it follow the required schema, tone, or output format?
- Task success: did the user journey complete successfully?
- Tool-use correctness: did the system call the right tool with the right arguments?

## Suggested Process

1. List the top user journeys.
2. Create realistic examples for each journey.
3. Define a scoring rubric for success, partial success, and failure.
4. Run the system on the examples.
5. Review failures manually before deciding what to automate.
6. Convert stable checks into repeatable evals.

## Metrics

Use exact-match or structured metrics when outputs are constrained. Use rubrics, human evaluation, or LLM-as-judge methods when outputs are open-ended.

When using LLM judges, validate them against human annotations. See [LLM-as-judge evaluation](llm-as-judge.md).
