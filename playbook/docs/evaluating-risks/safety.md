# Safety Evals

Safety evals check whether the system avoids harmful, prohibited, adversarial, or otherwise unacceptable behavior.

## What to Test

- Harmful content or unsafe compliance.
- Jailbreak and prompt injection attempts.
- Prohibited use cases.
- Toxicity, harassment, hate, sexual content, self-harm, or violence risks where relevant.
- Unsafe behavior specific to the application's domain or users.

## Minimum Launch Expectation

Safety testing is part of the minimum bar before launch. Teams should define the safety categories that matter, run representative tests, review failures, and decide whether mitigations are required before release.

## Adversarial / Red-team Prompt Generation

*Coming soon — this section will cover how to generate adversarial prompts beyond off-the-shelf benchmarks, including LLM-assisted prompt mutation and team-led red-team exercises.*

## Refusal Taxonomy and Rejection Classifiers

*Coming soon — this section will cover how to define what counts as a refusal, common rejection-classification approaches (keyword search, fine-tuned classifier, evaluator LLM), and the taxonomy used at GovTech.*

## Benchmark-Leakage Handling

*Coming soon — this section will cover why off-the-shelf benchmarks lose signal once a model has trained on them, and how to mix open-source benchmarks with proprietary prompts to retain meaningful results.*

## Evaluator-LLM Validation

*Coming soon — this section will cover how to validate that the LLM scoring your safety eval outputs agrees with human reviewers.*

## Tools

For automated support, see [Litmus](../tools/litmus.md) and the [Responsible AI Benchmark](../tools/responsible-ai-benchmark.md).
