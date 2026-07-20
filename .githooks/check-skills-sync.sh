#!/bin/sh
set -eu

# Ensure .agents/skills/ and .claude/skills/ have identical content.
# Runs as part of the pre-commit hook.

staged="$(git diff --cached --name-only --diff-filter=ACMRT)"
has_agents_skills="$(printf '%s\n' "$staged" | grep '^\.agents/skills/' || true)"
has_claude_skills="$(printf '%s\n' "$staged" | grep '^\.claude/skills/' || true)"

if [ -z "$has_agents_skills" ] && [ -z "$has_claude_skills" ]; then
  exit 0
fi

if ! diff -r .agents/skills .claude/skills >/dev/null 2>&1; then
  cat <<'EOF'
Commit blocked: .agents/skills/ and .claude/skills/ must have identical content.

Copy from one to the other, stage both, and commit again:
  rm -rf .agents/skills && cp -r .claude/skills .agents/skills
  git add .agents/skills .claude/skills

EOF
  exit 1
fi
