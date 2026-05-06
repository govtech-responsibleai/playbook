# Guardrails and Mitigations

Guardrails are one kind of mitigation, but not every mitigation is a guardrail. AI safety work may also require UX changes, retrieval constraints, access controls, prompt design, tool permissioning, human review, logging, rate limits, and operational controls.

!!! success "Key message"
    Choose mitigations based on evaluated failure modes. Do not add guardrails just because they are available.

## Common Mitigation Types

| Mitigation | Use when |
| --- | --- |
| Input guardrails | Risky requests should be blocked, warned, rewritten, or escalated before model execution |
| Output guardrails | Generated responses may contain unsafe, private, irrelevant, or unsupported content |
| Retrieval constraints | Retrieved context may be irrelevant, stale, sensitive, or unauthorized |
| Tool-use controls | A system can take actions or access systems beyond text generation |
| UX and policy design | Users need clearer expectations, warnings, consent, or escalation paths |
| Human review | Errors are high-impact or hard to classify automatically |
| Monitoring and logging | Risks must be detected after launch and fed back into evals |

For guardrail fundamentals, see the original [Guardrails](../guardrails.md) page.
