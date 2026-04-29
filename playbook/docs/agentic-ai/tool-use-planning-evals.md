# Tool-Use and Planning Evals

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
