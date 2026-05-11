# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

MkDocs Material documentation site — the **Responsible AI Playbook** for Singapore public service, maintained by GovTech AI Practice.

- Prod (`main`): https://playbooks.aip.gov.sg/responsibleai/
- Staging (`staging`): https://govtech-responsibleai.github.io/playbook/

## Commands

```bash
# Activate venv (required first)
source .venv/bin/activate

# Dev server
mkdocs serve --config-file playbook/mkdocs.yml

# Build (outputs to playbook/site/)
mkdocs build --clean --config-file playbook/mkdocs.yml

# Enable shared repo hooks
git config core.hooksPath .githooks
```

No test suite or linter. Validation = successful build + visual check.

## Local Hooks

The shared pre-commit hook runs `.githooks/check-agent-guides.sh`. It blocks repository-level changes unless both `AGENTS.md` and `CLAUDE.md` are staged, so navigation, dependency, macro, workflow, style, script, and major docs changes keep agent guidance current.

## Branch Model

- `staging` is the integration branch — all feature work branches from and PRs into `staging`.
- `main` only receives merges from `staging` (promotes to prod).
- CI deploys staging on push to `staging` via GitHub Pages.

## Architecture

```
playbook/
├── mkdocs.yml          # Site config, nav tree, plugins, extensions
├── main.py             # mkdocs-macros-plugin hooks (e.g. render_our_work)
└── docs/
    ├── index.md        # Homepage
    ├── start-here/     # Orientation: paths, lifecycle, glossary
    ├── understanding-risks/   # Risk profiling and categorisation
    ├── evaluating-ai-systems/ # Eval types: functional, safety, robustness, fairness, privacy
    ├── mitigations-controls/  # Guardrail patterns and production integration
    ├── agentic-ai/     # Agentic risk model, evals, safety controls
    ├── tools/          # GovTech tools (Litmus, Sentinel, LionGuard, etc.) + templates
    ├── deep-dives/     # Reference/background reading per topic
    ├── our-work/       # Portfolio page (data-driven via _data.yml + macros)
    ├── contributing/   # Page standards
    ├── stylesheets/    # Custom CSS (home.css, typography.css)
    └── javascripts/    # Custom JS (home-page.js)
```

## Key Conventions

- **Nav is defined in `playbook/mkdocs.yml`** under `nav:`. Adding a page requires both creating the .md file and adding a nav entry.
- **Macros plugin**: `playbook/main.py` defines `define_env()` hooks. Data lives in `_data.yml` files co-located with pages (e.g. `our-work/_data.yml`).
- **Page standards** (`contributing/page-standards.md`): new pages get a top-of-page admonition, inline highlights use `.new-since-v1` (yellow) or `.privacy-additions` (teal) classes, tabbed code examples show General + GovTech SDK side-by-side.
- **Markdown extensions in use**: admonition, tabbed (pymdownx.tabbed), details, superfences, highlight, emoji, attr_list, md_in_html.
- **`git-revision-date-localized` plugin** is enabled — pages show last-updated dates from git history.
