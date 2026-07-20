---
sidebar_label: "[JY] Robustness evals"
sidebar_position: 4
---

# Robustness Evals

:::info[About this page]

This page is new at this URL in the upcoming Responsible AI Playbook release. It covers robustness evaluation as non-malicious failure handling, including out-of-context reliability and KnowOrNot. Unhighlighted sections are migrated from the previously published [Robustness Testing](https://playbooks.aip.gov.sg/responsibleai/testing/robustness_testing/robustness_testing/) page; new prose is highlighted.

:::

Robustness evals check whether the application behaves consistently under realistic variation, ambiguity, and unexpected inputs. We treat robustness as **non-malicious failure modes** — whether applications handle real-world variability gracefully — rather than as resistance to deliberate attacks.

## What to Test

- Out-of-scope queries.
- Out-of-knowledge-base queries.
- Ambiguous or underspecified requests.
- Noisy, misspelled, multilingual, or code-mixed inputs.
- Distribution shift from development examples to real user behaviour.
- Adversarial perturbations where relevant.

## Practical Advice

Robustness evals should include both non-malicious variation and foreseeable misuse. For high-stakes applications, pay special attention to whether the system recognises uncertainty and abstains appropriately.

## Adversarial vs. Distributional Robustness

<mark class="new-since-v1">*Coming soon — this section will cover the difference between adversarial robustness (deliberate perturbations) and distributional robustness (natural shift), and when each matters for an application.*</mark>

## Out-of-Context Reliability

Retrieval-augmented generation (RAG) is one of the most common ways to reduce hallucination — additional context (via a knowledge base or other sources) is provided to the model to guide it to answer factually. RAG has a fundamental limitation: no knowledge base can anticipate every user input. As such, users will provide inputs that are out-of-knowledge-base. In such scenarios, the application's response matters: for high-stakes applications where information must be accurate (e.g. chatbots on government policies), the application is expected to recognise its lack of contextual information and abstain from answering.

Every application's out-of-context reliability scenarios will differ since each relies on a different knowledge base. The process of generating these test scenarios is similar across applications: leave a key piece of information out of the knowledge base, then assess how the application responds when given a query based on that information.

:::note[KnowOrNot]

Based on this testing methodology, `KnowOrNot` generates out-of-knowledge-base queries and automatically assesses LLM applications' tendency to abstain accordingly. Details: [blog post](https://medium.com/dsaid-govtech/does-your-llm-know-when-to-say-i-dont-know-465b509505dc) and [paper](https://arxiv.org/abs/2505.13545).

:::
