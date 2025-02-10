# Fairness Testing in GenAI

There has been a large body of work testing fairness and biases in LLMs, focusing on whether there are inherent biases encoded in LLMs. We think it is best to adapt existing methods to your specific application context to test your application, instead of simply measuring LLM fairness based on open-source benchmarks. 

## Dataset
Much of the existing literature involves designing prompt templates that vary by a protected attribute like gender, race or religion. Some popular methods are:
- Using [naturally occurring prompts that contain references to a protected attribute](https://github.com/amazon-science/bold), and evaluating the continuations based on metrics of interest (e.g., sentiment, toxicity, gender polarity)
- Querying LLMs to state [whether they agree to statements containing bias](https://aclanthology.org/2023.acl-long.656/)
- Requiring LLMs to perform [classification](https://arxiv.org/abs/1901.09451) or [make a choice in MCQs](https://arxiv.org/abs/2110.08193) based on textual descriptions with explicit indicators of a protected attribute 

For each specific application, it is necessary to evaluate whether the LLM generations could be affected by a protected attribute, bearing in mind that the attribute can be explicitly defined (e.g., user has to state gender) or implicit (e.g., name). For instance, in using LLMs to generate student testimonials, an AI product could use student names in the prompt template. 

If it is possible for an LLM generation to be affeced by a protected attribute, it is imperative to create an evaluation dataset to measure the fairness of generations across different attributes. Similar to safety testing, the data used for evaluation should be (i) meaningful, (ii) varied, (iii) contextualised. 

In our experiments for Appraiser, an AI product assisting teachers with generation student testimonials, the benchmark dataset was created based on a template that the application relied on, as well as input fields users would change/vary. 

## Metrics

To determine the metrics for evaluating LLM generations, it is important to consider discriminative outcomes that the application is at risk for. 

Some common outcomes/risks include: 
- Sentiment 
- Toxicity 
- Psycholinguistic norms (more extensive emotiion states)
- Gender Polarity (number of male/female specific tokens)
- Language style/formality 

Some applications may require application-specific metrics. In some cases, we could rely on traditional NLP methods (e.g., TF-IDF, word count), classifiers (sentiment) or LLMs for evaluation. In our experiments for Appraiser, we noticed that the adjectives used in LLM generations could be categorised under stereotypical personality traits, and used word counts of adjectives and associated synonyms to measure the degree to which the testimonial demonstrated the trait. 

## Evaluation

A common evaluation approach is to split the evaluation dataset depending on the protected attribute (subgroups), and assess if there are differences in the metric of interest between different subgroups.

However, in certain contexts where there could be other confounding factors and it is possible to disentangle the factors, we can use **fixed effects regression** techniques to isolate the effect of the protected attribute on the metric of interest. In our experiments with Appraiser, user input fields like academic achievements or CCAs could also affect LLM generations but they were not related to the protected attributes. Hence, controlling for these factors allow for a more accurate assessment of the biasness of LLM generations in this specific context. 

!!! note "Original Blog Post"

    This page is adapted from our [original blog post](https://medium.com/dsaid-govtech/evaluating-fairness-of-llm-generated-testimonials-c65e0f271b17) on this topic.