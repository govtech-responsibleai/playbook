---
hide:
  - navigation
  - toc
---

<div class="home-hero">
  <div class="home-hero-content">
    <h1 class="playbook-title">Responsible AI Playbook</h1>
    <p class="playbook-tagline">Technical guidance for defining, evaluating, and mitigating <span class="typed-wrapper"><span class="typed-areas"></span><span class="typed-caret">|</span></span>risks in AI systems</p>
  </div>
</div>

## About This Playbook

The Responsible AI Playbook helps technical teams understand and apply Responsible AI through practical evaluation and safety work. We break this down into three main tasks:

1. **Define** what the system is meant to do, what it must not do, and what minimum checks are expected before launch.
2. **Evaluate** whether the system works, where it fails, and whether it introduces safety, privacy, robustness, or fairness risks.
3. **Mitigate** those risks using guardrails, system design choices, operational controls, and human review where appropriate.

## What's New

The playbook has been reorganized around a practitioner workflow:

- [Defining Risks](defining-risks/index.md): scope intended use, prohibited use, application risk profiles, risk categories, and launch criteria.
- [Evaluating Risks](evaluating-risks/index.md): design evaluation plans and test functional quality, safety, robustness, fairness, and privacy.
- [Mitigating Risks](mitigating-risks/index.md): choose guardrails and other mitigations based on evaluated failure modes.
- [Agentic AI](agentic-ai/what-makes-agentic.md): identify agentic capabilities, evaluate tool use and planning, and apply safety controls.
- [Tools & Benchmarks](tools/index.md): find GovTech tools, benchmarks, and reusable templates.

If you are not sure where to start, use [Choose your path](start-here/choose-your-path.md).

## Our Target Audience

This playbook is primarily meant for **technical practitioners** who want to understand Responsible AI concepts, tools, and methodologies from an implementation perspective. That includes application developers, data scientists, machine learning engineers, AI engineers, and technical product teams who need to define, evaluate, and mitigate risks in AI systems.

Although the playbook is written with Singapore's public sector context in mind, most explanations and recommendations should be useful to anyone building, evaluating, or deploying AI applications responsibly.

## About Us

We are the Responsible AI team in GovTech Singapore's AI Practice. We develop deep technical capabilities in Responsible AI to improve how the Singapore government develops, evaluates, deploys, and monitors AI systems in a safe, trustworthy, and ethical manner. Our work focuses on applied research and experimentation on AI safety, fairness, interpretability, evaluation, and localized guardrails.

We benefit from open-source research and contribute back through projects such as [LionGuard 2](https://huggingface.co/collections/govtech/lionguard-673838d03777e5ccb1b0ac2f), [Kaleidoscope](https://github.com/govtech-responsibleai/kaleidoscope), the [Agentic Risk & Capability Framework](https://go.gov.sg/agentic-risk-capability), [MinorBench](https://huggingface.co/datasets/govtech/MinorBench), and [SEA-LION v2.1 SECURE](https://huggingface.co/collections/govtech/sea-lionv21-secure-67b6b427c4e5531c1b96199e). We also write accessible articles on [Medium](https://medium.com/dsaid-govtech).

## Contributions

This playbook is a living document that adapts to new insights, real-world challenges, and emerging practices. We welcome contributions as we work together to improve Responsible AI in the government.

Contributions are especially useful when they improve practitioner guidance: evaluation methods, safety testing approaches, guardrail patterns, templates, benchmarks, failure analyses, or case studies that show the realities of deployment and implementation.

You can contribute by opening an [issue](https://github.com/govtech-responsibleai/playbook/issues) or by submitting a [pull request](https://github.com/govtech-responsibleai/playbook/pulls).