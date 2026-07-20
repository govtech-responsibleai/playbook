---
sidebar_label: "[S] Finetuning"
sidebar_position: 2
---

# Finetuning

Finetuning adjusts model weights to make outputs better suited to a particular task, domain, or behaviour profile. It sits alongside guardrails as a higher-investment but more durable mitigation — useful when prompting and external controls run out of headroom.

## When finetuning helps

Consider finetuning when:

- The behaviour gap is consistent across many inputs (style, format, refusal patterns, domain vocabulary), not a few edge cases a prompt can patch.
- Latency and cost matter — a smaller finetuned model can replace a larger zero-shot one.
- The desired behaviour is hard to specify in a prompt but easy to demonstrate with examples.
- You have a stable, high-quality dataset of inputs and target outputs.

Prefer prompting, retrieval, or external guardrails when the behaviour gap is narrow, the data is noisy, or the model is frequently changing.

## Common approaches

| Approach | What it changes | Typical use |
| --- | --- | --- |
| Supervised fine-tuning (SFT) | Trains the model on input → output pairs | Domain adaptation, format conformance, style transfer |
| Preference optimisation (DPO, RLHF, RLAIF) | Trains the model on preferred vs rejected responses | Safety alignment, tone, refusal behaviour, harmlessness |
| Parameter-efficient tuning (LoRA, adapters) | Updates a small slice of weights | Faster, cheaper, easier to swap variants |
| Continued pre-training | Updates base weights on raw domain text | Strong vocabulary or language adaptation; expensive |

## Operational considerations

- Finetuning does not replace evaluation — re-run [safety](../evaluating-ai-systems/safety.mdx), [robustness](../evaluating-ai-systems/robustness.md), and [fairness](../evaluating-ai-systems/fairness.md) evals on the tuned model.
- Track the base model version; a finetune is only valid against the base it was trained from.
- Watch for capability regressions: tuning on a narrow distribution can degrade general performance.
- Document the training data, objective, and known trade-offs alongside the model artifact.
