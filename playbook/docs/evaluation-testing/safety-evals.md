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

## Existing Material

For deeper Responsible AI safety material, see:

- [Safety Testing](../testing/safety_testing/safety_testing.md)
- [Open-source Safety Testing Benchmarks and Tools](../testing/safety_testing/diff_safety.md)
- [Risk Taxonomy](../testing/safety_testing/taxonomy.md)
- [GovTech's Benchmarks](../testing/safety_testing/govtech.md)

For automated support, see [Litmus](../testing/litmus.md) and the [Responsible AI Benchmark](../tools/responsible-ai-benchmark.md).
