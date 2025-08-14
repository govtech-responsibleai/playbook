# Robustness Testing 

## What it is (to us)

Robustness testing is the process of assessing whether an LLM application responds according to what users expect given unexpected but realistic inputs, in order to assess whether the application is reliable, consistent and trustworthy. We do not view robustness as resistance to malicious attacks, but focus primarily on non-malicious failure modes, assessing whether applications handle real-world variability gracefully. 

## Out-of-context Reliability 
Retrieval-augmented generation (RAG) is one of the most common ways to reduce hallucination, which is the tendency of LLMs to produce factually incorrect content. In RAG applications, additional context (via a knowledge base or other sources) is provided to the model to guide it to answer more factually. Hoever, RAG has a fundamental limitation - no knowledge base can anticipate every user input. As such, it is possible for users to provide inputs that are out-of-knowledge base. In such scenarios, it is critical to determine how we want the application to respond. For high-stakes applications where information must be accurate (e.g., chatbots on government policies), LLM applications are expected to recognise their lack of contextual information and abstain from answering. 

Every application's out-of-context reliability testing scenarios is expected to differ, as different applications rely on different knowledge bases. Nonetheless, the process of generating these testing scenarios is similar - if we leave a key piece of information out of the knowledge base, how will the application respond when given a query based on that key piece of information? Based on this testing methodology, `KnowOrNot` generates out-of-knowledge base queries and automatically assess LLM applications' tendency to abstain accordingly. 

!!! note "KnowOrNot"

    A description of `KnowOrNot`'s key features can be found in this [blog post](https://medium.com/dsaid-govtech/does-your-llm-know-when-to-say-i-dont-know-465b509505dc) and [paper](https://arxiv.org/abs/2505.13545).


