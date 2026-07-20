---
sidebar_label: "Fairness improvements"
sidebar_position: 4
---

# Fairness Improvements

Fairness improvements reduce systematic differences in how the system performs across groups or attributes. Unlike safety or privacy, fairness rarely has a single guardrail you can drop in — the work is usually in the data, the evaluation pipeline, and the deployment policy.

## Where to intervene

Fairness interventions are typically grouped into three stages:

| Stage | Approach |
| --- | --- |
| Pre-processing | Curate training and evaluation data to cover protected groups, languages, and dialects; rebalance under-represented slices; remove biased labels. |
| In-processing | Use fine-tuning, alignment, or constraint-based training to reduce disparate behaviour; choose model variants with better cross-group performance. |
| Post-processing | Apply output adjustments (rerankers, threshold per group, refusal templates); add equitable defaults for ambiguous inputs. |

## Operational practices

- Run fairness evaluations as a standing eval set, not a one-off pre-launch check. See [Fairness evals](../evaluating-ai-systems/fairness.md).
- Disaggregate production metrics by group where consent and policy allow.
- Document any group-specific thresholds or defaults so reviewers can see the trade-offs being made.

## Where to go next

- [Fairness evals](../evaluating-ai-systems/fairness.md)
