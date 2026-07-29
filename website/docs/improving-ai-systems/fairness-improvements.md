---
sidebar_label: "Fairness improvements"
sidebar_position: 4
---

# Fairness improvements


Fairness improvements reduce systematic differences in how your system performs across groups, attributes, or languages. Unlike safety or privacy, fairness rarely has a component you can put in front of the model. The work sits in your data, your evaluation pipeline, and your deployment policy.

The order of work therefore matters more than it does elsewhere. If you apply a fairness intervention before measuring the disparity, you are guessing which groups are affected and in which direction, and a wrong guess moves the problem rather than removing it.

## Decide what "fair" means first

Fairness has several formal definitions, and they cannot all hold at once. Three of the common ones conflict directly:

- **Demographic parity**: each group receives positive outcomes at the same rate.
- **Equalised odds**: error rates, both false positives and false negatives, are equal across groups.
- **Calibration within groups**: a given score means the same thing regardless of group, so a score of 0.7 corresponds to a 70% chance of the outcome for every group.

Except in degenerate cases, such as when base rates happen to be identical across groups or your classifier is perfect, satisfying any two of these forces you to give up the third ([Inherent Trade-Offs in the Fair Determination of Risk Scores](https://arxiv.org/abs/1609.05807)). This is a mathematical result rather than an engineering limitation, so no amount of model or threshold tuning escapes it. Decide which definition applies to your system and write it down. Without that decision you are still optimising one of them, just not deliberately.

For a generative system the question takes a different form, but the trade-off is the same. You need to decide what variation counts as unfair: whether refusal rates should match across languages, whether tone should be consistent across names of different origins, or whether answer quality should be equal across dialects. That decision is a policy judgement about the service rather than a technical parameter, and it belongs to whoever owns the service.

The [Fairness section of External resources](../resources.md#fairness) collects the underlying work, including a free textbook that sets out the formal criteria and how they relate.

## Where to intervene

<div class="table-centered">

| Stage | Approach |
| --- | --- |
| Pre-processing | Curate training and evaluation data to cover protected groups, languages, and dialects; rebalance under-represented slices; remove biased labels |
| In-processing | Use finetuning, alignment, or constraint-based training to reduce disparate behaviour; choose model variants with better cross-group performance |
| Post-processing | Apply output adjustments such as rerankers, per-group thresholds, or refusal templates; add equitable defaults for ambiguous inputs |

</div>

Which stage is available depends on what you control. If you consume a hosted model, in-processing is closed to you and your options are data coverage and post-processing. If you can finetune, all three are open, and you should still prefer the cheapest one that closes the measured gap. See [finetuning](finetuning.md) for the in-processing route.

## The general process

1. **Measure the disparity before you change anything.** [Fairness evals](../evaluating-ai-systems/fairness.md) covers paired-prompt design, where prompts vary only the attribute of interest so that any difference in output can be attributed to that attribute.

2. **Establish that the difference is real.** Small gaps on small slices are frequently noise, so check whether the difference survives a larger sample. Confounders matter too, and a system that answers worse in one language may be worse at that language or may be receiving harder questions in it.

3. **Choose the intervention that addresses the cause.** Under-representation in your training data is a data problem rather than a threshold problem, and adjusting thresholds to compensate hides it without fixing it.

4. **Re-measure on the same evaluation set, and check every group.** Fairness interventions redistribute performance rather than creating it. The question is not whether your target group improved, but what happened to the others.

5. **Record the trade-off and who accepted it.** Any group-specific threshold or default is a decision someone will eventually be asked to justify. Writing down the rationale at the time is considerably easier than reconstructing it later.

## Operational practices

- Run fairness evaluations as a standing eval set rather than a pre-launch check, since disparities appear as your traffic patterns change.
- Disaggregate production metrics by group where consent and policy allow.
- Treat multilingual coverage as a fairness concern in its own right. A system serving English, Mandarin, Malay, and Tamil has four quality levels, and they are rarely equal by default.

## Pitfalls

- **Optimising a metric before choosing a definition.** Improving a disparity number without stating which notion of fairness it represents produces a system that is fairer by one definition and less fair by another, with no record of the choice.
- **Fixing the evaluation set instead of the system.** Removing the slice that fails improves the metric and changes nothing for users.
- **Assuming a fix generalises.** An intervention validated in English frequently does not transfer to your other supported languages, and needs re-measuring in each.
- **Treating per-group thresholds as a technical detail.** They are a policy position about differential treatment and warrant explicit sign-off.
- **Stopping at the model.** Disparities also arise from retrieval coverage, interface design, and which channels different groups use to reach your service.

## Where to go next

- [Fairness evals](../evaluating-ai-systems/fairness.md) — measuring disparity before and after.
- [Finetuning](finetuning.md) — the in-processing route.
- [External resources](../resources.md#fairness) — the fairness literature.
