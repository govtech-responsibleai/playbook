# Resources

In this page, we share some seminal, influential and innovative works that have made waves in the RAI space, as well as a short tldr on their impact and/or potential applications. 

## Surveys 


## Benchmarks
- [Libra-Leaderboard: Towards Responsible AI through a Balanced Leaderboard of Safety and Capability](https://arxiv.org/pdf/2412.18551) - uses a distance-to-optimal-score method to calculate the overall rankings of LLMs, balancing performance and safety

## Methodologies

### Testing and red-teaming
- [GPTFUZZER: Red Teaming Large Language Models with Auto-Generated Jailbreak Prompts](https://github.com/sherdencooper/GPTFuzz) - automates generation of jailbreak templates by starting with human-written templates as initial seeds, then mutating them to produce new templates with LLMs themselves
- [The Crescendo Multi-Turn LLM Jailbreak Attack](https://crescendo-the-multiturn-jailbreak.github.io/) - multi-turn attack that starts with harmless dialogue and progressively steers the conversation toward the intended, prohibited objective
- [Universal and Transferable Adversarial Attacks on Aligned Language Models](https://github.com/llm-attacks/llm-attacks) - finds a suffix that, when attached to a wide range of queries for an LLM to produce objectionable content, aims to maximize the probability that the model produces an affirmative response (rather than refusing to answer)
- [AutoDAN: Generating Stealthy Jailbreak Prompts on Aligned Large Language Models](https://github.com/SheltonLiu-N/AutoDAN?tab=readme-ov-file) - automatically generate stealthy jailbreak prompts using carefully designed hierarchical genetic algorithms
- [AutoDAN-Turbo: A Lifelong Agent for Strategy Self-Exploration to Jailbreak LLMs](https://autodans.github.io/AutoDAN-Turbo/) - Discovers, evolves, and stores attack strategies without human intervention, resulting in greater diversity of prompts 

## Repositories 

- [Awesome-LM-SSP](https://github.com/ThuCCSLab/Awesome-LM-SSP/tree/main) - Reading list for safety, security, and privacy in large models; maintained by researchers from Tsinghua University, HKSU, Xian Jiaotong University
- [Awesome-LLM-Judges](https://github.com/haizelabs/Awesome-LLM-Judges) - Research on using LLM judges for automated evaluation; maintained by Haize Labs

## Miscellaneous