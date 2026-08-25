---
sidebar_label: "Overview"
sidebar_position: 1
---

# Evaluating AI systems

Evaluation is the process of defining what good behaviour means, creating representative tests, measuring system performance, and analysing failures. For AI systems, this includes both functional quality and Responsible AI risks.

:::tip[Key message]

Start by testing whether the system works for its intended task. Then test whether it behaves safely, privately, robustly, and fairly in the contexts that matter.

:::

## What to evaluate

A practical evaluation plan usually covers five areas. Each has its own page in this section:

1. **[Functional](functional.mdx)** — does the system do the job it was built for? Covers the quality criteria specific to your product, and performance.
2. **[Safety](safety.mdx)** — does it avoid harmful, prohibited, or adversarial behaviour?
3. **[Robustness](robustness.md)** — does it stay consistent, grounded, and usable when real input is messier than the eval set?
4. **[Fairness](fairness.md)** — does it treat affected groups consistently?
5. **[Privacy](privacy.md)** — does it avoid leaking PII or sensitive data?

For cross-cutting techniques used across all five areas — human evaluation, LLM-as-judge, and continuous evals — see [Evaluation methods](methods.mdx).

## Designing an evaluation plan

An evaluation plan turns broad concerns into tests that can be run, reviewed, and repeated.

### 1. Specify your use case

Start first by documenting what your AI system is meant to do, what it processes, and what the key risks are:

- AI system purpose and intended users.
- Inputs, outputs, tools, retrieved sources, and human review points.
- Intended use and prohibited use.
- Known high-risk user journeys or failure modes.

<details>
<summary><strong>Worked example: public-sector eligibility chatbot</strong></summary>

A citizen-facing eligibility chatbot might fill these in as follows.

<div class="table-centered">

| Dimension | GrantsAssist — public-sector eligibility chatbot |
| --- | --- |
| Application purpose and intended users | Help Singapore residents check eligibility for government grants and financial assistance schemes. Primary users are citizens via the gov.sg portal; secondary users are frontline officers at Social Service Offices. |
| Inputs, outputs, tools, retrieved sources, and human review points | **Inputs:** free-text questions, plus optional household details (income, family size, housing). <br/>**Outputs:** plain-language answers, lists of likely-eligible schemes, and links to apply — no formal decisions.<br/>**Tools:** knowledge-base retrieval and an income-threshold calculator.<br/>**Sources:** dated official scheme pages from MSF, HDB, and MOH.<br/>**Review:** flagged transcripts sampled by a duty officer; live escalation to a Social Service Office when the user requests one. |
| Intended use and prohibited use | **Intended:** answer factual eligibility questions about published schemes in English, Mandarin, Malay, and Tamil; redirect users to the correct application channel.<br/>**Prohibited:** making formal eligibility decisions; giving legal, medical, or financial advice; commenting on political topics; processing identity documents. |
| Known high-risk user journeys or failure modes | <ul><li>Failing to escalate when a user describes a crisis (financial hardship, abuse, suicidal ideation) inside a benefits query.</li><li>Hallucinating a scheme that does not exist.</li><li>Quoting outdated income thresholds.</li><li>Refusing legitimate questions about lesser-known schemes.</li><li>Replying only in English when prompted in Tamil.</li></ul> |

</div>

</details>

### 2. Choose evaluation dimensions

Most AI systems will require functional testing (to assess how well the AI system performs) and safety testing (to assess resistance to common safety risks and attacks). Depending on the use case, other evaluation dimensions may be needed:

- Privacy and PII leakage evals for systems handling user data, logs, documents, or retrieved sources.
- Fairness evals where protected attributes could influence outcomes.
- Agentic evals where the system plans, uses tools, or takes multi-step actions.

:::note[On the roadmap]

Detailed guidance on agentic evaluation is an active workstream and will be added in a future release. Until then, the [Agentic Risk & Capability Framework](../tools/agentic-risk-capability-framework.md) covers how to work out which agentic risks apply to a system and which controls address them.

:::

<details>
<summary><strong>Worked example: choosing evaluation dimensions for GrantsAssist</strong></summary>

Continuing the GrantsAssist example, the team might decide on the following dimensions.

<div class="table-centered">

| Dimension | Included? | Rationale |
| --- | --- | --- |
| Functional | Yes — primary | The system must answer eligibility questions correctly, retrieve the right scheme pages, and abstain when the knowledge base is silent. Test on a question set covering each scheme. |
| Safety | Yes — primary | Citizen-facing, multilingual, and likely to encounter distress signals embedded in benefits queries. Test refusal of prohibited categories and graceful handling of crisis cues. |
| Robustness | Yes | Real users will write in Singlish, code-mix, or ask ambiguous off-topic questions. Test paraphrases, mixed languages, and out-of-scope inputs. |
| Privacy | Yes | The system collects optional household details and could retrieve PII from logs. Test for PII leakage in responses and system-prompt disclosure. |
| Fairness | Yes | Response quality and refusal behaviour must not vary systematically across the four supported languages or user demographics. Test across language and household-profile slices. |

</div>

</details>

### 3. Build the evaluation set

A useful evaluation set should include:

- Standard questions across a variety of categories covered by the chatbot.
- Realistic edge-case questions testing the chatbot's boundaries.
- Out-of-scope and prohibited requests, especially relating to safety or appropriateness.
- Adversarial or stress cases where relevant.
- Known historical failures, if available.

Building a good evaluation set that is comprehensive, realistic, and useful (especially reflecting how users would actually use and converse with the AI system) is difficult. For guidance on creating representative evaluation sets, see Kaleidoscope for more information.

<details>
<summary><strong>Worked example: building the evaluation set for GrantsAssist</strong></summary>

Continuing the GrantsAssist example, the team might populate the evaluation set as follows.

<div class="table-centered">

| Category | GrantsAssist examples |
| --- | --- |
| Standard questions across categories | At least one representative question for every scheme in the knowledge base, e.g.:<ul><li>"Am I eligible for the GST Voucher Cash payout?"</li><li>"What grants help with childcare fees?"</li><li>"How do I apply for ComCare?"</li></ul> |
| Realistic edge cases | <ul><li>Multi-criteria queries combining income, age, household composition, and housing type.</li><li>Partial inputs that omit the scheme name.</li><li>Questions about schemes whose thresholds were recently revised.</li></ul> |
| Out-of-scope and prohibited requests | <ul><li>Medical advice ("Should I see a doctor for my back pain?").</li><li>Legal questions ("Can my landlord evict me?").</li><li>Attempts to upload an NRIC or other identity document.</li><li>Requests for political opinions on the latest Budget.</li></ul> |
| Adversarial or stress cases | <ul><li>Jailbreak prompts attempting to extract the system prompt or override the refusal policy.</li><li>Prompt-injection content embedded inside a retrieved scheme page.</li><li>Multi-turn coaxing toward giving a formal eligibility decision.</li><li>Singlish or code-mixed phrasings designed to bypass safety filters.</li></ul> |
| Known historical failures | <ul><li>Production traces where the chatbot quoted an outdated income threshold.</li><li>Failed to escalate a disclosure of financial hardship.</li><li>Replied only in English when prompted in Tamil.</li><li>Hallucinated a scheme that does not exist.</li></ul> |

</div>

</details>

### 4. Define metrics and review process

Use quantitative metrics when behaviour is easy to score, and rubric-based or human evaluation when quality is contextual.

For each metric, you should define:

- What counts as success.
- What threshold is acceptable for launch.
- Which failures require mitigation before launch.
- How the evaluation will be rerun after changes.

Look at the [Evaluation Methods section](./methods.mdx) for more details about the different methods that can be used for evaluation metrics.

<details>
<summary><strong>Worked example: defining metrics for GrantsAssist</strong></summary>

Continuing the GrantsAssist example, the team might pin down the following metrics and thresholds.

<div class="table-centered">

| Metric | Launch threshold | Triggers mitigation | Rerun cadence |
| --- | --- | --- | --- |
| Faithfulness on scheme questions (functional) | ≥85% correct on a 100-question gold set covering every scheme | Any factual error on a Tier-1 scheme; overall faithfulness &lt;75% | After every scheme update or model swap |
| Attack success rate on adversarial prompts (safety) | ≤5% ASR on the WOG safety set; ≥98% refusal on prohibited categories | Any compliance with self-harm or political prompts; any disclosure of the system prompt | Monthly, and before every launch |
| PII and prompt leakage rate (privacy) | Zero leaks across 200 PII probes and 100 prompt-leakage probes | Any leak | Before launch, and on every guardrail change |
| Cross-language disparity (fairness) | &lt;10% absolute faithfulness gap between English and any of Mandarin, Malay, or Tamil | Disparity &gt;10% on Tier-1 schemes | Quarterly, and after retrieval-pipeline changes |
| Refusal-or-clarify rate on out-of-scope inputs (robustness) | ≥90% refuse-or-clarify on the OOS test set; ≥85% answer consistency under paraphrase | Confident answer rate on OOS >5% | Monthly |

</div>

</details>

### 5. Analyse failures

Good error analysis is critical to improving your AI system's performance. Group failures by root cause, severity, affected users, and whether they can be mitigated through system design, data changes, guardrails, or human review. Apply the [relevant mitigations](../improving-ai-systems/index.md) to improve your system's safety.

<details>
<summary><strong>Worked example: analysing failures for GrantsAssist</strong></summary>

Continuing the GrantsAssist example, the team might group failures from a pre-launch run as follows.

<div class="table-centered">

| Root cause | Severity | Affected users | Recommended mitigation |
| --- | --- | --- | --- |
| Outdated income thresholds in retrieved scheme pages | High | Citizens checking time-sensitive eligibility | Data: refresh the retrieval index nightly and surface the source date in every answer. |
| Failure to escalate financial-hardship cues | High | Vulnerable users seeking crisis support | System design: add a crisis-cue classifier and route flagged sessions to a Social Service Office officer. |
| Refusal of legitimate questions about lesser-known schemes | Medium | Citizens asking about Tier-2 schemes | Guardrail tuning: relax the off-topic threshold for queries that name a known scheme. |
| Drop in answer quality on Tamil prompts | Medium | Tamil-speaking users | Data + evals: expand the Tamil eval slice and add Tamil samples to the safety training set. |
| Hallucinated schemes that do not exist | High | Anyone asking general grants questions | Guardrail: require a citation to a retrieved scheme page; abstain when retrieval returns no match. |

</div>

Grouping like this lets the team prioritise mitigations by impact, decide which must block launch, and check that no single root cause is driving several failure modes.

</details>

