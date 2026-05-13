---
sidebar_label: "System-prompt leakage guardrails"
sidebar_position: 8
---

# System-Prompt Leakage Guardrails

:::info[About this page]

This page is new in the upcoming Responsible AI Playbook release. It covers what to test for, detection approaches, and the GovTech system-prompt leakage guardrail. Unhighlighted sections are migrated from the previously published [Guardrails developed by GovTech: System Prompt Leakage](https://playbooks.aip.gov.sg/responsibleai/guardrails/govtech/#system-prompt-leakage) and [Different Types of Guardrails: System-Prompt Leakage](https://playbooks.aip.gov.sg/responsibleai/guardrails/diff_guardrails/#5-system-prompt-leakage) pages; new prose is highlighted.

:::

System-prompt leakage occurs when the model reveals hidden instructions, policies, tool descriptions, or application details that should not be exposed.

A system prompt usually contains the rules an LLM must follow. Exposing it to users may reveal sensitive information or allow users to better manipulate the LLM's behaviour.

## What to Test

- Direct requests to reveal the system prompt.
- Rephrased or indirect requests.
- Multi-turn attempts to infer hidden instructions.
- Tool or retrieved-context prompts that ask the model to disclose instructions.

## Detection Approaches

- **Word overlap analysis** — keyword overlap between the system prompt and the model output.
- **Semantic similarity checks** — embedding-based similarity to catch paraphrased leakage.

## GovTech's System Prompt Leakage Guardrail

This output guardrail detects both direct leakages (exact or near-exact reproductions of the system prompt, often via simple word or phrase replacement) and indirect leakages — rephrasing key ideas in varied ways, using different sentence structures, or adding subtle context that reveals details embedded within the original system prompt.

Available via the [Sentinel API](../tools/sentinel.md#available-guardrails) (`govtech/system-prompt-leakage`).

## Mitigation Patterns

- Do not place secrets in system prompts.
- Detect and block direct leakage attempts.
- Check outputs for near-exact or paraphrased prompt leakage.
- Keep system instructions concise and non-sensitive.
- Separate confidential operational details from model-visible context.
