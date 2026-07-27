---
sidebar_label: "Kaleidoscope"
sidebar_position: 1
---
# Kaleidoscope

**AI evaluation, human aligned.**

Evals are the process of measuring the abilities of an AI system to understand how well it performs and to improve it. Kaleidoscope is a contextual, functional evaluation module within Litmus. It helps teams build representative evaluation sets, define product-specific criteria, review outputs, and calibrate automated scoring.

![Kaleidoscope's evaluation workflow](/images/kaleidoscope-workflow.png)

## What is Kaleidoscope?

Teams can already test and safeguard their applications for safety through tools such as [Litmus](litmus.md) and [Sentinel](sentinel.md). Kaleidoscope goes beyond safety testing towards contextualised, functional evals: evaluating whether an AI application performs well for its intended users, tasks, and context.

In practice, teams often face challenges conducting evals. They require meaningful evaluation criteria, contextualised datasets, human alignment, and transparent automated scoring. Kaleidoscope helps to close that gap by offering an end-to-end workflow with the following features.

## Key features

1. **Define custom rubrics.** Define evaluation criteria in natural language with guided workflows.
2. **Generate diverse test sets.** Synthesise realistic, varied inputs using persona-driven generation.
3. **Streamline human review.** Purpose-built annotation and validation workflows designed to reduce reviewer fatigue.
4. **Calibrate LLM judges.** Score responses with LLM judges calibrated against human annotations.

Automated scores should not be used blindly, as judges come with their own biases and noise. A reliable eval workflow should include human review: reviewers label a subset of responses, and these labels are used to calculate judge reliability. Only reliable judges are kept for wider scoring. This minimises the manual effort needed from reviewers, while ensuring that scorers are calibrated to human judgments.

## Access

<div class="access-grid">

  <a class="access-card access-card--paper" href="https://arxiv.org/abs/2607.14673"><strong>Paper</strong><span>Methodology and pilot results</span></a>
  <a class="access-card access-card--repo" href="https://github.com/govtech-responsibleai/kaleidoscope"><strong>Repository</strong><span>Open-source repository</span></a>
  <a class="access-card access-card--docs" href="https://govtech-responsibleai.github.io/kaleidoscope/"><strong>Documentation</strong><span>Setup and configuration guides</span></a>
  <a class="access-card access-card--blog" href="https://blog.ai.gov.sg/building-an-automated-evals-workflow-that-works-and-open-sourcing-it/"><strong>Blog</strong><span>Why we built Kaleidoscope</span></a>

</div>

Try the open-sourced Kaleidoscope module today, or stay tuned for more updates to access it via [Litmus](litmus.md).