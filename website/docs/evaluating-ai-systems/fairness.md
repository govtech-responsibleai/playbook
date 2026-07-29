---
sidebar_label: "Fairness evals"
sidebar_position: 5
---

# Fairness evals


Fairness evals check whether your system behaves differently across protected or sensitive attributes, groups, languages, or user contexts. What you measure depends on what kind of system you have. For a generative system you are comparing outputs that vary only by an attribute; for a discriminative one you are comparing error rates and calibration across groups.

Both start from the same decision. Fairness has several formal definitions and they cannot all hold at once, so you need to know which one your system is being held to before you choose metrics. See [fairness improvements](../improving-ai-systems/fairness-improvements.md) for why that choice is forced and what the options are.

## When to run fairness evals

Prioritise fairness testing when:

- The system affects access, ranking, triage, recommendations, or decisions.
- User inputs include protected attributes directly or indirectly.
- Outputs could vary by names, gender, race, religion, language, disability, age, or other sensitive attributes.
- Generated text may encode stereotypes or unequal treatment.

## Generative AI

Whether your application requires fairness testing depends on whether generations could be affected by a protected attribute, whether explicit (the user must state a gender) or implicit (a name). An LLM that generates student testimonials may use student names in the prompt template, so fairness testing matters there.

### Paired-prompt design

If generations could be affected by a protected attribute, build an evaluation dataset that measures fairness across attribute values. Common methods:

- Use [naturally occurring prompts containing references to a protected attribute](https://github.com/amazon-science/bold), and evaluate continuations on metrics like sentiment, toxicity, or gender polarity.
- Query the LLM to indicate [whether it agrees with statements containing bias](https://aclanthology.org/2023.acl-long.656/).
- Require the LLM to [classify](https://arxiv.org/abs/1901.09451) or [make a choice in multiple-choice questions](https://arxiv.org/abs/2110.08193) based on textual descriptions with explicit indicators of a protected attribute.

### Metrics

Choose metrics based on the discriminative outcomes your application is at risk for. Common outcomes include sentiment, toxicity, psycholinguistic norms, gender polarity (the number of male-specific or female-specific tokens), and language style or formality.

Some applications require application-specific metrics. Traditional NLP methods (TF-IDF, word counts), classifiers, or LLMs are all viable evaluators. In our experiments with Appraiser, an LLM that generates student testimonials, the adjectives used in generations could be categorised under stereotypical personality traits, and word counts of those adjectives measured the degree to which a testimonial demonstrated each trait.

### Evaluation

Split the evaluation dataset by the protected attribute and assess differences in the metric of interest between subgroups.

Where there are confounding factors that can be disentangled, **fixed-effects regression** isolates the effect of the protected attribute on the metric of interest. In our Appraiser experiments, user input fields such as academic achievements or co-curricular activities also affected generations but were unrelated to the protected attributes. Controlling for these factors gave a more accurate read of bias.

:::note[Original blog post]

This section is adapted from our [original blog post](https://medium.com/dsaid-govtech/evaluating-fairness-of-llm-generated-testimonials-c65e0f271b17) on fairness in LLM-generated testimonials.

:::

## Discriminative AI

For a system that classifies, scores, or ranks, fairness testing compares performance across groups rather than comparing outputs on matched prompts. The work is mostly in choosing which comparison matters and getting enough data per group to make it.

### Metrics

Compute each of these per group rather than in aggregate, since an aggregate figure hides exactly the differences you are looking for:

<div class="table-centered">

| Metric | What it tells you |
| --- | --- |
| Base rate | The proportion of positive cases in each group. Everything else is uninterpretable without it |
| Selection rate | The proportion receiving a positive prediction. Equal rates across groups is demographic parity |
| True positive rate | The proportion of positive cases correctly identified. Equal rates across groups is equal opportunity |
| False positive rate | The proportion of negative cases wrongly flagged. Equal true and false positive rates together is equalised odds |
| Precision | The proportion of positive predictions that are correct |
| Calibration | Whether a predicted score of 0.7 corresponds to a 70% observed rate within each group |

</div>

Gaps are usually reported either as a difference between the best and worst group, or as a ratio between them. The ratio is easier to compare across metrics with different scales.

### Evaluation

Four things determine whether the numbers mean anything:

1. **Group labels.** You cannot disaggregate by an attribute you do not hold, and many public sector systems deliberately do not collect protected attributes. Where that is the case, consider whether a lawful proxy exists, whether aggregate analysis at a population level answers the question, or whether the evaluation has to be done on a consented sample instead.
2. **Sample size per group.** The smallest group determines how precise your estimate is, and small groups produce wide intervals that look like disparities. Report an interval alongside every per-group figure.
3. **The operating threshold.** Every metric above except calibration is threshold-dependent, so a disparity can appear or vanish as the threshold moves. Evaluate at the threshold you actually deploy at, and check whether the picture changes nearby.
4. **Intersections.** A system can look even across gender and across race while performing badly for a specific combination of the two. Test the intersections that matter for your service, subject to the sample sizes allowing it.

Finally, separate the metric gap from the harm. A difference in false positive rates matters because of what happens to the people wrongly flagged, and that consequence, rather than the size of the gap, is what determines how much the disparity matters.

[Fairlearn](https://fairlearn.org) and [AI Fairness 360](https://github.com/Trusted-AI/AIF360) both implement the metrics above and the common mitigation algorithms, with runnable notebooks.

## Where to go next

- [Fairness improvements](../improving-ai-systems/fairness-improvements.md) — choosing a definition, and what to do about a measured gap.
- [External resources](../resources.md#fairness) — the fairness literature and tooling.
