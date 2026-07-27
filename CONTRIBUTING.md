# Contributing

This repository contains the source for the Responsible AI Playbook. Contributor workflow guidance lives here in the repository so it stays available to collaborators on GitHub without appearing in the published site.

## Scope

Use `website/docs/` for reader-facing content. Keep contributor process, release mechanics, and GitHub workflow guidance in repository files such as this one and files under `.github/`.

## Content standards

Before adding or revising pages, review:

- `AGENTS.md` for repository-specific working conventions.
- `website/docs/contributing/page-standards.md` for page structure, release-marking, ownership, and linking rules.

When you add a new page:

1. Put the Markdown or MDX file under `website/docs/`.
2. Add it to `website/sidebars.ts` and set `sidebar_position` in frontmatter.
3. Use lowercase, hyphenated filenames.
4. Prefer existing Docusaurus patterns such as admonitions, details blocks, tabs, and fenced code blocks.

When you add a diagram or CSS-based visual:

5. Wrap it in `<figure>` with a `<figcaption>` label so readers understand what they're seeing.
6. Use the Lato font family for any text in diagrams (apply CSS `font-family: 'Lato', system-ui, -apple-system, sans-serif;` to match the site typography).
7. Follow the CSS-based content standards in `AGENTS.md`: use `clamp()` for responsive sizing, include `role="img"` and `aria-label` for accessibility, and test at multiple viewports (480px, 768px, 1024px, 1440px+).

## Local validation

Before opening or updating a PR:

1. Run `cd website && npm run build`.
2. Check affected pages visually when the change affects layout, navigation, styling, interactive elements, or rendering details. `cd website && npm run start` is the usual way to do that.

## Commit hooks

If you want to enable the shared local hooks, run:

```bash
git config core.hooksPath .githooks
```

The shared pre-commit hook treats some files and directories as repository-level areas rather than ordinary page edits. These include:

- `README.md`
- `.github/workflows/`
- `website/docusaurus.config.ts`
- `website/sidebars.ts`
- `website/package.json`
- `website/src/`
- structural changes inside top-level docs sections under `website/docs/`

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

## Production releases

Do not maintain a reader-facing changelog page in the published site.

Use a published GitHub Release as the signal that a version is approved for production. Each release points to an immutable Git tag, which identifies the exact commit to build and provides a stable rollback target.

### Choose a version

Use version tags in the form `vMAJOR.MINOR.PATCH`:

- Increment **MAJOR** for a substantial Playbook restructuring or a change that significantly alters expected reader paths, for example `v1.4.2` to `v2.0.0`.
- Increment **MINOR** for meaningful new guidance, pages, or sections, for example `v1.4.2` to `v1.5.0`.
- Increment **PATCH** for corrections, clarifications, and link or rendering fixes, for example `v1.4.2` to `v1.4.3`.

Reset the numbers to the right when incrementing a version. For example, the release after `v1.4.2` is `v1.5.0` for a minor update, not `v1.5.2`.

Use a prerelease identifier for a version that is not approved for production, for example `v2.0.0-rc.1`. Production deployment uses published, non-prerelease GitHub Releases.

### Publish a release

1. Merge labelled PRs into `staging`.
2. Validate the complete staging site.
3. Merge `staging` into `main` through a pull request.
4. In GitHub, draft a new Release targeting the approved commit on `main`.
5. Create the next version tag as part of the draft, or select an existing annotated tag that points to the same approved commit.
6. Generate release notes from merged PRs.
7. Edit the notes so the final summary is concise and relevant to readers.
8. Mark test versions as prereleases. Otherwise, publish the stable Release to make it eligible for production deployment.

The release-note categories are configured in `.github/release.yml`, so use clear PR titles and the primary labels documented above.

Do not move or overwrite a published tag. If a released version contains an error, correct it in a new commit and publish the next patch version. A small production correction can have brief release notes, but it should still have a GitHub Release so the production history remains complete.

AWS-specific deployment commands, credentials, scheduled-job behaviour, and recovery procedures belong in the production operations runbook rather than this contributor guide.
