---
sidebar_label: "External resources"
sidebar_position: 10
---

# External resources

:::info[What's new on this page]

Updated for this release: focus is narrowed to Responsible AI principles.

:::

This page lists resources for Responsible AI and AI safety. For general evaluation resources, see [Further reading in the Evaluation Playbook](https://playbooks.aip.gov.sg/evaluation-playbook/tools-resources/further-reading).

## Surveys

- [Open Problems in Mechanistic Interpretability (Jan 2025)](https://arxiv.org/abs/2501.16496)
- [Siren's Song in the AI Ocean: A Survey on Hallucination in Large Language Models (Sep 2023)](https://arxiv.org/abs/2309.01219)
- [Open Problems and Fundamental Limitations of Reinforcement Learning from Human Feedback (Jul 2023)](https://arxiv.org/abs/2307.15217)

## Benchmarks

- [Measuring what Matters: Construct Validity in Large Language Model Benchmarks (Nov 2025)](https://arxiv.org/abs/2511.04703) - reviews whether benchmarks measure the properties they claim to assess, with recommendations for selecting tasks and scoring methods.
- [DarkBench: Benchmarking Dark Patterns in Large Language Models (Mar 2025)](https://arxiv.org/abs/2503.10728) - benchmark to detect manipulative LLM outputs across six categories
- [Libra-Leaderboard: Towards Responsible AI through a Balanced Leaderboard of Safety and Capability (Dec 2024)](https://arxiv.org/pdf/2412.18551) - uses a distance-to-optimal-score method to calculate overall rankings, balancing performance and safety

## Testing and red-teaming

- [Petri (Oct 2025)](https://www.anthropic.com/research/petri-open-source-auditing) and [Bloom (Dec 2025)](https://alignment.anthropic.com/2025/bloom-auto-evals/) - open-source tools for automated behavioural evaluation. Petri explores model behaviour through conversations with simulated users and tools. Bloom generates scenarios to measure the frequency and severity of a specified behaviour.
- [AutoDAN-Turbo: A Lifelong Agent for Strategy Self-Exploration to Jailbreak LLMs (Oct 2024)](https://autodans.github.io/AutoDAN-Turbo/) - discovers and evolves attack strategies
- [Fishing for Magikarp: Automatically detecting under-trained tokens in large language models (May 2024)](https://aclanthology.org/2024.emnlp-main.649/) - automatic detection of problematic rare tokens
- [The Crescendo Multi-Turn LLM Jailbreak Attack (Apr 2024)](https://crescendo-the-multiturn-jailbreak.github.io/) - multi-turn attack that progressively steers a conversation toward a prohibited objective
- [AutoDAN: Generating Stealthy Jailbreak Prompts on Aligned Large Language Models (Oct 2023)](https://github.com/SheltonLiu-N/AutoDAN?tab=readme-ov-file) - generates stealthy jailbreak prompts using hierarchical genetic algorithms
- [GPTFUZZER: Red Teaming Large Language Models with Auto-Generated Jailbreak Prompts (Sep 2023)](https://github.com/sherdencooper/GPTFuzz) - automates generation of jailbreak templates
- [Universal and Transferable Adversarial Attacks on Aligned Language Models (Jul 2023)](https://github.com/llm-attacks/llm-attacks) - finds transferable adversarial suffixes
- [Red Teaming Language Models with Language Models (Feb 2022)](https://aclanthology.org/2022.emnlp-main.225.pdf) - generating red-teaming test cases with another language model

## Guardrails

- [Constitutional Classifiers: Defending against universal jailbreaks (Feb 2025)](https://www.anthropic.com/research/constitutional-classifiers) - input and output classifiers trained on synthetic data
- [Llama Guard: LLM-based Input-Output Safeguard for Human-AI Conversations (Dec 2023)](https://ai.meta.com/research/publications/llama-guard-llm-based-input-output-safeguard-for-human-ai-conversations/) - LLM-based input-output safeguard model

## Fairness

- [Fair prediction with disparate impact: A study of bias in recidivism prediction instruments (Oct 2016)](https://arxiv.org/abs/1610.07524) - shows the same incompatibility arising whenever prevalence differs across groups, using recidivism prediction as the worked case
- [Equality of Opportunity in Supervised Learning (Oct 2016)](https://arxiv.org/abs/1610.02413) - proposes equalised odds and equal opportunity, and shows how to adjust an existing predictor to satisfy them
- [Inherent Trade-Offs in the Fair Determination of Risk Scores (Sep 2016)](https://arxiv.org/abs/1609.05807) - proves that three common fairness conditions cannot be satisfied simultaneously except in highly constrained special cases
- [Fairness and Machine Learning: Limitations and Opportunities](https://fairmlbook.org) - free textbook by Barocas, Hardt, and Narayanan; chapter 3 sets out the formal non-discrimination criteria and the relationships between them
- [Fairlearn](https://fairlearn.org) - open-source Python library implementing group fairness metrics and mitigation algorithms, with example notebooks
- [AI Fairness 360](https://github.com/Trusted-AI/AIF360) - open-source toolkit with a wide set of fairness metrics and 13 bias-mitigation algorithms, available for Python and R

## Alignment

- [When Thinking Fails: The Pitfalls of Reasoning for Instruction-Following in LLMs (May 2025)](https://arxiv.org/abs/2505.11423)
- [Sycophancy in GPT-4o: what happened and what we're doing about it (Apr 2025)](https://openai.com/index/sycophancy-in-gpt-4o/) - explains how reliance on short-term user feedback led to excessive agreement and flattery, and describes OpenAI's rollback and planned changes to training and evaluation.
- [Refusal in Language Models Is Mediated by a Single Direction (Jun 2024)](https://arxiv.org/abs/2406.11717)
- [Safety Alignment Should Be Made More Than Just a Few Tokens Deep (Jun 2024)](https://arxiv.org/abs/2406.05946)
- [Inference-Time Intervention: Eliciting Truthful Answers from a Language Model (Jun 2023)](https://arxiv.org/pdf/2306.03341)
- [Constitutional AI: Harmlessness from AI Feedback (Dec 2022)](https://www.anthropic.com/research/constitutional-ai-harmlessness-from-ai-feedback)
- [Training a Helpful and Harmless Assistant with Reinforcement Learning from Human Feedback (Apr 2022)](https://www.anthropic.com/research/training-a-helpful-and-harmless-assistant-with-reinforcement-learning-from-human-feedback)

## Fine-tuning tooling

- [TRL](https://huggingface.co/docs/trl/index) - reference implementation for post-training, providing `SFTTrainer`, `DPOTrainer`, `RewardTrainer` and others, each documented with a runnable snippet
- [PEFT](https://huggingface.co/docs/peft/index) - parameter-efficient adapters (LoRA, QLoRA, DoRA and others) integrated with Transformers and TRL
- [Alignment Handbook](https://github.com/huggingface/alignment-handbook) - end-to-end YAML recipes covering continued pre-training, SFT, DPO, ORPO, reward modelling, and rejection sampling
- [Axolotl](https://github.com/axolotl-ai-cloud/axolotl) - configuration-driven fine-tuning across preprocessing, training, evaluation, and inference, with multi-GPU and multi-node support
- [Unsloth](https://github.com/unslothai/unsloth) - optimised LoRA and QLoRA training for a single GPU, with ready-to-run notebooks per model family
- [Llama Cookbook](https://github.com/meta-llama/llama-cookbook) - worked fine-tuning examples and a fine-tuning FAQ, oriented around Llama models

## Explainability and transparency {#interpretability}

- [Stealing Reasoning Traces from Proprietary LLM APIs (Aug 2026)](https://arxiv.org/abs/2608.09867) - examines how encrypted reasoning traces could be recovered through compatible models, exposing sensitive data and enabling hidden prompt injections. It discusses protections for reasoning traces stored by API clients.
- [Scaling Monosemanticity: Extracting Interpretable Features from Claude 3 Sonnet (May 2024)](https://transformer-circuits.pub/2024/scaling-monosemanticity/index.html) - sparse autoencoders for interpretable features in model activations

## Agentic safety

- [An alignment assessment of recent cybersecurity incidents (Sep 2026)](https://www.anthropic.com/research/alignment-assessment-cybersecurity-incidents) - examines four incidents involving unauthorised access to third-party systems during evaluations. Anthropic analyses biased reasoning, harmful actions taken to complete a task, and gaps in pre-release testing.
- [The Hugging Face incident and the road ahead (Aug 2026)](https://openai.com/index/hugging-face-incident-and-the-road-ahead/) - describes OpenAI's investigation of models bypassing isolation controls and accessing third-party systems during internal evaluations, with lessons for monitoring, containment, and incident response.
- [Design Patterns for Securing LLM Agents against Prompt Injections (Jun 2025)](https://arxiv.org/abs/2506.08837) - design patterns for prompt-injection resistant agents
- [Progent: Programmable Privilege Control for LLM Agents (Apr 2025)](https://arxiv.org/abs/2504.11703) - privilege control policies for agent execution
- [AgentDojo: A Dynamic Environment to Evaluate Prompt Injection Attacks and Defenses for LLM Agents (Jun 2024)](https://arxiv.org/abs/2406.13352) - provides an extensible environment for testing prompt injection attacks and defences in agents that use tools and process untrusted data.

## Repositories

- [Awesome-LM-SSP](https://github.com/ThuCCSLab/Awesome-LM-SSP/tree/main) - reading list for safety, security, and privacy in large models
- [Awesome Agent Evals: safety and adversarial evaluation](https://github.com/benchflow-ai/awesome-evals#10-safety-adversarial-evaluation-prompt-injection-jailbreaks-action-authorization-benchmark-auditing) - lists resources on prompt injection, jailbreaks, action authorisation, and benchmark auditing.

## Blogs and guides

- [Simon Willison's Weblog](https://simonwillison.net/) - practical writing on AI systems and prompt injection
- [OpenAI's Practices for Governing Agentic AI Systems](https://cdn.openai.com/papers/practices-for-governing-agentic-ai-systems.pdf) - recommendations and open questions for agentic AI systems
