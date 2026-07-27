---
sidebar_label: "[JY] Monitoring and incident response"
sidebar_position: 14
---

# Monitoring and incident response

Evaluation establishes how a system behaves before launch. Monitoring establishes how it behaves afterwards, against real users and inputs no test set anticipated. Two kinds of failure need to stay visible: the model producing an unacceptable output, and the system taking an unacceptable action.

Both need a defined response before they occur, because the point at which an incident is discovered is a poor moment to decide who can switch what off.

## What to monitor

- Guardrail triggers, and the rate at which they fire.
- Refusals, and whether the refusal rate is drifting.
- User reports and escalations to human review.
- Tool calls and their arguments, for systems that use tools.
- Failed or repeated actions.
- Permission denials.
- Human override events.
- Unexpected state or memory use.

Rates matter more than individual events. A single guardrail trigger says little; a guardrail whose trigger rate doubles overnight says something has changed, either in the traffic or in the system.

## How to respond

Define the available responses in advance, and record which of them each role is authorised to take:

- Pause or disable specific tools.
- Fall back to human review.
- Preserve traces for investigation.
- Notify the system owner.
- Patch prompts, tools, permissions, or evaluations.
- Add the incident to the regression suite so the same failure is caught next time.

The last of these is the one most often skipped. An incident that is resolved but never turned into a test case is an incident that remains available to recur.

:::note[On the roadmap]

Planned additions to this page: anomaly detection and alert thresholds, trace replay for incident reconstruction, kill-switch design, and the governance process around incident response.

:::

## Where to go next

- [Measuring impact](measuring-impact.md) — quantifying what a guardrail changes in production.
- [Production integration](production-integration.md) — where monitoring hooks sit in the serving path.
