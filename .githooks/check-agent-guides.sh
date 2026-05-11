#!/bin/sh
set -eu

changed_files="$(git diff --cached --name-only --diff-filter=ACMRT)"

if [ -z "$changed_files" ]; then
  exit 0
fi

big_change_files="$(printf '%s\n' "$changed_files" | grep -E '^(README\.md|requirements\.txt|playbook/mkdocs\.yml|playbook/main\.py|playbook/docs/[^/]+/|playbook/docs/stylesheets/|playbook/docs/javascripts/|\.github/workflows/)' || true)"

if [ -z "$big_change_files" ]; then
  exit 0
fi

agent_guides="$(printf '%s\n' "$changed_files" | grep -E '^(AGENTS\.md|CLAUDE\.md)$' || true)"

if printf '%s\n' "$agent_guides" | grep -qx 'AGENTS.md' && \
   printf '%s\n' "$agent_guides" | grep -qx 'CLAUDE.md'; then
  exit 0
fi

cat <<'EOF'
Commit blocked: this looks like a repository-level change, but AGENTS.md and CLAUDE.md are not both staged.

Update both contributor/agent guides when changing site structure, navigation, dependencies,
macros, workflows, styles, scripts, or major docs sections.

After updating, stage the files and commit again:
  git add AGENTS.md CLAUDE.md

To bypass for a deliberate exception:
  git commit --no-verify
EOF

printf '\nStaged files that triggered this check:\n'
printf '  %s\n' $big_change_files

exit 1
