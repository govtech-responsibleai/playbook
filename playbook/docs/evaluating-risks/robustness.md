# Robustness Evals

Robustness evals check whether the application behaves consistently under realistic variation, ambiguity, and unexpected inputs.

## What to Test

- Out-of-scope queries.
- Out-of-knowledge-base queries.
- Ambiguous or underspecified requests.
- Noisy, misspelled, multilingual, or code-mixed inputs.
- Distribution shift from development examples to real user behavior.
- Adversarial perturbations where relevant.

## Practical Advice

Robustness evals should include both non-malicious variation and foreseeable misuse. For high-stakes applications, pay special attention to whether the system recognizes uncertainty and abstains appropriately.

## Adversarial vs. Distributional Robustness

*Coming soon — this section will cover the difference between adversarial robustness (deliberate perturbations) and distributional robustness (natural shift), and when each matters for an application.*

## Out-of-Context Reliability

*Coming soon — this section will cover the out-of-context reliability problem (the system answering confidently when the answer is outside its knowledge base) and the KnowOrNot approach for testing it.*
