# AGENTS.md

Canonical repository instructions for coding assistants working in this repository.

## Canonical instruction file

- `AGENTS.md` and `CLAUDE.md` must always have identical content.
- When updating assistant guidance, edit both files (or edit one and copy to the other).
- A pre-commit hook enforces this: commits are blocked if the two files differ.

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
│   │       ├── OurWork/           ← project card grid component
│   │       └── FeedbackWidget/    ← thumbs up/down per-page feedback
│   ├── docs/                      ← reader-facing content (MD/MDX)
│   ├── static/                    ← images, favicons
│   └── scripts/migrate.py         ← legacy migration script
├── .agents/skills/                ← Claude Code skills (write-page, polish-page)
├── .githooks/                     ← shared pre-commit hooks
├── .github/workflows/
│   └── pages-staging.yml          ← staging deploy configuration
├── README.md
├── CONTRIBUTING.md
├── AGENTS.md
└── CLAUDE.md                      ← must be identical to AGENTS.md
```

Key locations (Docusaurus):

- `website/docusaurus.config.ts`: site config, including environment-specific `url` and `baseUrl`.
- `website/sidebars.ts`: explicit sidebar ordering.
- `website/src/css/custom.css`: dark-teal theme CSS variables and custom highlight classes.
- `website/src/components/OurWork/`: React component rendering project cards from `data.json`.
- `website/src/components/FeedbackWidget/`: thumbs up/down widget that fires GA4 custom events.
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

## Validation

**This repository has no test suite and no linter, and none should be added for content work.** It is a documentation site: Markdown/MDX pages plus a small amount of React, published for reading. "Does it pass?" means the docs compile and the page renders correctly — not that a test run went green.

Validate changes this way:

1. **Docs compile.** Run `npm run build` from `website/`. It must end with `[SUCCESS] Generated static files in "build"`.
2. **Links actually resolve.** A green build does *not* prove this: `onBrokenLinks` and `onBrokenMarkdownLinks` are both set to `warn` in `docusaurus.config.ts`, so broken links only produce warnings. Read the build output for warnings, or check the rendered HTML under `website/build/` directly.
3. **Assets actually render.** Confirm images resolve rather than trusting the Markdown source. Docusaurus rewrites `/images/foo.png` to a content-hashed path under `build/assets/images/` and only emits that path when the source file exists in `website/static/`, so finding the hashed reference in the built HTML is proof the image will display.
4. **Visual review for visible changes.** Use `npm run start` for layout, styling, or component work.
5. **Navigation is wired.** A new page must appear in `website/sidebars.ts`; otherwise the build warns that the doc is not in any sidebar and readers cannot reach it.

Because there are no tests, review attention belongs on factual accuracy, tone, heading conventions, and whether links and images resolve — the failure modes this repository actually has.

## Branch and release model

- Branch from `staging`.
- Open pull requests into `staging`.
- Merge `staging` into `main` for production release.
- `main` is a protected branch: direct commits are blocked, PRs require at least one approving review with code owner approval, and force pushes are disallowed.
- Use GitHub Releases, not a published docs page, for final release summaries.
- Configure generated release notes through `.github/release.yml`.

## Authoring conventions

- Write concise Markdown with sentence-case headings and practitioner-focused guidance.
- Write in British English and say "AI systems", not "AI applications". Product names and code identifiers keep their original spelling.
- New pages should usually include purpose, when to use it, application steps, pitfalls, and relevant tools or templates.
- Use lowercase, hyphenated filenames.
- Adding a new page requires updating `website/sidebars.ts` and setting `sidebar_position` in the file's frontmatter.
- Prefer admonitions, details blocks, tabbed content, and fenced code blocks.
- Do not reorganize top-level sections unless the change reflects a major practitioner workflow.

## Page standards

Follow `website/docs/contributing/page-standards.md` for:

- the single "What's new on this page" release admonition (refreshed or removed at every release; no branch names or editing history),
- placeholder and roadmap conventions (no empty section headings, no internal shorthand such as "KIV" in reader-facing text),
- tabbed code examples pairing a framework-agnostic version with a GovTech (Sentinel/Litmus/Cloak) version,
- ownership (`owner`) and last-reviewed dates (`last_reviewed`) in page frontmatter, not in sidebar labels,
- linking principles and the single-source-of-truth rule for shared tables and taxonomies.

In the Docusaurus site, admonitions use `:::info[title]` syntax. Tabs use `<Tabs><TabItem>` JSX, which requires `.mdx` files. The inline highlight classes (`.new-since-v1`, `.privacy-additions`) are retired: do not add new highlight marks, and remove existing ones when touching a page.

## Analytics

- GA4 property `G-D8325S860G` is configured via the `@docusaurus/plugin-google-gtag` plugin in `docusaurus.config.ts`.
- The `FeedbackWidget` component sends custom GA4 events (`page_feedback`) with thumbs-up/down values. It is rendered at the bottom of doc pages.
- When adding new interactive components, prefer GA4 custom events over third-party analytics.

## CSS-based content

All CSS-based content — diagrams, cards, grids, interactive components — must follow these standards:

- **Use `clamp()` for responsive sizing, not media queries.** Pattern: `clamp(min-mobile, vw-expression, max-desktop)`.
- **Semantic HTML:** use `<figure>`, `<figcaption>`, `<section>` where meaningful; always add `role="img"` and `aria-label` to complex diagrams.
- **BEM naming:** all custom styles use `component-name__element--modifier` pattern.
- **CSS custom properties:** define colours, spacing, and typography as variables for global updates.
- **Validation:** run `npm run build`, test at 480px / 768px / 1024px / 1440px+, check for text overlap and icon visibility at all sizes.

Refer to `.guardrail-flow` and `.evaluation-method-spectrum` in `custom.css` for working examples.

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

The shared pre-commit hook runs two checks:

1. **`.githooks/check-agent-guides.sh`** — blocks repository-level changes unless `AGENTS.md` is staged. If `AGENTS.md` was reviewed and no edit is needed, commit with:

   ```bash
   AGENT_GUIDES_REVIEWED=1 git commit
   ```

2. **`.githooks/check-claude-agents-sync.sh`** — blocks commits if `CLAUDE.md` and `AGENTS.md` have different content. Fix with:

   ```bash
   cp AGENTS.md CLAUDE.md && git add CLAUDE.md AGENTS.md
   ```

3. **`.githooks/check-skills-sync.sh`** — blocks commits if `.agents/skills/` and `.claude/skills/` have different content. Fix with:

   ```bash
   rm -rf .agents/skills && cp -r .claude/skills .agents/skills
   git add .agents/skills .claude/skills
   ```
