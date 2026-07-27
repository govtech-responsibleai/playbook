---
sidebar_label: "Choosing a guardrail"
sidebar_position: 2
last_reviewed: 2026-07-27
---

# Choosing a guardrail

Choose a guardrail only after defining the failure it must address and where it belongs in the [guardrail architecture](./guardrail-architecture.md). An existing service or model is usually the fastest starting point, but a custom guardrail may be justified when available options do not meet the system's needs.

## Define the requirement

Write down the decision the guardrail must support. Include:

- the risk or behaviour to detect;
- the content or action it will inspect;
- the languages and local contexts it must recognise;
- the acceptable false-positive and false-negative costs;
- latency and availability requirements;
- data sensitivity and deployment constraints;
- the response the AI system will take; and
- the team responsible for operating the control.

Use representative examples to make the requirement testable. Include ordinary traffic, difficult boundary cases, local terminology, adversarial inputs, and cases that must not trigger the guardrail.

## Compare the available options

Potential sources include model-provider safety features, specialist API providers, open-source models and rules, and WOG tools. Compare them using the same evaluation set and application flow.

| Criterion | What to verify |
| --- | --- |
| Risk coverage | The guardrail detects the defined failure, including relevant edge cases |
| Local fit | It performs adequately on Singapore languages, terminology, and operating contexts |
| Integration | Its inputs, outputs, score format, and failure behaviour fit the architecture |
| Operations | The team can monitor versions, outages, latency, cost, and performance changes |
| Data handling | Processing, storage, and deployment meet the agency's requirements |
| Configurability | Thresholds, categories, and responses can be adapted to the user journey |

Do not rely on a provider's headline benchmark alone. Reproduce the evaluation on examples drawn from the intended use case. Test the guardrail inside the complete AI system because prompts, retrieval, tools, and other controls can change its effect.

GovTech options include [LionGuard](../../tools/lionguard.md) for localised content moderation and the [Off-Topic guardrail](../../tools/off-topic-guardrail.md) for detecting prompts outside an AI system's intended scope. Treat these as candidates to evaluate, not automatic defaults.

## Decide whether to build

Build a custom guardrail when existing options cannot meet a material requirement. Common reasons include:

- the risk category is specific to the agency or service;
- existing tools perform poorly on local language or domain terminology;
- data cannot be sent to an external service;
- the application needs predictable latency or on-premises deployment;
- available scores or categories cannot support the required responses; or
- production failures provide enough high-quality examples to justify a specialised detector.

Custom development transfers responsibility to the team. Plan for data collection, labelling guidance, model or rule selection, evaluation, deployment, monitoring, versioning, and periodic refresh.

## Build a custom guardrail

1. **Define the category and response policy.** State what is in scope, what is out of scope, and what the AI system should do when the guardrail triggers.
2. **Collect representative examples.** Include positive, negative, borderline, localised, and adversarial cases.
3. **Create labelling guidance.** Resolve ambiguous cases and measure agreement between reviewers.
4. **Establish a baseline.** Start with rules or a lightweight classifier before introducing a more complex model.
5. **Evaluate the detector.** Measure precision, recall, false-positive and false-negative rates, robustness, latency, and cost.
6. **Integrate and test.** Verify how the complete AI system behaves when the guardrail triggers, fails, or times out.
7. **Assign ongoing ownership.** Monitor failures, refresh the dataset, and re-evaluate every material version.

Whether adopting or building, record the selected version, evaluation set, known limitations, and decision rationale. Continue to [Production integration](./production-integration.md) to tune the guardrail and prepare it for launch.
