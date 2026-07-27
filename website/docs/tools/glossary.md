---
sidebar_label: "Glossary"
sidebar_position: 5
---

# Glossary

:::info[What's new on this page]

New in this release: working definitions for the terms used across the playbook.

:::

## Accuracy

A broad measure of whether the system gives correct or acceptable outputs for the intended task. For LLM systems, accuracy may include correctness, completeness, relevance, faithfulness, format adherence, citation quality, and task success.

## Agentic

Describes a system that takes actions with consequences beyond the conversation, such as calling tools, writing to other systems, or executing multi-step plans on a user's behalf. Risk follows from what the system can do rather than what it was built for. See the [Agentic Risk & Capability Framework](agentic-risk-capability-framework.md).

## Attack Success Rate (ASR)

The proportion of adversarial prompts that produce an unsafe response, calculated as unsafe responses divided by total adversarial prompts tested. A lower ASR indicates a safer system. See [WOG safety testing framework](wog-safety-testing.md).

## Benchmark leakage

Contamination of a model's training data with prompts from a public benchmark, which inflates scores without any matching improvement in behaviour. See [safety evals](../evaluating-ai-systems/safety.mdx).

## Evaluation

A structured process for measuring system behaviour against defined criteria, datasets, metrics, rubrics, or human judgements.

## Fairness

Whether system behaviour differs across groups in ways the task does not justify, for example varying tone, refusal rate, or answer quality with a user's stated identity. See [fairness evals](../evaluating-ai-systems/fairness.md).

## Functional testing

Testing that checks whether the system performs its intended task across realistic user journeys.

## Grounding

The extent to which an answer is supported by the provided sources, retrieved context, or known system evidence.

## Guardrail

A component or process that detects, blocks, redacts, warns, escalates, or otherwise constrains risky system behaviour.

## Hallucination

Generated content that is not factual or not grounded in the source material provided to the system.

## Jailbreak

A prompt crafted to make a model bypass its own safety training or system constraints, so that it produces output it would normally refuse.

## LLM-as-judge

Use of a language model to assess another model or system output against a rubric or reference criteria.

## PII

Personally identifiable information: information that can identify an individual directly or indirectly.

## Prompt injection

Instructions planted in content the model reads — user input, a retrieved document, a web page — which the model then follows as though they came from the operator. Distinct from a jailbreak, where the attacker addresses the model directly.

## RAG

Retrieval-augmented generation: an architecture where the model is provided retrieved context from a knowledge base or source corpus before generating an answer.

## Red-teaming

Structured adversarial testing in which testers actively try to make a system misbehave, rather than checking it against a fixed list of cases.

## Refusal

A response in which the system declines to engage with a prompt. Refusals vary in firmness, from outright rejection to hedged engagement, so measuring them usefully needs a taxonomy. See [safety evals](../evaluating-ai-systems/safety.mdx).

## Robustness

Whether a system holds up under non-malicious difficulty such as unusual phrasing, out-of-scope questions, or missing context. Distinct from safety, which concerns deliberate misuse. See [robustness evals](../evaluating-ai-systems/robustness.md).

## Safety testing

Testing that checks whether a system avoids harmful, prohibited, adversarial, privacy-invasive, or otherwise unacceptable behaviour.

## System prompt

The instructions an operator gives a model to set its role, scope, and constraints, not shown to the user.

## Task-quality eval

An evaluation that measures whether outputs are useful for the specific task, not only whether they are generically fluent or plausible.

## Threshold

The score at which a guardrail's output triggers an action such as blocking, warning, logging, or escalating. Guardrails return scores rather than verdicts, so the threshold trades false positives against false negatives. See [threshold tuning](../improving-ai-systems/threshold-tuning.md).
