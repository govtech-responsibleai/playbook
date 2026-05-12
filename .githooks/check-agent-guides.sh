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

if [ "${AGENT_GUIDES_REVIEWED:-}" = "1" ]; then
  exit 0
fi

canonical_guide="$(printf '%s\n' "$changed_files" | grep -x 'AGENTS.md' || true)"

if printf '%s\n' "$canonical_guide" | grep -qx 'AGENTS.md'; then
  exit 0
fi

cat <<'EOF'
Commit blocked: this looks like a repository-level change, but AGENTS.md is not staged.

Update the canonical contributor/agent guide when changing site structure, navigation, dependencies,
macros, workflows, styles, scripts, or major docs sections.

After updating, stage the files and commit again:
  git add AGENTS.md

If you checked AGENTS.md and no update is needed:
  AGENT_GUIDES_REVIEWED=1 git commit

To bypass all pre-commit hooks for a deliberate exception:
  git commit --no-verify
EOF

printf '\nStaged files that triggered this check:\n'
printf '  %s\n' $big_change_files

exit 1
