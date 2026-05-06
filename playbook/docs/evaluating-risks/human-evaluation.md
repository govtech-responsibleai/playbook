# Human Evaluation

Human evaluation is useful when outputs are open-ended, contextual, or hard to score automatically.

## When to Use Human Evaluation

Use human review when:

- The task requires domain judgment.
- Multiple answers may be acceptable.
- The risk of a false pass is high.
- You are validating an LLM-as-judge or automated metric.
- You need qualitative failure analysis before automation.

## Designing Human Review

Define:

- The rubric and scoring scale.
- Reviewer qualifications.
- Examples of pass, partial pass, and fail.
- How disagreements will be resolved.
- How many samples each reviewer sees.
- How results feed into mitigation decisions.

## Validate Agreement

Track agreement between reviewers. When using LLM judges, compare them against human annotations rather than assuming that model-based scores are correct.
