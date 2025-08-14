# Resources

In this page, we share some seminal, influential and innovative works that have made waves in the RAI space, as well as a short tldr on their impact and/or potential applications. 

## Surveys
- [Open Problems and Fundamental Limitations of Reinforcement Learning from Human Feedback (Jul 2023)](https://arxiv.org/abs/2307.15217) 
- [Siren’s Song in the AI Ocean: A Survey on Hallucination in Large Language Models (Sep 2023)](https://arxiv.org/abs/2309.01219)
- [Open Problems in Mechanistic Interpretability (Jan 2025)](https://arxiv.org/abs/2501.16496)

## Benchmarks
- [Holistic Evaluation of Language Models](https://crfm.stanford.edu/helm/) - a reproducible and transparent framework for evaluating foundation models
- [Libra-Leaderboard: Towards Responsible AI through a Balanced Leaderboard of Safety and Capability (Dec 2024)](https://arxiv.org/pdf/2412.18551) - uses a distance-to-optimal-score method to calculate the overall rankings of LLMs, balancing performance and safety
- [DarkBench: Benchmarking Dark Patterns in Large Language Models (Mar 2025)](https://arxiv.org/abs/2503.10728) - benchmark to detect manipulative, insidious LLM outputs that influence user behavior on six categories: brand bias, user retention, sycophancy, anthropomorphism, harmful generation and sneaking

## Methodologies

### Testing and red-teaming
- [Red Teaming Language Models with Language Models (Feb 2022)](https://aclanthology.org/2022.emnlp-main.225.pdf) - generating red-teaming test cases with another LM
- [GPTFUZZER: Red Teaming Large Language Models with Auto-Generated Jailbreak Prompts (Sep 2023)](https://github.com/sherdencooper/GPTFuzz) - automates generation of jailbreak templates by starting with human-written templates as initial seeds, then mutating them to produce new templates with LLMs themselves
- [AutoDAN: Generating Stealthy Jailbreak Prompts on Aligned Large Language Models (Oct 2023)](https://github.com/SheltonLiu-N/AutoDAN?tab=readme-ov-file) - automatically generate stealthy jailbreak prompts using carefully designed hierarchical genetic algorithms
- [Universal and Transferable Adversarial Attacks on Aligned Language Models (Dec 2023)](https://github.com/llm-attacks/llm-attacks) - finds a suffix that, when attached to a wide range of queries for an LLM to produce objectionable content, aims to maximize the probability that the model produces an affirmative response (rather than refusing to answer)
- [The Crescendo Multi-Turn LLM Jailbreak Attack (Apr 2024)](https://crescendo-the-multiturn-jailbreak.github.io/) - multi-turn attack that starts with harmless dialogue and progressively steers the conversation toward the intended, prohibited objective
- [Fishing for Magikarp: Automatically detecting under-trained tokens in large language models (May 2024)](https://aclanthology.org/2024.emnlp-main.649/) - automatic detection of problematic, rare tokens that allow for jailbreaking
- [Scaling Synthetic Data Creation with 1,000,000,000 Personas (Jun 2024)](https://github.com/tencent-ailab/persona-hub) - collection of diverse personas to facilitate the generation of testing data
- [AutoDAN-Turbo: A Lifelong Agent for Strategy Self-Exploration to Jailbreak LLMs (Oct 2024)](https://autodans.github.io/AutoDAN-Turbo/) - Discovers, evolves, and stores attack strategies without human intervention, resulting in greater diversity of prompts 

### Guardrails
- [Llama Guard: LLM-based Input-Output Safeguard for Human-AI Conversations (Dec 2023)](https://ai.meta.com/research/publications/llama-guard-llm-based-input-output-safeguard-for-human-ai-conversations/) - LLM-based input-output safeguard model geared towards Human-AI conversation use cases
- [Constitutional Classifiers: Defending against universal jailbreaks](https://www.anthropic.com/research/constitutional-classifiers) - input and output classifiers trained on synthetically generated data that filter the overwhelming majority of jailbreaks with minimal over-refusals and without incurring a large compute overhead

### Alignment
- [Training a Helpful and Harmless Assistant with Reinforcement Learning from Human Feedback (Apr 2022)](https://www.anthropic.com/research/training-a-helpful-and-harmless-assistant-with-reinforcement-learning-from-human-feedback) - first few papers on using RLHF to finetune language models to act as helpful and harmless assistants, discussing the helpful-harmful trade-off
- [Constitutional AI: Harmlessness from AI Feedback (Dec 2022)](https://www.anthropic.com/research/constitutional-ai-harmlessness-from-ai-feedback) - using LLMs (i.e., RLAIF) to provide feedback based on a pre-defined constitution
- [Inference-Time Intervention: Eliciting Truthful Answers from a Language Model (Jun 2023)](https://arxiv.org/pdf/2306.03341) - shift model activations during inference, following a set of directions across a limited number of attention head, to enhance "truthfulness" of LLMs
- [Refusal in Language Models Is Mediated by a Single Direction (Jun 2024)](https://arxiv.org/abs/2406.11717) - a one-dimensional subspace can be erased from models' residual stream activations to prevent them from refusing harmful instructions, while adding this direction elicits refusal on even harmless instructions
- [When Thinking Fails: The Pitfalls of Reasoning for Instruction-Following in LLMs (May 2025)](https://arxiv.org/abs/2505.11423) - as reasoning can degrade instruction-following, selective reasoning strategies can help to mitigate the effects
- [Safety Alignment Should Be Made More Than Just a Few Tokens Deep (Jun 2025)](https://arxiv.org/abs/2406.05946) - safety alignment is shalow, adapting the model's generative distribution primarily only over its first few output tokens, resulting in susceptibility to adversarial attacks

### Interpretability
- [Scaling Monosemanticity: Extracting Interpretable Features from Claude 3 Sonnet (May 2024)](https://transformer-circuits.pub/2024/scaling-monosemanticity/index.html) - using sparse autoencoders to extract interpretable features from the activations of Claude and finding many generally interpretable and monosemantic fearures that are safety-relevant

### Agentic Safety
- [Progent: Programmable Privilege Control for LLM Agents (Apr 2025)](https://arxiv.org/abs/2504.11703) - a domain-specific language for flexibly expressing privilege control policies applied during agent execution
- [Design Patterns for Securing LLM Agents against Prompt Injections (Jun 2025)](https://arxiv.org/abs/2506.08837) - principled design patterns for building AI agents with provable resistance to prompt injection

## Repositories 
- [Awesome-LM-SSP](https://github.com/ThuCCSLab/Awesome-LM-SSP/tree/main) - Reading list for safety, security, and privacy in large models; maintained by researchers from Tsinghua University, HKSU, Xian Jiaotong University
- [Awesome-LLM-Judges](https://github.com/haizelabs/Awesome-LLM-Judges) - Research on using LLM judges for automated evaluation; maintained by Haize Labs

## Blogs / Guides
- [Frequently Asked Questions (And Answers) About AI Evals](https://hamel.dev/blog/posts/evals-faq/) and [Your AI Product Needs Evals](https://hamel.dev/blog/posts/evals/) by Hamel Husain - excellent, practical tips on conducting iterative evaluations for AI applications
- [Simon Willison's Weblog](https://simonwillison.net/) - first-hand experiences tinkering with SOTA AI, and thinkpieces on prompt injections
- [OpenAI's Practices for Governing Agentic AI Systems](https://cdn.openai.com/papers/practices-for-governing-agentic-ai-systems.pdf) - recommendations and open questions on how to govern agentic AI systems