---
sidebar_label: "External resources"
sidebar_position: 10
---

# External resources

:::info[What's changed in this release]

This page has been updated for the upcoming Responsible AI Playbook release. It now serves as a curated reading list across surveys, benchmarks, testing/red-teaming, guardrails, fairness, alignment, finetuning tooling, interpretability, agentic safety, and practitioner blogs. Summary of changes:

- Added an **Agentic Safety** section (Progent, prompt-injection design patterns).
- Added a **Finetuning tooling** section (TRL, PEFT, Alignment Handbook, Axolotl, Unsloth, Llama Cookbook).
- Added a **Fairness** section covering the incompatibility results, the Barocas, Hardt, and Narayanan textbook, and the Fairlearn and AI Fairness 360 toolkits.
- Refreshed Alignment, Interpretability, and Testing/Red-teaming entries with recent (2024–2025) work.
- Added new practitioner blogs and OpenAI's agentic-AI governance paper.

:::

This page collects influential papers, benchmarks, methods, repositories, and guides for deeper Responsible AI and AI safety work.

## Surveys

- [Open Problems and Fundamental Limitations of Reinforcement Learning from Human Feedback (Jul 2023)](https://arxiv.org/abs/2307.15217)
- [Siren's Song in the AI Ocean: A Survey on Hallucination in Large Language Models (Sep 2023)](https://arxiv.org/abs/2309.01219)
- [Open Problems in Mechanistic Interpretability (Jan 2025)](https://arxiv.org/abs/2501.16496)
- [A Survey on LLM-as-a-Judge (Nov 2024)](https://arxiv.org/abs/2411.15594) - a comprehensive review of building reliable systems that use LLMs as evaluators

## Benchmarks

- [Holistic Evaluation of Language Models](https://crfm.stanford.edu/helm/) - a reproducible and transparent framework for evaluating foundation models
- [Libra-Leaderboard: Towards Responsible AI through a Balanced Leaderboard of Safety and Capability (Dec 2024)](https://arxiv.org/pdf/2412.18551) - uses a distance-to-optimal-score method to calculate overall rankings, balancing performance and safety
- [DarkBench: Benchmarking Dark Patterns in Large Language Models (Mar 2025)](https://arxiv.org/abs/2503.10728) - benchmark to detect manipulative LLM outputs across six categories

## Testing and red-teaming

- [Red Teaming Language Models with Language Models (Feb 2022)](https://aclanthology.org/2022.emnlp-main.225.pdf) - generating red-teaming test cases with another language model
- [Universal and Transferable Adversarial Attacks on Aligned Language Models (Jul 2023)](https://github.com/llm-attacks/llm-attacks) - finds transferable adversarial suffixes
- [GPTFUZZER: Red Teaming Large Language Models with Auto-Generated Jailbreak Prompts (Sep 2023)](https://github.com/sherdencooper/GPTFuzz) - automates generation of jailbreak templates
- [AutoDAN: Generating Stealthy Jailbreak Prompts on Aligned Large Language Models (Oct 2023)](https://github.com/SheltonLiu-N/AutoDAN?tab=readme-ov-file) - generates stealthy jailbreak prompts using hierarchical genetic algorithms
- [The Crescendo Multi-Turn LLM Jailbreak Attack (Apr 2024)](https://crescendo-the-multiturn-jailbreak.github.io/) - multi-turn attack that progressively steers a conversation toward a prohibited objective
- [Fishing for Magikarp: Automatically detecting under-trained tokens in large language models (May 2024)](https://aclanthology.org/2024.emnlp-main.649/) - automatic detection of problematic rare tokens
- [Scaling Synthetic Data Creation with 1,000,000,000 Personas (Jun 2024)](https://github.com/tencent-ailab/persona-hub) - personas for synthetic testing data generation
- [AutoDAN-Turbo: A Lifelong Agent for Strategy Self-Exploration to Jailbreak LLMs (Oct 2024)](https://autodans.github.io/AutoDAN-Turbo/) - discovers and evolves attack strategies

## Guardrails

- [Llama Guard: LLM-based Input-Output Safeguard for Human-AI Conversations (Dec 2023)](https://ai.meta.com/research/publications/llama-guard-llm-based-input-output-safeguard-for-human-ai-conversations/) - LLM-based input-output safeguard model
- [Constitutional Classifiers: Defending against universal jailbreaks](https://www.anthropic.com/research/constitutional-classifiers) - input and output classifiers trained on synthetic data

## Fairness

- [Inherent Trade-Offs in the Fair Determination of Risk Scores (Sep 2016)](https://arxiv.org/abs/1609.05807) - proves that three common fairness conditions cannot be satisfied simultaneously except in highly constrained special cases
- [Fair prediction with disparate impact: A study of bias in recidivism prediction instruments (Oct 2016)](https://arxiv.org/abs/1610.07524) - shows the same incompatibility arising whenever prevalence differs across groups, using recidivism prediction as the worked case
- [Equality of Opportunity in Supervised Learning (Oct 2016)](https://arxiv.org/abs/1610.02413) - proposes equalised odds and equal opportunity, and shows how to adjust an existing predictor to satisfy them
- [Fairness and Machine Learning: Limitations and Opportunities](https://fairmlbook.org) - free textbook by Barocas, Hardt, and Narayanan; chapter 3 sets out the formal non-discrimination criteria and the relationships between them
- [Fairlearn](https://fairlearn.org) - open-source Python library implementing group fairness metrics and mitigation algorithms, with example notebooks
- [AI Fairness 360](https://github.com/Trusted-AI/AIF360) - open-source toolkit with a wide set of fairness metrics and 13 bias-mitigation algorithms, available for Python and R

## Alignment

- [Training a Helpful and Harmless Assistant with Reinforcement Learning from Human Feedback (Apr 2022)](https://www.anthropic.com/research/training-a-helpful-and-harmless-assistant-with-reinforcement-learning-from-human-feedback)
- [Constitutional AI: Harmlessness from AI Feedback (Dec 2022)](https://www.anthropic.com/research/constitutional-ai-harmlessness-from-ai-feedback)
- [Inference-Time Intervention: Eliciting Truthful Answers from a Language Model (Jun 2023)](https://arxiv.org/pdf/2306.03341)
- [Refusal in Language Models Is Mediated by a Single Direction (Jun 2024)](https://arxiv.org/abs/2406.11717)
- [Safety Alignment Should Be Made More Than Just a Few Tokens Deep (Jun 2024)](https://arxiv.org/abs/2406.05946)
- [When Thinking Fails: The Pitfalls of Reasoning for Instruction-Following in LLMs (May 2025)](https://arxiv.org/abs/2505.11423)

## Finetuning tooling

- [TRL](https://huggingface.co/docs/trl/index) - reference implementation for post-training, providing `SFTTrainer`, `DPOTrainer`, `RewardTrainer` and others, each documented with a runnable snippet
- [PEFT](https://huggingface.co/docs/peft/index) - parameter-efficient adapters (LoRA, QLoRA, DoRA and others) integrated with Transformers and TRL
- [Alignment Handbook](https://github.com/huggingface/alignment-handbook) - end-to-end YAML recipes covering continued pre-training, SFT, DPO, ORPO, reward modelling, and rejection sampling
- [Axolotl](https://github.com/axolotl-ai-cloud/axolotl) - configuration-driven finetuning across preprocessing, training, evaluation, and inference, with multi-GPU and multi-node support
- [Unsloth](https://github.com/unslothai/unsloth) - optimised LoRA and QLoRA training for a single GPU, with ready-to-run notebooks per model family
- [Llama Cookbook](https://github.com/meta-llama/llama-cookbook) - worked finetuning examples and a finetuning FAQ, oriented around Llama models

## Interpretability

- [Scaling Monosemanticity: Extracting Interpretable Features from Claude 3 Sonnet (May 2024)](https://transformer-circuits.pub/2024/scaling-monosemanticity/index.html) - sparse autoencoders for interpretable features in model activations

## Agentic safety

- [Progent: Programmable Privilege Control for LLM Agents (Apr 2025)](https://arxiv.org/abs/2504.11703) - privilege control policies for agent execution
- [Design Patterns for Securing LLM Agents against Prompt Injections (Jun 2025)](https://arxiv.org/abs/2506.08837) - design patterns for prompt-injection resistant agents

## Repositories

- [Awesome-LM-SSP](https://github.com/ThuCCSLab/Awesome-LM-SSP/tree/main) - reading list for safety, security, and privacy in large models
- [Awesome-LLM-Judges](https://github.com/haizelabs/Awesome-LLM-Judges) - research on using LLM judges for automated evaluation
- [Awesome Agent Evals](https://github.com/benchflow-ai/awesome-evals) - curated resources for building and evaluating AI agents, including papers, tools, and benchmarks

## Blogs and guides

- [Frequently Asked Questions (And Answers) About AI Evals](https://hamel.dev/blog/posts/evals-faq/) and [Your AI Product Needs Evals](https://hamel.dev/blog/posts/evals/) by Hamel Husain - practical tips on iterative evaluations for AI systems
- [Simon Willison's Weblog](https://simonwillison.net/) - practical writing on AI systems and prompt injection
- [OpenAI's Practices for Governing Agentic AI Systems](https://cdn.openai.com/papers/practices-for-governing-agentic-ai-systems.pdf) - recommendations and open questions for agentic AI systems
