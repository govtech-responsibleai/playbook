# Fairness Evals

Fairness evals check whether system behavior differs unfairly across protected or sensitive attributes, groups, languages, or user contexts.

## When to Run Fairness Evals

Prioritize fairness testing when:

- The system affects access, ranking, triage, recommendations, or decisions.
- User inputs include protected attributes directly or indirectly.
- Outputs could vary by names, gender, race, religion, language, disability, age, or other sensitive attributes.
- Generated text may encode stereotypes or unequal treatment.

## Existing Material

- [Fairness Testing in GenAI](../testing/fairness_testing/fairness_generative.md)
- [Fairness Testing in Discriminative AI](../testing/fairness_testing/fairness_discriminative.md)

## Practical Advice

For generative AI, create paired or controlled prompts that vary only the attribute of interest where possible. For discriminative models, evaluate subgroup performance, false positive and false negative rates, calibration, and downstream impact.
