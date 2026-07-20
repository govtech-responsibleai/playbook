#!/bin/sh
set -eu

# Ensure CLAUDE.md and AGENTS.md have identical content.
# Runs as part of the pre-commit hook.

# If neither file is staged, nothing to check.
staged="$(git diff --cached --name-only --diff-filter=ACMRT)"
has_claude="$(printf '%s\n' "$staged" | grep -x 'CLAUDE.md' || true)"
has_agents="$(printf '%s\n' "$staged" | grep -x 'AGENTS.md' || true)"

if [ -z "$has_claude" ] && [ -z "$has_agents" ]; then
  exit 0
fi

# Compare the staged content of both files.
claude_content="$(git show :CLAUDE.md 2>/dev/null || true)"
agents_content="$(git show :AGENTS.md 2>/dev/null || true)"

if [ "$claude_content" != "$agents_content" ]; then
  cat <<'EOF'
Commit blocked: CLAUDE.md and AGENTS.md must have identical content.

Copy the content from one to the other, stage both, and commit again:
  cp AGENTS.md CLAUDE.md && git add CLAUDE.md AGENTS.md

EOF
  exit 1
fi
