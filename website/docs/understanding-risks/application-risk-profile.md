---
sidebar_label: "Application risk profile"
sidebar_position: 3
---

# Application Risk Profile

:::info[About this page]

This page is new in the upcoming Responsible AI Playbook release. It walks through the risk-profile dimensions teams use to make testing and mitigation proportionate to deployment context. All content is new.

:::

The same model can have very different risks depending on where it is deployed. Build a simple risk profile before deciding what testing or mitigation is proportionate.

## Profile Dimensions

| Dimension | Questions to ask |
| --- | --- |
| Users | Is the system public-facing, internal, expert-facing, or used by vulnerable groups? |
| Task impact | Could errors affect access to services, legal status, finances, health, safety, or reputation? |
| Data | Does the system handle PII, sensitive data, internal documents, logs, or retrieved sources? |
| Autonomy | Does it only generate text, or can it call tools, write data, trigger workflows, or act externally? |
| Domain scope | Is the domain narrow and well-defined, or broad and ambiguous? |
| Human oversight | Are outputs reviewed before use, sampled after use, or sent directly to users? |
| Exposure | How many users may be affected, and how quickly can failures spread? |

## Suggested Risk Levels

Use a lightweight rating to guide depth of evaluation:

| Level | Description | Evaluation expectation |
| --- | --- | --- |
| Low | Internal, low-impact, no sensitive data, clear human review | Functional and basic safety testing |
| Medium | User-facing or handles sensitive context, but with limited autonomy | Functional, safety, privacy, robustness, and targeted mitigations |
| High | Public-facing, high-impact, sensitive data, or autonomous actions | Broader eval coverage, stronger controls, monitoring, and documented residual risks |

This is not a formal governance tiering system. It is a practical way to decide how much technical testing and mitigation is needed.
