# Tool-Use and Planning Evals

!!! info "About this page"

    This page is new in the upcoming Responsible AI Playbook release. It enumerates tool-use and planning checks, scenario-design patterns, and placeholder sections for tool argument-injection tests and permission-boundary scenarios. All content is new.

Tool-use and planning evals check whether an agent chooses appropriate actions and executes them safely.

## Tool-Use Checks

- Calls the right tool for the task.
- Passes valid and safe arguments.
- Does not call tools when information is insufficient.
- Handles tool errors without unsafe retries.
- Does not expose tool outputs to unauthorized users.

## Planning Checks

- Breaks tasks into sensible steps.
- Does not skip required approvals.
- Revises plans when observations change.
- Stops when goals are impossible or unsafe.
- Keeps user intent and system constraints aligned.

## Scenario Design

Create scenarios with normal tasks, ambiguous tasks, malicious instructions, partial tool failures, and permission boundaries.

## Tool Argument-Injection Tests

<mark class="new-since-v1">*Coming soon — this section will cover specific argument-injection test patterns: shell injection via filename arguments, SQL injection in query parameters, SSRF via URL arguments, path traversal via path arguments, and how to detect each in a scenario harness.*</mark>

## Permission-Boundary Scenarios

<mark class="new-since-v1">*Coming soon — this section will cover scenarios that probe permission edges: cross-tenant access attempts, requests for tools not in the allowlist, attempts to invoke high-impact tools without approval, and validation that least-privilege defaults hold under adversarial input.*</mark>
