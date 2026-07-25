---
sidebar_label: "[S] External resources"
sidebar_position: 10
---

# External Resources

:::info[What's changed in this release]

This page has been updated for the upcoming Responsible AI Playbook release. It now serves as a curated reading list across surveys, benchmarks, testing/red-teaming, guardrails, alignment, interpretability, agentic safety, and practitioner blogs. Summary of changes:

- Added an **Agentic Safety** section (Progent, prompt-injection design patterns).
- Refreshed Alignment, Interpretability, and Testing/Red-teaming entries with recent (2024–2025) work.
- Added new practitioner blogs and OpenAI's agentic-AI governance paper.

:::

This page collects influential papers, benchmarks, methods, repositories, and guides for deeper Responsible AI and AI safety work.

## Surveys

- [Open Problems and Fundamental Limitations of Reinforcement Learning from Human Feedback (Jul 2023)](https://arxiv.org/abs/2307.15217)
- [Siren's Song in the AI Ocean: A Survey on Hallucination in Large Language Models (Sep 2023)](https://arxiv.org/abs/2309.01219)
- [Open Problems in Mechanistic Interpretability (Jan 2025)](https://arxiv.org/abs/2501.16496)

## Benchmarks

- [Holistic Evaluation of Language Models](https://crfm.stanford.edu/helm/) - a reproducible and transparent framework for evaluating foundation models
- [Libra-Leaderboard: Towards Responsible AI through a Balanced Leaderboard of Safety and Capability (Dec 2024)](https://arxiv.org/pdf/2412.18551) - uses a distance-to-optimal-score method to calculate overall rankings, balancing performance and safety
- [DarkBench: Benchmarking Dark Patterns in Large Language Models (Mar 2025)](https://arxiv.org/abs/2503.10728) - benchmark to detect manipulative LLM outputs across six categories

## Testing and Red-Teaming

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

## Alignment

- [Training a Helpful and Harmless Assistant with Reinforcement Learning from Human Feedback (Apr 2022)](https://www.anthropic.com/research/training-a-helpful-and-harmless-assistant-with-reinforcement-learning-from-human-feedback)
- [Constitutional AI: Harmlessness from AI Feedback (Dec 2022)](https://www.anthropic.com/research/constitutional-ai-harmlessness-from-ai-feedback)
- [Inference-Time Intervention: Eliciting Truthful Answers from a Language Model (Jun 2023)](https://arxiv.org/pdf/2306.03341)
- [Refusal in Language Models Is Mediated by a Single Direction (Jun 2024)](https://arxiv.org/abs/2406.11717)
- [Safety Alignment Should Be Made More Than Just a Few Tokens Deep (Jun 2024)](https://arxiv.org/abs/2406.05946)
- [When Thinking Fails: The Pitfalls of Reasoning for Instruction-Following in LLMs (May 2025)](https://arxiv.org/abs/2505.11423)

## Interpretability

- [Scaling Monosemanticity: Extracting Interpretable Features from Claude 3 Sonnet (May 2024)](https://transformer-circuits.pub/2024/scaling-monosemanticity/index.html) - sparse autoencoders for interpretable features in model activations

## Agentic Safety

- [Progent: Programmable Privilege Control for LLM Agents (Apr 2025)](https://arxiv.org/abs/2504.11703) - privilege control policies for agent execution
- [Design Patterns for Securing LLM Agents against Prompt Injections (Jun 2025)](https://arxiv.org/abs/2506.08837) - design patterns for prompt-injection resistant agents

## Repositories

- [Awesome-LM-SSP](https://github.com/ThuCCSLab/Awesome-LM-SSP/tree/main) - reading list for safety, security, and privacy in large models
- [Awesome-LLM-Judges](https://github.com/haizelabs/Awesome-LLM-Judges) - research on using LLM judges for automated evaluation

## Blogs and Guides

- [Frequently Asked Questions (And Answers) About AI Evals](https://hamel.dev/blog/posts/evals-faq/) and [Your AI Product Needs Evals](https://hamel.dev/blog/posts/evals/) by Hamel Husain - practical tips on iterative evaluations for AI systems
- [Simon Willison's Weblog](https://simonwillison.net/) - practical writing on AI systems and prompt injection
- [OpenAI's Practices for Governing Agentic AI Systems](https://cdn.openai.com/papers/practices-for-governing-agentic-ai-systems.pdf) - recommendations and open questions for agentic AI systems
