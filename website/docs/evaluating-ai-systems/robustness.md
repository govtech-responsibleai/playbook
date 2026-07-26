---
sidebar_label: "[L] Robustness evals"
sidebar_position: 4
---

# Robustness evals

:::info[What's new on this page]

New in this release: robustness is organised around three issue types — consistency, grounding, and input variation. Grounding, abstention, and hallucination testing has moved here from [Functional evals](functional.mdx). Includes out-of-context reliability and KnowOrNot.

:::

Robustness evals ask whether the system still behaves the way you specified once it meets real users. We treat robustness as **non-malicious failure**: the input is not an attack, it is just messier, vaguer, or further from your eval set than you planned for.

That boundary matters. Someone deliberately engineering a prompt to bypass a refusal is a safety concern — see [Safety evals](safety.mdx). Someone typing a genuine question in Singlish at 2am and getting a confidently wrong answer is a robustness concern, and it will happen far more often.

This page groups robustness into three issue types. [Improving robustness](../improving-ai-systems/robustness-improvements.mdx) uses the same three, so a failure found here maps directly to a mitigation there.

| Issue | The question it asks | Typical failure |
| --- | --- | --- |
| Consistency | Does the system stay within its purpose, and agree with itself? | Answers an off-topic question; gives two different answers to the same question |
| Grounding | Is the answer supported by a source, and does it abstain when there is none? | Invents a scheme that does not exist; answers confidently when the knowledge base is silent |
| Input variation | Does quality hold when the phrasing is messy? | Correct in clean English, wrong in Singlish or with typos |

{/*
## Adversarial vs. distributional robustness

Coming soon — this section will cover the difference between adversarial
robustness (deliberate perturbations) and distributional robustness (natural
shift), and when each matters for an application.
*/}

## Consistency

Two directions, one idea: the system should hold a stable relationship to its own purpose, and to its own previous answers.

**Input against purpose.** Is what the user is asking consistent with what the system is for? An off-topic question is a consistency failure — the system's job is defined by its system prompt and its knowledge base, and a query outside that should be declined or redirected rather than improvised on.

**Output against output.** The same question, asked twice or asked two ways, should produce the same substantive answer. Where it does not, every other eval score you hold is partly noise: you measured one sample of a distribution and recorded it as the system's behaviour.

### What to test

For input against purpose:

- Clearly out-of-scope requests — medical, legal, or political questions put to a benefits chatbot.
- Near-misses that sound in-scope but are not: a scheme run by a different agency, or one that has been discontinued.
- **In-scope questions that superficially look off-topic** — obscure schemes, unusual phrasing, or a question that mentions an unrelated topic in passing. This is the half teams forget, and it is where over-blocking shows up.

For output against output:

- Five to ten paraphrases of the same question, including register shifts from formal to casual to terse.
- The same prompt run several times with no changes.
- The same question asked after several turns of unrelated conversation.

### How to score

Report off-topic handling as a **pair**, never as a single number:

- Refuse-or-redirect rate on the out-of-scope set.
- False-refusal rate on the in-scope set.

A system that refuses everything scores 100% on the first and is useless. The pair is the only honest summary.

For self-consistency, comparing whole responses is too brittle — wording varies harmlessly. Extract the material claim (the threshold, the eligibility verdict, the recommended action) and compare those instead. Report the proportion of paraphrases that agree with the modal answer.

:::warning[Common pitfall]

An over-blocking system usually looks excellent on a robustness dashboard, because refusal rate on out-of-scope input is the number that gets reported. Track false refusals with equal prominence. See [Threshold tuning](../improving-ai-systems/threshold-tuning.md).

:::

## Grounding

Two failures that look identical to the user and need completely different fixes.

- **Nothing to ground on.** The question is in scope, but the knowledge base does not cover it. The system should say so; instead it answers.
- **Something to ground on, ignored.** Retrieval worked and returned the right document, and the answer still is not supported by it.

### Out-of-context reliability

Retrieval-augmented generation (RAG) is one of the most common ways to reduce hallucination — additional context (via a knowledge base or other sources) is provided to the model to guide it to answer factually. RAG has a fundamental limitation: no knowledge base can anticipate every user input. As such, users will provide inputs that are out-of-knowledge-base. In such scenarios, the application's response matters: for high-stakes applications where information must be accurate (e.g. chatbots on government policies), the application is expected to recognise its lack of contextual information and abstain from answering.

Every application's out-of-context reliability scenarios will differ since each relies on a different knowledge base. The process of generating these test scenarios is similar across applications: leave a key piece of information out of the knowledge base, then assess how the application responds when given a query based on that information.

:::note[KnowOrNot]

Based on this testing methodology, [`KnowOrNot`](../tools/knowornot.md) generates out-of-knowledge-base queries and automatically assesses LLM applications' tendency to abstain accordingly. Details: [blog post](https://medium.com/dsaid-govtech/does-your-llm-know-when-to-say-i-dont-know-465b509505dc) and [paper](https://arxiv.org/abs/2505.13545).

:::

### What to test

- Out-of-knowledge-base questions, derived by removing content as described above.
- Answerable questions, as the over-abstention control — a system that abstains on everything is not grounded, it is broken.
- Ungrounded generation: for questions where retrieval succeeded, whether every claim in the answer is supported by what was retrieved.
- Citation support: whether the cited source actually says what it is cited for.
- Stale and conflicting sources: put two versions of a threshold in the knowledge base and see which one wins, and whether the conflict is surfaced at all.
- Questions that require combining several sources, where partial grounding is the likely failure.

### How to score

Score abstention as a pair, for the same reason as off-topic handling: correct-abstention rate on the out-of-knowledge-base set, alongside correct-answer rate on the answerable set.

Score faithfulness at claim level rather than answer level. Decompose each answer into atomic claims and check each against the retrieved context. Report both the proportion of claims supported and the proportion of answers with zero unsupported claims — an answer that is 90% supported and 10% invented is still a wrong answer, and an answer-level average hides that.

```python
# Illustrative: claim-level faithfulness check.
# Decompose the answer into atomic claims, then test each against the
# retrieved context rather than judging the answer as a whole.

JUDGE_MODEL = "your-pinned-judge-model-version"

def claim_is_supported(claim: str, context: str) -> bool:
    verdict = judge(
        model=JUDGE_MODEL,
        prompt=(
            "Does the context support the claim? Answer SUPPORTED, "
            "CONTRADICTED, or NOT_MENTIONED.\n\n"
            f"Context:\n{context}\n\nClaim:\n{claim}"
        ),
    )
    return verdict.strip() == "SUPPORTED"

def faithfulness(answer: str, context: str) -> dict:
    claims = decompose_into_claims(answer)  # one verifiable statement each
    if not claims:
        return {"claim_support_rate": 1.0, "fully_grounded": True}
    supported = [claim_is_supported(c, context) for c in claims]
    return {
        "claim_support_rate": sum(supported) / len(claims),
        "fully_grounded": all(supported),
    }
```

An output-side `govtech/hallucination` guardrail, which checks generated text against provided context, is listed as planned on [Sentinel](../tools/sentinel.md#available-guardrails).

:::warning[Common pitfall]

Teams measure faithfulness only on questions where retrieval succeeded, because those cases are the easiest to set up. The dangerous combination is poor retrieval followed by a confident answer, and it is invisible if you filter it out of the eval set.

:::

## Input variation

The question is in scope and the knowledge base covers it. The system still gets it wrong, because the phrasing looks nothing like your eval set.

### What to test

- Singlish and colloquial phrasing.
- Code-mixing across English, Mandarin, Malay, and Tamil, including romanised forms.
- Typos, missing punctuation, all caps, and run-together words.
- Voice-to-text artefacts: homophone errors, absent punctuation, filler words, and restarts.
- Very terse queries ("cpf top up limit ah") and very long ones — a pasted email with the real question buried in the fourth paragraph.
- Dates, currency, and numbers written in local conventions.

### How to score

Do not score this in absolute terms. Take questions the system already answers correctly in clean English, apply one perturbation at a time, and measure the **drop** against that baseline. Report per perturbation type, so you can tell whether the problem is Tamil, or typos, or length.

A workable launch bar is a maximum acceptable degradation — for example, no more than a 10 percentage-point drop in functional score under any single perturbation.

:::warning[Common pitfall]

LLM-generated Singlish is textbook Singlish, and real users do not write it. Source phrasings from production traces, from the channel the AI system is replacing (feedback forms, call transcripts), or from colleagues who speak the way your users do.

:::

## Building the eval set

- Reuse your functional eval set as the baseline. Robustness is largely measured as a delta against functional performance, so the two must share questions.
- Derive out-of-knowledge-base cases by removing content, not by inventing questions — see out-of-context reliability above.
- Take real phrasings from production traces once you have them. Before launch, borrow from whatever channel the AI system is replacing.
- Keep every case that has ever failed in production. It is the highest-value part of the set.

## Fixing what you find

Each issue type maps to a matching section on [Improving robustness](../improving-ai-systems/robustness-improvements.mdx):

- Consistency → off-topic guardrails and determinism controls.
- Grounding → knowledge-base hygiene, retrieval quality, abstention tuning, and citation enforcement.
- Input variation → normalisation, multilingual handling, and clarification prompts.

---

## Legacy content (remove before release)

:::warning[Not for readers]

Retained temporarily so the previous version can be checked against the rewrite. Delete this section before the release.

:::

Robustness evals check whether the application behaves consistently under realistic variation, ambiguity, and unexpected inputs. We treat robustness as **non-malicious failure modes** — whether applications handle real-world variability gracefully — rather than as resistance to deliberate attacks.

### What to test

- Out-of-scope queries.
- Out-of-knowledge-base queries.
- Ambiguous or underspecified requests.
- Noisy, misspelled, multilingual, or code-mixed inputs.
- Distribution shift from development examples to real user behaviour.
- Adversarial perturbations where relevant.

### Practical advice

Robustness evals should include both non-malicious variation and foreseeable misuse. For high-stakes applications, pay special attention to whether the system recognises uncertainty and abstains appropriately.

### Adversarial vs. distributional robustness

*Coming soon — this section will cover the difference between adversarial robustness (deliberate perturbations) and distributional robustness (natural shift), and when each matters for an application.*

### Out-of-context reliability

Retrieval-augmented generation (RAG) is one of the most common ways to reduce hallucination — additional context (via a knowledge base or other sources) is provided to the model to guide it to answer factually. RAG has a fundamental limitation: no knowledge base can anticipate every user input. As such, users will provide inputs that are out-of-knowledge-base. In such scenarios, the application's response matters: for high-stakes applications where information must be accurate (e.g. chatbots on government policies), the application is expected to recognise its lack of contextual information and abstain from answering.

Every application's out-of-context reliability scenarios will differ since each relies on a different knowledge base. The process of generating these test scenarios is similar across applications: leave a key piece of information out of the knowledge base, then assess how the application responds when given a query based on that information.

Based on this testing methodology, `KnowOrNot` generates out-of-knowledge-base queries and automatically assesses LLM applications' tendency to abstain accordingly. Details: [blog post](https://medium.com/dsaid-govtech/does-your-llm-know-when-to-say-i-dont-know-465b509505dc) and [paper](https://arxiv.org/abs/2505.13545).
