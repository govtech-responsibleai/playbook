# AGENTS.md

Canonical repository instructions for coding assistants working in this repository. `CLAUDE.md` should remain a thin pointer to this file for tools that expect a different filename.

## Canonical instruction file

- `AGENTS.md` is the single source of truth for shared repository instructions.
- `CLAUDE.md` must remain a thin pointer to `AGENTS.md`.
- When updating assistant guidance, edit `AGENTS.md` only.
- Do not expand, replace, or duplicate the instructions inside `CLAUDE.md` unless the team has explicitly decided to change the repository's assistant-instruction convention.

## What this is

Documentation site for the **Responsible AI Playbook**, maintained by GovTech AI Practice for Singapore public service. The active site is built with **Docusaurus 3**. MkDocs is deprecated and should be treated as legacy reference material only.

- Production branch: `main`
- Staging branch: `staging`
- Production site: https://playbooks.aip.gov.sg/responsibleai/
- Staging site: https://govtech-responsibleai.github.io/playbook/

## Repository structure

The active documentation setup on this branch is:

```text
repo root/
├── website/
│   ├── docusaurus.config.ts
│   ├── sidebars.ts
│   ├── package.json
│   ├── src/
│   │   ├── pages/index.tsx        ← custom home page (React)
│   │   ├── css/custom.css
│   │   └── components/
│   │       └── OurWork/           ← project card grid component
│   ├── docs/                      ← reader-facing content (MD/MDX)
│   ├── static/                    ← images, favicons
│   └── scripts/migrate.py         ← legacy migration script
├── .github/workflows/
│   └── pages-staging.yml          ← staging deploy configuration
├── README.md
├── CONTRIBUTING.md
└── AGENTS.md
```

Key locations (Docusaurus):

- `website/docusaurus.config.ts`: site config, including environment-specific `url` and `baseUrl`.
- `website/sidebars.ts`: explicit sidebar ordering.
- `website/src/css/custom.css`: dark-teal theme CSS variables and custom highlight classes.
- `website/src/components/OurWork/`: React component rendering project cards from `data.json`.
- `website/docs/contributing/page-standards.md`: source of truth for page structure and release-marking conventions.
- `.github/workflows/pages-staging.yml`: staging deploy workflow with GitHub Pages path settings.
- `CONTRIBUTING.md`: contributor workflow, PR expectations, and release-note process for GitHub collaborators.

## Development commands

Run all active site commands from `website/`:

```bash
cd website
npm install          # first time only
npm run start        # dev server at localhost:3000
npm run build        # production build → website/build/
```

Required validation for content or component changes: successful `npm run build` and, for visible changes, visual review in the dev server. There is no separate test suite or linter configured in this repository.

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
- Adding a new page requires updating `website/sidebars.ts` and setting `sidebar_position` in the file's frontmatter.
- Prefer admonitions, details blocks, tabbed content, and fenced code blocks.
- Do not reorganize top-level sections unless the change reflects a major practitioner workflow.

## Page standards

Follow `website/docs/contributing/page-standards.md` for:

- top-of-page release admonitions,
- inline highlight classes such as `.new-since-v1` and `.privacy-additions`,
- tabbed code examples,
- ownership and review notes,
- linking principles.

In the Docusaurus site, admonitions use `:::info[title]` syntax. Tabs use `<Tabs><TabItem>` JSX, which requires `.mdx` files. Custom highlight classes are defined in `website/src/css/custom.css`.

## Content behavior

- Structured page data should live beside the page that uses it or in the relevant `website/src/components/` directory.
- `showLastUpdateTime: true` is enabled, so pages show last-updated dates from Git history.

## Deployment configuration

- Staging is deployed from `.github/workflows/pages-staging.yml` on pushes to `staging`.
- Because staging and production are hosted under different public subpaths, Docusaurus `url` and `baseUrl` are environment-specific build settings, not constants.
- Staging build settings: `DOCUSAURUS_SITE_URL=https://govtech-responsibleai.github.io` and `DOCUSAURUS_BASE_URL=/playbook/`.
- Production is not currently deployed by GitHub Actions on this branch. Production build settings remain `DOCUSAURUS_SITE_URL=https://playbooks.aip.gov.sg` and `DOCUSAURUS_BASE_URL=/responsibleai/`.

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
