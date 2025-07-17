# GovTech's Benchmarks

GovTech's benchmarks have been specifically designed with localisation and contextualisation in mind. We do not want to replicate open-source benchmarks, but aim to fill gaps in existing benchmarkings. 

## MinorBench

## RabakBench

In collaboration with researchers from SUTD, we developed `RabakBench`, a multilingual AI safety benchmark tailored specifically for Singapore’s linguistic landscape—covering Singlish, Chinese, Malay, and Tamil. `RabakBench` addresses gaps left by existing benchmarks, moving beyond solely Singlish hate speech to include broader risk categories such as insults, sexual content, and self-harm. These categories align directly with our [defined risk taxonomy](taxonomy.md). `RabakBench` provides developers, researchers, and policymakers a robust tool to thoroughly evaluate multilingual AI safety that is tailored to the Singapore context, promoting responsible and locally informed AI deployment.

![RabakBench](images/rabakbench.png)
_RabakBench - using Singapore's unique multilingual landscape as a stress test for AI safety_

`RabakBench` can be used to evaluate guardrails, LLMs as models, and also LLM applications. For example, we evaluated widely-used guardrails and identified significant multilingual performance disparities. This underscores the critical necessity of localized benchmarks capable of uncovering specific linguistic blind spots, particularly within diverse multilingual contexts.

![RabakBench](images/rabakbench_results.png)
_Results of evaluating 11 widely-used guardrails on `RabakBench`_

The creation of `RabakBench` followed a three-stage pipeline where we carefully used LLMs to amplify human insights: first, automated content generation paired with adversarial red-teaming to discover challenging edge cases; second, an alternative testing approach leveraging multiple LLM outputs and majority voting for scalable accuracy; and third, a thorough translation process using iterative human annotation workshops and semantic similarity checks to ensure linguistic authenticity across all targeted languages. 

Further details can be found in our [blog post](https://go.gov.sg/rabakbench-blog) and our [paper](https://go.gov.sg/rabakbench-report). You can also directly access the public set of the benchmark [here](https://go.gov.sg/rabakbench).