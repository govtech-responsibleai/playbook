---
sidebar_label: "[S] Fairness evals"
sidebar_position: 5
---

# Fairness evals

:::info[About this page]

This page is new at this URL in the upcoming Responsible AI Playbook release. It covers fairness evaluation for generative AI (paired-prompt design, metrics, evaluation) with a placeholder for discriminative AI fairness. Unhighlighted sections are migrated from the previously published [Fairness Testing in GenAI](https://playbooks.aip.gov.sg/responsibleai/testing/fairness_testing/fairness_generative/) page; new prose is highlighted.

:::

Fairness evals check whether system behaviour differs unfairly across protected or sensitive attributes, groups, languages, or user contexts.

## When to run fairness evals

Prioritise fairness testing when:

- The system affects access, ranking, triage, recommendations, or decisions.
- User inputs include protected attributes directly or indirectly.
- Outputs could vary by names, gender, race, religion, language, disability, age, or other sensitive attributes.
- Generated text may encode stereotypes or unequal treatment.

## Practical advice

For generative AI, create paired or controlled prompts that vary only the attribute of interest where possible. For discriminative models, evaluate subgroup performance, false positive and false negative rates, calibration, and downstream impact.

## Paired-prompt design (generative AI)

Whether your application requires fairness testing depends on whether LLM generations could be affected by a protected attribute, whether explicit (user must state gender) or implicit (e.g. name). For instance, an LLM that generates student testimonials may use student names in the prompt template — fairness testing matters there.

If LLM generations could be affected by a protected attribute, create an evaluation dataset that measures fairness across attribute values. Common methods:

- Use [naturally occurring prompts containing references to a protected attribute](https://github.com/amazon-science/bold), and evaluate continuations on metrics like sentiment, toxicity, gender polarity.
- Query the LLM to indicate [whether it agrees with statements containing bias](https://aclanthology.org/2023.acl-long.656/).
- Require the LLM to [classify](https://arxiv.org/abs/1901.09451) or [make a choice in MCQs](https://arxiv.org/abs/2110.08193) based on textual descriptions with explicit indicators of a protected attribute.

### Metrics

Choose metrics based on the discriminative outcomes the application is at risk for. Common outcomes include:

- Sentiment.
- Toxicity.
- Psycholinguistic norms (more extensive emotion states).
- Gender polarity (number of male/female specific tokens).
- Language style/formality.

Some applications require application-specific metrics. Traditional NLP methods (TF-IDF, word count), classifiers (sentiment), or LLMs are all viable evaluators. In our experiments with Appraiser (an LLM that generates student testimonials), the adjectives used in generations could be categorised under stereotypical personality traits, and word counts of those adjectives measured the degree to which the testimonial demonstrated each trait.

### Evaluation

A common evaluation approach is to split the evaluation dataset by the protected attribute (subgroups) and assess differences in the metric of interest between subgroups.

Where there are *confounding factors* that can be disentangled, **fixed-effects regression** isolates the effect of the protected attribute on the metric of interest. In our Appraiser experiments, user input fields like academic achievements or CCAs also affected generations but were unrelated to the protected attributes. Controlling for these factors gave a more accurate read of bias.

:::note[Original blog post]

This section is adapted from our [original blog post](https://medium.com/dsaid-govtech/evaluating-fairness-of-llm-generated-testimonials-c65e0f271b17) on fairness in LLM-generated testimonials.

:::

## Discriminative AI fairness

<mark class="new-since-v1">*Coming soon — this section will cover fairness evaluation for discriminative AI models, including subgroup performance, false-positive/negative rates, calibration, and downstream impact analysis.*</mark>
