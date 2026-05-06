# Fairness Evals

Fairness evals check whether system behavior differs unfairly across protected or sensitive attributes, groups, languages, or user contexts.

## When to Run Fairness Evals

Prioritize fairness testing when:

- The system affects access, ranking, triage, recommendations, or decisions.
- User inputs include protected attributes directly or indirectly.
- Outputs could vary by names, gender, race, religion, language, disability, age, or other sensitive attributes.
- Generated text may encode stereotypes or unequal treatment.

## Practical Advice

For generative AI, create paired or controlled prompts that vary only the attribute of interest where possible. For discriminative models, evaluate subgroup performance, false positive and false negative rates, calibration, and downstream impact.

## Paired-Prompt Design

*Coming soon — this section will cover how to design paired prompts for fairness evaluation in generative AI, including how to control for attributes that should not affect outputs.*
