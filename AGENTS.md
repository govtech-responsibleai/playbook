# Repository Guidelines

## Project Structure & Module Organization

This repository contains a MkDocs Material site for the Responsible AI Playbook. The site root is `playbook/`; `playbook/mkdocs.yml` defines navigation tabs, theme settings, extensions, and plugins. Source pages live in `playbook/docs/`. Current top-level tabs include Home, Understanding Risks (`understanding-risks/`), Evaluating AI Systems (`evaluating-ai-systems/`), Mitigations & Controls (`mitigations-controls/`), Agentic AI (`agentic-ai/`), Tools & Benchmarks (`tools/`), and Resources (`deep-dives/` plus supporting pages). Custom styles and scripts are in `playbook/docs/stylesheets/` and `playbook/docs/javascripts/`. MkDocs macro hooks are in `playbook/main.py`, with page data such as `playbook/docs/our-work/_data.yml` stored beside the page that uses it.

## Build, Test, and Development Commands

Create and activate a virtual environment before working:

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

Run the local docs server with:

```bash
mkdocs serve --config-file playbook/mkdocs.yml
```

Build the static site and validate navigation, macros, and Markdown rendering with:

```bash
mkdocs build --clean --config-file playbook/mkdocs.yml
```

## Coding Style & Naming Conventions

Use concise Markdown with sentence-case headings and practitioner-focused guidance. New pages should generally include purpose, when to use it, application steps, pitfalls, and relevant tools or templates. Use lowercase, hyphenated filenames such as `launch-criteria-risk-register.md`. When adding a page, also add it to `nav:` in `playbook/mkdocs.yml`. Prefer existing Material for MkDocs patterns: admonitions, tabbed examples, details blocks, and fenced code blocks.

## Testing Guidelines

There is no separate automated test suite or linter. Treat `mkdocs build --clean --config-file playbook/mkdocs.yml` as the required validation step. For content changes, also run `mkdocs serve` and visually check affected pages, navigation placement, tabs, admonitions, links, and macro-rendered sections.

## Commit & Pull Request Guidelines

Recent commits use conventional prefixes such as `docs:`, `feat:`, `feat(scope):`, `refactor:`, and `chore:`. Keep messages specific, for example `docs: add agentic eval checklist`. Branch from `staging`, open PRs into `staging`, and reserve `main` for merges from `staging` to production. PRs should summarize changed pages, note new navigation entries, link relevant issues, and include screenshots for visible layout or styling changes.

## Agent-Specific Instructions

Follow `playbook/docs/contributing/page-standards.md` for release admonitions, inline highlight classes, tabbed code examples, ownership notes, and linking principles. Do not reorganize top-level sections unless the change represents a major practitioner workflow.

## Local Hooks

Enable shared Git hooks with `git config core.hooksPath .githooks`. The pre-commit hook blocks repository-level changes unless both `AGENTS.md` and `CLAUDE.md` are staged, keeping guidance aligned after navigation, dependency, macro, workflow, style, script, or major docs changes.
