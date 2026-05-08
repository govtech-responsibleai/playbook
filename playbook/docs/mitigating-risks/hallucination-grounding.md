# Hallucination and Grounding Guardrails

!!! info "About this page"

    This page is new in the upcoming Responsible AI Playbook release. It covers mitigation patterns, reference-based grounding tools, reference-free hallucination detection, factuality verification, and a General/Sentinel code example. Unhighlighted sections are migrated from the previously published [Different Types of Guardrails: Hallucination and Factuality](https://playbooks.aip.gov.sg/responsibleai/guardrails/diff_guardrails/#6-hallucination-and-factuality) page; new prose and the code example are highlighted.

Grounding mitigations reduce unsupported answers and help systems abstain when they lack enough evidence. Ensuring LLM outputs are grounded in facts and the provided context improves reliability.

## Mitigation Patterns

- Require answers to cite retrieved sources.
- Check generated claims against retrieved context.
- Instruct the system to abstain when context is insufficient.
- Constrain retrieval to authorized and current sources.
- Add post-generation checks for unsupported claims.
- Route uncertain answers to human review.

## Reference-Based Grounding (RAG Setting)

The most common technique compares responses against retrieved context. Tools that support this include:

- [RAGAS](https://docs.ragas.io/en/latest/concepts/metrics/available_metrics/faithfulness/)
- [TruLens](https://www.trulens.org/getting_started/quickstarts/groundtruth_evals_for_retrieval_systems/)
- [DeepEval](https://docs.confident-ai.com/docs/metrics-hallucination)
- [AWS Bedrock Guardrails Contextual Grounding](https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails-contextual-grounding-check.html)
- [Azure AI Content Safety Groundedness](https://learn.microsoft.com/en-gb/azure/ai-services/content-safety/overview)

Other approaches include [knowledge graph validation](https://github.com/xz-liu/GraphEval) and citation checking.

## Reference-Free Hallucination Detection

Reference-free detection does not require a reference or source to verify claims. The intuition: LLMs may exhibit tell-tale behaviours when hallucinating. Three main approaches:

| Approach | Description | Examples |
|---|---|---|
| Sampling-based | Prompt the LLM multiple times and evaluate consistency. Computationally costly. | [Self-evaluation](https://arxiv.org/pdf/2207.05221), [SelfCheckGPT](https://github.com/potsawee/selfcheckgpt), [SAC³](https://github.com/intuit/sac3), [Cross-examination](https://aclanthology.org/2023.emnlp-main.778.pdf), [CleanLab](https://aclanthology.org/2024.acl-long.283/) |
| Probability-based | Aggregate token probabilities, reframing hallucination detection as **uncertainty estimation**. Requires access to token probabilities. | [Token probability](https://arxiv.org/pdf/2307.03987), [Claim Conditioned Probability](https://github.com/IINemo/lm-polygraph), [Semantic Entropy](https://www.nature.com/articles/s41586-024-07421-0), [LM-Polygraph](https://github.com/IINemo/lm-polygraph) |
| Model-based | Fine-tune new models to detect hallucination. | [Lynx](https://huggingface.co/PatronusAI/Llama-3-Patronus-Lynx-70B-Instruct) |

!!! note "Latency and cost"

    Inference-time evaluators add latency and cost, especially when responses must be broken into multiple claims. Lightweight [NLI models](https://huggingface.co/tasksource/deberta-small-long-nli) can detect entailment more cheaply. Another option is to provide citations and let users verify.

## Factuality

Factuality refers to accuracy with respect to *world knowledge* (Wikipedia, Google Search, or a designated source of truth) rather than retrieved context. Tools include:

- [Loki](https://github.com/Libr-AI/OpenFactVerification) — end-to-end pipeline for dissecting long texts into individual claims, generating queries for evidence, and verifying.
- [Search-Augmented Factuality Evaluator (SAFE)](https://github.com/google-deepmind/long-form-factuality) — LLM agents that issue Google Search queries.
- [Grounding with Gemini](https://ai.google.dev/gemini-api/docs/grounding?lang=python) — ground Gemini responses with Google Search.

!!! tip "Prompt design to reduce hallucination"

    Beyond a separate guardrail, prompt design can help:

    - Character role prompting.
    - Chain of Thought / Chain of Knowledge.
    - Instruct the model to respond "I don't know" when uncertain.
    - Counterfactual demonstrations.

!!! tip "Decoding strategies"

    With access to model weights, decoding strategies that reduce hallucinations include factual-nucleus sampling and context-aware decoding.

## What to Measure

Use [RAG and grounding evals](../evaluating-risks/functional.md) to measure faithfulness, citation correctness, and abstention. A grounding guardrail should improve those metrics without causing excessive over-refusal.

## Code Example

=== "General (RAGAS faithfulness)"

    ```python
    # Score whether the answer is supported by the retrieved context.
    from ragas import evaluate
    from ragas.metrics import faithfulness
    from datasets import Dataset

    ds = Dataset.from_dict({
        "question": [user_question],
        "answer": [model_answer],
        "contexts": [retrieved_chunks],
    })
    result = evaluate(ds, metrics=[faithfulness])
    print(result["faithfulness"])  # 0.0–1.0
    ```

=== "Sentinel"

    ```python
    # Hallucination guardrail is on the Sentinel roadmap (govtech/hallucination,
    # status: Planned). Pair Sentinel input/output guardrails with a
    # grounding eval (RAGAS, TruLens, AWS Bedrock Contextual Grounding)
    # at inference time until the dedicated guardrail ships.
    payload = json.dumps({
        "text": model_answer,
        "guardrails": {"govtech/hallucination": {"context": retrieved_chunks}},
    })
    response = requests.post(SENTINEL_BASE_URL, headers=HEADERS, data=payload)
    ```
