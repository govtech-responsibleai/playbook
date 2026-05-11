# PII Guardrails

!!! info "About this page"

    This page is new in the upcoming Responsible AI Playbook release. It covers where PII appears, detection tools, possible actions, privacy-enhancing technologies, and a General/Sentinel code example. Unhighlighted sections are migrated from [Different Types of Guardrails: PII](https://playbooks.aip.gov.sg/responsibleai/guardrails/diff_guardrails/#2-personal-identifiable-information-pii). Teal-highlighted sections were contributed via the [`feat/privacy-additions`](https://github.com/govtech-responsibleai/playbook/tree/feat/privacy-additions) branch.

PII guardrails detect, redact, block, warn, log, or escalate content that may contain personal data. The goal is to avoid passing PII to LLMs unnecessarily, especially when the LLM is accessed via an external managed service.

<div class="privacy-additions" markdown>

We avoid passing both **direct identifiers** (names, emails) and **indirect identifiers** (postal codes, date of birth, gender, job titles) to LLMs. While indirect identifiers do not point to a specific person on their own, the advanced capabilities of LLMs pose an [increasing risk](https://arxiv.org/pdf/2310.07298) — they can piece such fragments together with other data to infer sensitive personal attributes.

</div>

## Where PII Can Appear

- User prompts.
- Model outputs.
- Retrieved documents.
- Tool arguments and tool results.
- Logs, traces, analytics, and feedback forms.

## Detection Tools

- **[Cloak](https://cloak.gov.sg)** — GovTech's dedicated internal service for comprehensive and localised PII detection (names, addresses, etc.). <mark class="privacy-additions">Beyond the standard PII types, Cloak also offers LLM-enabled custom entity detection to protect custom, domain-specific or localised entities unique to your use case.</mark> Direct integration with the Sentinel API is coming soon.
- **[Presidio](https://github.com/microsoft/presidio)** — open-source tool that identifies PII entities like names, phone numbers, addresses.
- **Custom regex patterns** — for basic PII detection of structured formats.

## Possible Actions

| Action | Use when |
| --- | --- |
| Redact or mask | The task can continue without the raw identifier |
| Block | The request should not proceed with personal data |
| Warn | The user should confirm or remove sensitive details |
| Log carefully | The team needs operational visibility without retaining unnecessary PII |
| Escalate | The request is high-impact or ambiguous |

## Privacy-Enhancing Technologies

<div class="privacy-additions" markdown>

To address privacy risks associated with data collection and model memorization, Privacy-Enhancing Technologies (PETs) serve as a crucial line of defense. They sit upstream of inference-time guardrails:

- **Synthetic Data Generation** — at the data level, allows organizations to train downstream models without exposing actual PII by creating artificial datasets that mirror the statistical properties of real-world data.
- **Differential Privacy** — applied during model training, introduces mathematically calibrated noise so the model learns broad statistical patterns without memorizing individual, sensitive records.
- **Federated Learning** — enables models to train on decentralized devices, keeping raw data localized and eliminating the risk of centralized data breaches.

For more information, see the [Mitigating Privacy Risks for RAI](https://go.gov.sg/mitigating-privacy-risks-for-rai) chapter in GovTech Data Practice's AI Privacy publication.

</div>

## Testing

Evaluate PII guardrails using [privacy and PII leakage evals](../evaluating-ai-systems/privacy.md). Include standard formats, free text, multilingual examples, copied documents, and adversarial requests to reveal personal data.

## Code Example

=== "General (Presidio)"

    ```python
    from presidio_analyzer import AnalyzerEngine
    from presidio_anonymizer import AnonymizerEngine

    analyzer = AnalyzerEngine()
    anonymizer = AnonymizerEngine()

    text = "John Tan, IC S1234567A, lives at Block 123 Toa Payoh."
    results = analyzer.analyze(text=text, language="en")

    redacted = anonymizer.anonymize(text=text, analyzer_results=results)
    print(redacted.text)
    # e.g. "<PERSON>, IC <ID>, lives at <LOCATION>."
    ```

=== "Sentinel (Cloak)"

    ```python
    # Coming soon — Sentinel + Cloak integration is on the roadmap.
    # See https://cloak.gov.sg for the standalone Cloak service.
    ```
