# Responsible AI Playbook

![](images/responsibleai.png)

## About this playbook

Our aim is to help people understand and apply Responsible AI from a technical perspective. We do so in three ways:  

1. Clear and detailed **explanations for key concepts** in Responsible AI (such as safety, fairness, and interpretability)  
2. Easy-to-follow and actionable **recommendations for deploying AI responsibly** for your applications  
3. **Curated resources and papers** to dive deeper into various aspects of Responsible AI  

Our hope is for our playbook to help you to **quickly grasp the entire landscape** of papers, guides, tools, and methodologies relating to Responsible AI, provide a **practical starting point** to guard your AI applications against basic risks, and thus enabling you to **ship fast and responsibly**.

This playbook focuses on the technical aspects of Responsible AI. If you are interested in broader AI governance, please refer to the Circulars published by MDDI on the use, development, and deployment of LLM systems in the Singapore government. For specific guidance on AI security, please refer to CSA's Guidelines and Companion Guide for Securing AI Systems. 

## What's new 🚀 (updated 14 Aug 2025)

We regularly update this playbook to keep pace with the latest developments in Responsible AI. Here’s a summary of the most recent changes:

- Updated [Resources](resources.md) page 
- Added new section on [benchmarks developed by our team](testing/safety_testing/govtech.md), including RabakBench and MinorBench
- Added new section on [guardrails developed by our team](guardrails/govtech.md), including LionGuard 2
- Added new section on [Robustness testing](testing/robustness_testing/robustness_testing.md)
- Added new section on [Agentic testing](testing/agentic_testing/agentic_testing.md) 
- Updated main [Testing page](testing.md) to highlight human evaluations and our automated RAI Benchmark



## Our target audience

This playbook is primarily meant for **application developers** working in the Singapore government, especially those who are excited to develop and launch AI products but are concerned about managing safety or bias concerns about AI. However, this playbook will also be helpful to **product managers**, **CIO teams**, and even **policy officers**, as long as you have some foundational understanding of key AI concepts and are keen to learn more about Responsible AI.

Although this playbook is written with the Singapore government's context in mind, most of the explanations and recommendations in this playbook should be applicable to anyone building AI applications. After all, building safe, fair, and responsible AI applications is a common goal for many organisations. 

## About us 

We are the Responsible AI team in GovTech Singapore's AI Practice. We develop deep technical capabilities in Responsible AI to improve how the Singapore government develops, evaluates, deploys, and monitors AI systems in a safe, trustworthy, and ethical manner. To that end, we focus on applied research and experimentation on AI safety, fairness, and interpretability, especially in areas relevant to Singapore (such as localisation and low-resource languages).

We benefit a lot from open-source research, and we are happy to contribute back to the community through our open-sourced work on Hugging Face [here](https://huggingface.co/govtech), such as [LionGuard](https://huggingface.co/collections/govtech/lionguard-673838d03777e5ccb1b0ac2f), our [off-topic guardrail](https://huggingface.co/collections/govtech/off-topic-guardrail-673838a62e4c661f248e81a4), and [SEA-LION v2.1 SECURE](https://huggingface.co/collections/govtech/sea-lionv21-secure-67b6b427c4e5531c1b96199e). We also write more accessible Medium articles [here](https://medium.com/dsaid-govtech) for less technical audiences. 

## How to use this playbook

If you're new to Responsible AI, start with our introduction to responsible AI concepts [here](./responsibleai.md). Otherwise, feel free to jump directly into the different sections on testing and guardrails. For more advanced readers, our curated list of papers and tools [here](./resources.md) may be more suitable for you.

Given the rapid pace of developments in the AI space, we aim to update this playbook on a quarterly basis. Let us know if you spot any issues or have any feedback for the playbook through the feedback widget at the bottom of each page.

For generic solutions to quickly deploy applications with a base standard of safety, Singapore government users may refer to [AI Guardian](https://www.aiguardian.gov.sg/). For more customised solutions, feel free to reach out to our team at [GovTech's AI Practice (Responsible AI)](mailto:AiPractice@tech.gov.sg) for a more in-depth discussion.

## Contributions

This playbook is a living document that adapts to new insights, real-world challenges, and emerging practices. We welcome contributions as we work together to improve Responsible AI in the government. We particularly appreciate case studies which showcase the diverse needs of the public sector while highlighting the realities of deployment and implementation. 

If you would like to contribute, please [raise a pull request](https://github.com/govtech-responsibleai/playbook/pulls) and we will review it accordingly. Thank you!