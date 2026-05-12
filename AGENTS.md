# AGENTS.md

Canonical repository instructions for coding assistants working in this repository. `CLAUDE.md` should remain a thin pointer to this file for tools that expect a different filename.

## Canonical instruction file

- `AGENTS.md` is the single source of truth for shared repository instructions.
- `CLAUDE.md` must remain a thin pointer to `AGENTS.md`.
- When updating assistant guidance, edit `AGENTS.md` only.
- Do not expand, replace, or duplicate the instructions inside `CLAUDE.md` unless the team has explicitly decided to change the repository's assistant-instruction convention.

## What this is

MkDocs Material documentation site for the **Responsible AI Playbook**, maintained by GovTech AI Practice for Singapore public service.

- Production branch: `main`
- Staging branch: `staging`
- Production site: https://playbooks.aip.gov.sg/responsibleai/
- Staging site: https://govtech-responsibleai.github.io/playbook/

## Repository structure

The site root is `playbook/`.

```text
playbook/
├── mkdocs.yml
├── main.py
└── docs/
    ├── index.md
    ├── start-here/
    ├── understanding-risks/
    ├── evaluating-ai-systems/
    ├── mitigations-controls/
    ├── tools/
    ├── deep-dives/
    ├── our-work/
    ├── contributing/
    ├── stylesheets/
    └── javascripts/
```

Key locations:

- `playbook/mkdocs.yml`: site nav, theme, plugins, and Markdown extensions.
- `playbook/docs/`: reader-facing content only.
- `playbook/main.py`: MkDocs macros hooks.
- `playbook/docs/our-work/_data.yml`: example of page-local structured data used by macros.
- `playbook/docs/contributing/page-standards.md`: source of truth for page structure and release-marking conventions.
- `CONTRIBUTING.md`: contributor workflow, PR expectations, and release-note process for GitHub collaborators.

## Development commands

Create and activate the virtual environment first:

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

Common commands:

```bash
mkdocs serve --config-file playbook/mkdocs.yml
mkdocs build --clean --config-file playbook/mkdocs.yml
```

There is no separate test suite or linter. Required validation is a successful MkDocs build and, for visible changes, a visual review in the local dev server.

## Branch and release model

- Branch from `staging`.
- Open pull requests into `staging`.
- Merge `staging` into `main` for production release.
- Use GitHub Releases, not a published docs page, for final release summaries.
- Configure generated release notes through `.github/release.yml`.

## Authoring conventions

- Write concise Markdown with sentence-case headings and practitioner-focused guidance.
- New pages should usually include purpose, when to use it, application steps, pitfalls, and relevant tools or templates.
- Use lowercase, hyphenated filenames.
- Adding a new page requires updating `nav:` in `playbook/mkdocs.yml`.
- Prefer existing Material for MkDocs patterns such as admonitions, details blocks, tabbed content, and fenced code blocks.
- Do not reorganize top-level sections unless the change reflects a major practitioner workflow.

## Page standards

Follow `playbook/docs/contributing/page-standards.md` for:

- top-of-page release admonitions,
- inline highlight classes such as `.new-since-v1` and `.privacy-additions`,
- tabbed code examples,
- ownership and review notes,
- linking principles.

## Macros and content behavior

- `playbook/main.py` defines `define_env()` hooks for `mkdocs-macros-plugin`.
- Structured page data should live beside the page that uses it.
- Markdown extensions in use include `admonition`, `attr_list`, `md_in_html`, `pymdownx.details`, `pymdownx.superfences`, and `pymdownx.tabbed`.
- `git-revision-date-localized` is enabled, so pages show last-updated dates from Git history.

## GitHub collaboration conventions

- Keep contributor workflow guidance in repository files such as `CONTRIBUTING.md` and `.github/`, not in `playbook/docs/`.
- Use the pull request template in `.github/PULL_REQUEST_TEMPLATE.md`.
- Use clear PR titles and labels so GitHub-generated release notes stay useful.
- Include screenshots in PRs for visible layout or styling changes.

## Local hooks

Optional local hooks can be enabled with:

```bash
git config core.hooksPath .githooks
```

The shared pre-commit hook runs `.githooks/check-agent-guides.sh`. It blocks certain repository-level changes unless `AGENTS.md` is staged. If `AGENTS.md` was reviewed and no edit is needed, commit with:

```bash
AGENT_GUIDES_REVIEWED=1 git commit
```
