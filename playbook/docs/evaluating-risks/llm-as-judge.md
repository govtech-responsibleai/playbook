# LLM-as-Judge Evaluation

LLM-as-judge methods use a language model to evaluate outputs against a rubric, reference answer, or preference criteria.

## Useful For

- Open-ended quality scoring.
- Comparing candidate models or prompts.
- Checking faithfulness, completeness, or relevance.
- Scaling review after a smaller human-labeled set is available.

## Risks

LLM judges can be biased, inconsistent, sensitive to prompt wording, and overconfident. They may also prefer verbose or stylistically familiar answers.

## Minimum Validation

Before relying on an LLM judge:

1. Write a clear rubric.
2. Test the judge on examples with known human labels.
3. Measure agreement with humans.
4. Inspect disagreements.
5. Revalidate when the task, model, rubric, or data distribution changes.

The existing [Testing](../testing.md) page discusses the Alternative Annotator Test as one approach to validating whether an LLM judge agrees with human annotations at least as well as other humans do.
