# Agentic Risk Model

Agentic risk comes from the combination of model behavior, system design, tools, permissions, and operating context.

## Risk Sources

| Source | Examples |
| --- | --- |
| Component risks | Model errors, retrieval failures, tool bugs, memory corruption |
| Design risks | Excessive autonomy, unclear approval gates, poor fallback paths |
| Capability risks | Tool use, planning, delegation, memory, code execution, external actions |
| Context risks | Public exposure, sensitive data, high-impact decisions, vulnerable users |

## Capability-to-Control Mapping

For each capability, identify:

1. What the system can do.
2. What can go wrong.
3. Which evals are required.
4. Which controls are expected.
5. What readiness checks must pass before launch.

This section should connect to ARC work by making the capability assessment explicit and actionable.

## Agentic Risk and Capability Framework

!!! note "Agentic Risk & Capability Framework"

    The [Agentic Risk and Capability Framework](http://go.gov.sg/agentic-risk-capability) defines (i) baseline risks that apply to all agentic systems, and (ii) a hierarchical taxonomy of capability risks for specific capabilities a system may have. Each risk is then systematically tested and evaluated. The framework also maps each risk to a set of technical controls, with an example implementation.

## Frontier-Model Risks

*Coming soon — this section will cover frontier-model risks (deception, sandbagging, scheming) that are currently out of scope for most WOG systems but worth monitoring as model capabilities evolve.*
