---
sidebar_label: "Litmus"
sidebar_position: 2
---

# Litmus: automated safety and security testing for government AI systems


Litmus is a testing-as-a-service platform for AI safety and security testing, run by GovTech as part of [AI Guardian](https://www.aiguardian.gov.sg). It sends curated adversarial prompts at your AI system, scores the responses, and returns a report, either on demand through a web application or automatically from a CI/CD pipeline.

## When to use it

Manual safety testing does not scale with a system that changes frequently. You can hand-write adversarial prompts, read the responses, and write up findings before a launch, but rarely on every deployment. Testing then becomes a gate you pass once rather than a measurement you track, and a prompt change three months later goes out with no safety signal attached to it.

Litmus automates that loop. The same curated suites run on a schedule or on each commit, results are scored without a person reading every response, and successive runs accumulate into a trend you can compare rather than a series of disconnected reports.

Use it when your system is already built and needs recurring safety and security testing against a standard suite. It does not evaluate whether your system does its job well. For that, see [functional evals](../evaluating-ai-systems/functional.mdx) and [Kaleidoscope](kaleidoscope.md), which is the contextual evaluation module within Litmus.

## How it works

The following diagram shows how Litmus enhances the safety and security of an AI system with automated testing via CI/CD integration:

![How Litmus Works](/images/litmus.svg "How Litmus Works")

You register your application endpoint and select the suites to run. Litmus dispatches hundreds of curated prompts at that endpoint, collects the responses, scores them automatically, and generates a report. You can trigger the same run manually from the web application, on a schedule, or from a CI/CD job on each commit or deployment, with the report saved back to the pipeline.

## What it covers

| Capability | What it means in practice |
| --- | --- |
| Baseline safety and security suites | A sanctioned standard set of tests, shared across agencies |
| Automated execution | Scheduled runs, parallel execution, and generated reports |
| CI/CD integration | Tests triggered on commit or deployment, with reports written back to the pipeline |
| API access | Programmatic runs and result retrieval, if you are integrating with your own systems |
| Custom scenarios | Application-specific test cases alongside the baseline suites |
| Trend comparison | Results compared across runs rather than read in isolation |

Litmus runs as multi-tenant software-as-a-service built to government security standards, so onboarding does not require your agency to host or maintain testing infrastructure.

## Where it fits alongside other tools

Litmus tests a system; it does not defend one at runtime. A failing Litmus result tells you that a category of prompt gets through, but the fix is a change to your system, such as a guardrail, a prompt change, or a permission change. [Sentinel](sentinel.md) provides the runtime input and output guardrails that implement those defences. The two are designed to be used together: Litmus identifies which risks your system actually exhibits, and Sentinel mitigates them in production.

## Pitfalls

- **Treating a passing run as coverage.** The baseline suites test common, known risks. They are a floor rather than a description of everything your system can get wrong, and application-specific risks need custom scenarios.
- **Running it only before launch.** A single pre-launch run gives you no trend, which is most of the value.
- **Testing an endpoint that is not the production path.** Results describe whatever endpoint you registered. If guardrails sit in front of your production endpoint but not the tested one, the scores describe a system nobody uses.
- **Reading refusal rates without context.** A system that refuses everything scores well on safety suites while being unusable, so read safety results alongside [functional evals](../evaluating-ai-systems/functional.mdx).

## Onboarding

Litmus is available to public sector teams through [AI Guardian](https://www.aiguardian.gov.sg), which carries the current onboarding guide. The web application is at [litmus.aiguardian.gov.sg](https://litmus.aiguardian.gov.sg/login) and signs in with TechPass. For questions about access, contact [aiguardian@tech.gov.sg](mailto:aiguardian@tech.gov.sg).

## Where to go next

- [Safety evals](../evaluating-ai-systems/safety.mdx) — the methods Litmus automates, including a Litmus code example.
- [Kaleidoscope](kaleidoscope.md) — contextual, functional evaluation within Litmus.
- [Sentinel](sentinel.md) — runtime guardrails for the risks Litmus surfaces.
