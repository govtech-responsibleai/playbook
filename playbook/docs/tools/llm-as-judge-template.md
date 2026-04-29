# LLM-as-Judge Template

Use this prompt structure as a starting point for judge-based evaluation.

```text
You are evaluating an AI system output for the following task:
[TASK DESCRIPTION]

User input:
[INPUT]

Reference context or expected answer:
[REFERENCE]

System output:
[OUTPUT]

Rubric:
- Correctness: ...
- Completeness: ...
- Faithfulness: ...
- Safety: ...

Return JSON with:
{
  "score": "pass | partial | fail",
  "reason": "short explanation",
  "failure_categories": ["..."]
}
```

Validate the judge against human annotations before relying on it. See [LLM-as-judge evaluation](../evaluation-testing/llm-as-judge.md).
