---
sidebar_label: "Kaleidoscope"
sidebar_position: 1
---
# Kaleidoscope

**AI evaluation, human aligned.**

Evals are the process of measuring the abilities of an AI system to understand how well it performs and to improve it. Kaleidoscope is a contextual, functional evaluation module within Litmus. It helps teams build representative evaluation sets, define product-specific criteria, review outputs, and calibrate automated scoring.

![Kaleidoscope's evaluation workflow](/images/kaleidoscope-workflow.png)

## What is Kaleidoscope?

Systems can already test and safeguard their applications for safety through tools such as [Litmus](litmus.md) and [Sentinel](sentinel.md). Kaleidoscope goes beyond safety testing towards contextualised, functional evals: evaluating whether an AI application performs well for its intended users, tasks, and context.

In practice, teams often face challenges conducting evals. They require meaningful evaluation criteria, contextualised datasets, human alignment, and transparent automated scoring. Kaleidoscope helps to close that gap by offering an end-to-end workflow with the following features.

## Key features

1. **Define custom rubrics.** Define evaluation criteria in natural language with guided workflows.
2. **Generate diverse test sets.** Synthesise realistic, varied inputs using persona-driven generation.
3. **Streamline human review.** Purpose-built annotation and validation workflows designed to reduce reviewer fatigue.
4. **Calibrate LLM judges.** Score responses with LLM judges calibrated against human annotations.

Automated scores should not be used blindly, as judges come with their own biases and noise. A reliable eval workflow should include human review: reviewers label a subset of responses, and these labels are used to calculate judge reliability. Only reliable judges are kept for wider scoring. This minimises the manual effort needed from reviewers, while ensuring that scorers are calibrated to human judgments.

## Access

<div class="access-grid">

  <a class="access-card" href="https://arxiv.org/abs/2607.14673">
    <svg class="access-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/></svg>
    <strong>Paper</strong><span>Methodology and pilot results</span>
  </a>
  <a class="access-card" href="https://github.com/govtech-responsibleai/kaleidoscope">
    <svg class="access-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
    <strong>Repository</strong><span>Open-source repository</span>
  </a>
  <a class="access-card" href="https://govtech-responsibleai.github.io/kaleidoscope/">
    <svg class="access-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 7v14"/><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/></svg>
    <strong>Documentation</strong><span>Setup and configuration guides</span>
  </a>
  <a class="access-card" href="https://blog.ai.gov.sg/building-an-automated-evals-workflow-that-works-and-open-sourcing-it/">
    <svg class="access-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18h-5"/><path d="M18 14h-8"/><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M10 6h8v4h-8V6Z"/></svg>
    <strong>Blog</strong><span>Why we built Kaleidoscope</span>
  </a>

</div>

Try the open-sourced Kaleidoscope module today, or stay tuned for more updates to access it via [Litmus](litmus.md).