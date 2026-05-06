# Robustness Evals

Robustness evals check whether the application behaves consistently under realistic variation, ambiguity, and unexpected inputs.

## What to Test

- Out-of-scope queries.
- Out-of-knowledge-base queries.
- Ambiguous or underspecified requests.
- Noisy, misspelled, multilingual, or code-mixed inputs.
- Distribution shift from development examples to real user behavior.
- Adversarial perturbations where relevant.

## Existing Material

The existing [Robustness Testing](../testing/robustness_testing/robustness_testing.md) page focuses on out-of-context reliability for RAG applications and the `KnowOrNot` approach for testing whether applications abstain when the knowledge base does not contain the answer.

## Practical Advice

Robustness evals should include both non-malicious variation and foreseeable misuse. For high-stakes applications, pay special attention to whether the system recognizes uncertainty and abstains appropriately.
