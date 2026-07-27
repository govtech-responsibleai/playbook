---
sidebar_label: "Robustness evals"
sidebar_position: 4
---

# Robustness evals

Robustness evals measure whether an AI system holds up when faced with unexpected inputs or responses. We scope robustness to non-malicious cases, where the failure is caused not by an attack but by underlying issues with the system setup. Deliberate attempts to bypass a refusal are a safety concern, covered in [Safety evals](safety.mdx).

There are some types of robustness issues you may face:

<div className="issue-summary">

| | |
| --- | --- |
| Out-of-context reliability | Whether the answer is supported by a source, and how the system handles it when there is none |
| Out-of-scope / edge case queries | Whether quality holds when an input sits outside your scope |
| Response consistency | Whether the same question produces the expected answer, however it is phrased |

</div>

## Out-of-context reliability

Retrieval-augmented generation (RAG) is one of the most common ways to reduce hallucination — additional context (via a knowledge base or other sources) is provided to the model to guide it to answer factually. RAG has a fundamental limitation: no knowledge base can anticipate every user input. As such, users will provide inputs that are out-of-knowledge-base. In such scenarios, the application's response matters: for high-stakes applications where information must be accurate (e.g. chatbots on government policies), the application is expected to recognise its lack of contextual information and abstain from answering.

### Evaluating retrieval

Evaluate retrieval on its own, separately from the response. Whether the right content is supplied to the LLM is a separate issue from how the LLM handles it, and it has its own levers (changing the knowledge base, embedding model, chunking strategy, and more).

There are some well-defined metrics you can use here: context precision (how much of what was retrieved is relevant), context recall (how much of the relevant material was retrieved), and faithfulness (whether each claim in the answer is supported by the retrieved context). All three are implemented in open-source packages such as [DeepEval](https://deepeval.com/guides/guides-rag-evaluation) and [Ragas](https://docs.ragas.io/en/stable/concepts/metrics/available_metrics/). 

### Evaluating context hallucination

Every application's out-of-context reliability scenarios will differ since each relies on a different knowledge base. The process of generating these test scenarios is similar across applications: leave a key piece of information out of the knowledge base, then assess how the application responds when given a query based on that information.

:::note[KnowOrNot]

Based on this testing methodology, [`KnowOrNot`](../tools/knowornot.md) generates out-of-knowledge-base queries and automatically assesses LLM applications' tendency to abstain accordingly. Details: [blog post](https://medium.com/dsaid-govtech/does-your-llm-know-when-to-say-i-dont-know-465b509505dc) and [paper](https://arxiv.org/abs/2505.13545).

:::

## Out-of-scope or edge case queries

Your system might face inputs that are outside your testing distribution.

- Out-of-scope queries.
- Ambiguous or underspecified requests.
- Noisy, misspelled, multilingual, or code-mixed inputs.

### Building a robust test set

Enhance your eval set by diversifying its test cases.

1. Inject noise — misspellings, special characters, multilingual code-mixed inputs.
2. Rewrite with varied input styles — short, terse phrases versus long, verbose sentences.
3. Generate out-of-scope and edge case queries from your system prompt.
4. Strip details from a query to make it more ambiguous and vague.

<details>
<summary><strong>Example: Perturbing one query</strong></summary>

Baseline question, which the system already answers correctly:

> What is the income ceiling for the Green Support Scheme?

| Perturbation | Query |
| --- | --- |
| Typos | wat is the incom ceilling for gren suport scheme |
| Singlish | i think there was some green support scheme thing, what's the max income before I cannot apply |
| Multilingual / Code-mixing | Green Support 的 income ceiling 多少? |
| Terse | green support income ceil |
| Out-of-scope | what to eat for lunch today |

Score each against the same functional criterion and compare to the baseline. Report the drop per perturbation type, so you know where the weakness lies.

</details>

## Response consistency

The consistency of an application's output can vary depending on the application type. For instance, a creative brainstorming application may require higher model temperatures and more varied outputs, whereas a factual search application should return consistent outputs.

Regardless, response consistency is a useful signal of how robust your system is. It tells you how predictable the system will be once deployed, and how much of your eval score is noise.

When running any form of evals, run the same test cases through the application multiple times, and aggregate responses across runs.
