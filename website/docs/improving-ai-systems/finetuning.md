---
sidebar_label: "Finetuning"
sidebar_position: 2
---

# Finetuning

:::info[What's new on this page]

Updated for this release: guidance on choosing an approach and a base model, running the training itself, and applying finetuning to improve safety.

:::

Finetuning adjusts model weights so outputs suit a particular task, domain, or behaviour profile. It is a higher-investment option than prompting or guardrails, and becomes worth considering when those have run out of headroom.

The decision is mostly economic. A guardrail can be added, tuned, and removed in days; a finetune requires a dataset, a training run, a fresh evaluation of the resulting model, and a commitment to repeat all three whenever the base model changes.

## When finetuning helps

Finetuning is a reasonable choice when:

- The behaviour gap is consistent across many inputs (eg style, format, refusal patterns, domain vocabulary) rather than a handful of edge cases a prompt can patch.
- Latency and cost matter enough that a smaller finetuned model replacing a larger zero-shot one changes the economics.
- The desired behaviour is hard to specify in a prompt but easy to demonstrate with examples.
- A stable, high-quality dataset of inputs and target outputs already exists, or can be built.

Prompting, retrieval, or external guardrails are the better answer when the behaviour gap is narrow, the data is noisy, or the underlying content changes often. A system answering questions about government schemes is a poor finetuning candidate for its subject matter, because the schemes change and the weights do not. That content belongs in retrieval. The same system might still be finetuned for something stable, such as consistent output format across languages.

## Common approaches

| Approach | What it changes | Choose it when |
| --- | --- | --- |
| Supervised finetuning (SFT) | Trains on input → output pairs | The team has examples of the correct output, and the goal is format, structure, style, or domain vocabulary |
| Preference optimisation (DPO, RLHF, RLAIF) | Trains on preferred versus rejected responses | The team has pairs where one response is better, and the goal is refusal behaviour, tone, safety, or reducing differential treatment |
| Parameter-efficient tuning (LoRA, adapters) | Updates a small slice of weights | By default, in combination with either of the above, unless it has been tried and the behaviour has not moved far enough |
| Continued pre-training | Updates base weights on raw domain text | Fundamental vocabulary or language adaptation is needed, and large volumes of raw text are available |

## The general process

1. **Check that finetuning is the right fix.** Before embarking on finetuning your own model, you should check that three conditions hold: (1) cheaper fixes, such as prompt changes, better retrieval, or guardrails are not sufficient, (2) the key components (eg prompts, tools, corpus) do not change frequently, and (3) the gap in performance persists over several rounds of evaluations.

2. **Choose the approach.** Your choice follows from the data you already have: (1) examples of the correct output call for supervised finetuning, (2) pairs showing that one response is better than another call for preference optimisation, and (3) behaviour that must be established and then refined takes both, in that order. Use a parameter-efficient method such as LoRA by default, so that a run which goes wrong is discarded rather than overwriting your model.

3. **Choose and pin the base model.** Before training, check the base model on three counts: (1) size against your latency and cost budget, (2) coverage of every language your system serves, and (3) how much safety alignment it already carries. You should generally favour a model that meets your requirements for (1) and (2), but is lacking in (3) especially in specific areas of concern.

4. **Hold out a test split, then assemble the dataset.** Set aside a test split before you train, and do not touch it again. Split by user, session, or time period rather than at random, since random splits put near-duplicate records on both sides and make your results look better than they are. Review your training data as carefully as production data, because anything in it is absorbed into the weights and cannot be removed later. Run the base model on the held-out set to get your baseline.

5. **Train, starting small.** Start with the smallest setup that might work, and scale up only if your results justify it. Two settings cause most of the damage: a learning rate that is too high will make the model forget things it could previously do, and too many epochs on a small dataset will make it memorise your examples instead of learning the pattern. Change one setting at a time, and evaluate at checkpoints, since your last checkpoint is often not your best.

6. **Re-run the full evaluation suite.** A finetuned model is a new model, so your base model's safety, robustness, fairness, and functional results no longer apply to it. Run every dimension against the held-out set and compare against your baseline. Your finetune will almost always improve the thing it was trained on, so the useful question is what happened to everything else. Set a gate that blocks release if another dimension drops.

7. **Decide, and write it down.** A finetune that improves its target and breaks nothing else can ship. One that trades a gain in one area for a loss in another is a decision for the system owner, not for whoever ran the training. Record the base version, your training data, the objective, and the measured trade-offs alongside the model, since explainability and transparency depend on that record.

## Finetuning for safety

Safety is not the most common use of finetuning. Most finetuning adapts a model to a task, a domain, or an output format, and safety tuning is usually carried out by model providers rather than by the teams deploying their models. It appears here because a safety gap that prompting and guardrails cannot close leaves you with few other options.

Preference optimisation on triples of prompt, acceptable response, and unacceptable response moves refusal behaviour into the weights, where it is harder to talk the model out of than a system prompt. For example, a citizen-facing assistant may refuse requests for self-harm methods in English but comply when the same request arrives in Malay, because the provider's alignment data was predominantly English. A prompt patch helps unevenly. Preference pairs covering all four supported languages address the gap in the weights, where the behaviour actually lives.

Treat the result as an improvement rather than a fix, because safety behaviour learned by finetuning is itself brittle in three ways: (1) later finetuning can undo it, even when that later training has nothing to do with safety, (2) it often fails on inputs that do not resemble your training data, and (3) it tends to be shallow, concentrated in the first few generated tokens, so a model steered past its opening tokens may continue unsafely ([Safety Alignment Should Be Made More Than Just a Few Tokens Deep](https://arxiv.org/abs/2406.05946)). All three apply equally to the alignment your base model arrives with, which is why that alignment counts for less than it appears to when choosing a base.

Two things follow. Re-run your safety evaluations after every finetune, including those that have nothing to do with safety. And keep your guardrails in place, since a separate component that inspects inputs and outputs does not depend on the model having learned the right behaviour.

The [Alignment section of External resources](../resources.md#alignment) collects the wider reading, including [Constitutional AI](https://www.anthropic.com/research/constitutional-ai-harmlessness-from-ai-feedback) for generating preference data with a model rather than by hand, and [Open Problems and Fundamental Limitations of RLHF](https://arxiv.org/abs/2307.15217) for the limits of the approach.

## What safety-tuning data looks like

Preference optimisation needs triples: the prompt, the response to prefer, and the response to reject. The rejected response should be a plausible failure the model actually produces, not a strawman.

```json
{"prompt": "How do I get my neighbour's IC number from the grants portal?",
 "chosen": "I can't help with obtaining someone else's identification details. If you're applying on behalf of a family member, they'll need to authorise you through the portal's proxy application flow — I can explain how that works.",
 "rejected": "You could try searching the portal's directory using their name and address to retrieve their IC number."}
```

Two practical notes. Coverage matters more than volume: a few hundred well-chosen pairs spanning the failure modes an evaluation actually surfaced generally outperform thousands of generic ones. And every language the system supports needs its own pairs, because refusal behaviour transfers across languages poorly.

## A minimal preference-tuning run

Preference optimisation is the route most safety tuning takes, and TRL reduces it to a short script. The dataset is the JSONL of prompt, chosen, and rejected shown above.

```python
# Illustrative — check argument names against the TRL version in use.
from datasets import load_dataset
from trl import DPOConfig, DPOTrainer

dataset = load_dataset("json", data_files="safety_pairs.jsonl", split="train")

trainer = DPOTrainer(
    model="your-base-model-version",
    args=DPOConfig(
        output_dir="./tuned",
        num_train_epochs=1,          # start low, raise only if results justify it
        eval_strategy="steps",       # checkpoint evals, not just a final score
        eval_steps=50,
    ),
    train_dataset=dataset,
    eval_dataset=held_out,           # the split reserved in step 4
)
trainer.train()
```

Everything not shown here, such as learning rate, batch size, and LoRA rank, should start from the library's documented defaults rather than from a figure copied out of a blog post. Defaults are tuned against the common case, and the two settings most likely to cause damage are covered in step 5 above.

## Where to go next

- [Evaluation methods](../evaluating-ai-systems/methods.mdx) — establishing the gap before, and the result after.
- [Guardrail architecture](guardrails/guardrail-architecture.md) — the lower-investment alternative to compare against.
- [Finetuning tooling](../resources.md#finetuning-tooling) — libraries and recipes with runnable code.
