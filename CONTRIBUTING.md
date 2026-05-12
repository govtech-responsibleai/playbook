# Contributing

This repository contains the source for the Responsible AI Playbook. Contributor workflow guidance lives here in the repository so it stays available to collaborators on GitHub without appearing in the published site.

## Scope

Use `playbook/docs/` for reader-facing content only. Keep contributor process, release mechanics, and GitHub workflow guidance in repository files such as this one and files under `.github/`.

## Content standards

Before adding or revising pages, review:

- `AGENTS.md` for repository-specific working conventions.
- `playbook/docs/contributing/page-standards.md` for page structure, release-marking, ownership, and linking rules.

When you add a new page:

1. Put the Markdown file under `playbook/docs/`.
2. Add it to `playbook/mkdocs.yml`.
3. Use lowercase, hyphenated filenames.
4. Prefer existing Material for MkDocs patterns such as admonitions, details blocks, tabbed content, and fenced code blocks.

## Local validation

Before opening or updating a PR:

1. Run `mkdocs build --clean --config-file playbook/mkdocs.yml`.
2. Check affected pages visually when the change affects layout, navigation, styling, interactive elements, or rendering details. `mkdocs serve --config-file playbook/mkdocs.yml` is the usual way to do that.

## Commit hooks

If you want to enable the shared local hooks, run:

```bash
git config core.hooksPath .githooks
```

The shared pre-commit hook treats some files and directories as repository-level areas rather than ordinary page edits. These include:

- `README.md`
- `requirements.txt`
- `playbook/mkdocs.yml`
- `playbook/main.py`
- `.github/workflows/`
- `playbook/docs/stylesheets/`
- `playbook/docs/javascripts/`
- structural changes inside top-level docs sections under `playbook/docs/`

If you stage changes in those areas, the hook expects you to review and stage `AGENTS.md`, because it is the canonical assistant-instruction file for the repository.

If no guidance update is needed, commit with:

```bash
AGENT_GUIDES_REVIEWED=1 git commit
```

To bypass hooks entirely for a deliberate exception:

```bash
git commit --no-verify
```

## Pull requests

Branch from `staging` and open PRs into `staging`.

Keep PRs scoped. Avoid mixing page edits with unrelated navigation reorganizations or styling changes unless that is the purpose of the PR.

Each PR should clearly describe:

- What changed for readers.
- Which pages or sections are affected.
- Whether any navigation changed.
- Whether screenshots are included for visible UI or layout changes.

## PR labels

Use exactly one primary release label on each pull request so GitHub can group generated release notes cleanly. If a PR includes multiple types of changes, choose the label that best reflects the main reader-facing outcome.

- `new-page`: a net-new page, section, or substantial new content area
- `enhancement`: an update to existing guidance, structure, or reader workflow
- `fix`: a correction to content, links, navigation, rendering, or instructions
- `breaking`: a change that significantly restructures content or changes expected reader paths
- `internal`: repository or workflow changes that should not be highlighted to readers
- `skip-release-notes`: changes that should be excluded from generated release notes

Examples:

- Add a new page and update nav for it: `new-page`
- Refresh several existing pages and improve flow between them: `enhancement`
- Correct broken links or wrong instructions: `fix`
- Change contributor workflow or release tooling only: `internal`

If contributors do not add labels themselves, maintainers should add them during review before merge.

## Release notes

Do not maintain a reader-facing changelog page in the MkDocs site.

Instead, use GitHub Releases as the final release summary:

1. Merge labeled PRs into `staging`.
2. Create the release tag when the release is ready.
3. Generate GitHub release notes from merged PRs.
4. Edit the draft release notes so the final summary is concise and reader-relevant.

The release-note categories are configured in `.github/release.yml`, so use clear PR titles and the primary labels documented above.
