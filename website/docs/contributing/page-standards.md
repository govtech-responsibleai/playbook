---
sidebar_label: "Page standards"
unlisted: true
---

# Page standards

Use these standards when adding or updating playbook pages. Repository workflow (branches, pull requests, sidebar registration) lives in `CONTRIBUTING.md` and `AGENTS.md`.

## Language and voice

- Write in British English (colour, organise, localise). Keep the original spelling of product and library names (e.g. OpenAI Moderation) and of identifiers in code.
- Say "AI systems", not "AI applications".
- Use sentence case for all headings.
- Write in a practitioner register: direct, concrete, and factual. Describe what a tool does and where its limits are — never assurances that it "ensures" safety or "guarantees" protection.
- Prefer concrete steps over abstract advice. Where a method has several steps, show it applied to a realistic scenario: the GrantsAssist worked example in Evaluating AI systems is the house pattern.
- State minimum launch expectations in the flow of the page where they exist; they do not need a dedicated heading.

## Page shape

Practitioner guidance pages should usually include:

1. What this page is for.
2. When to use it.
3. How to apply it.
4. Common failure modes or pitfalls.
5. Links to relevant tools, templates, and deeper resources.

## Marking changes for readers

When a page is new or substantively changed since the last release, lead with a single admonition:

```markdown
:::info[What's new on this page]

Updated for the <release> release: added the benchmark-leakage section and
refreshed the recommended benchmarks table.

:::
```

- Open with "New in this release: …" for wholly new pages, or "Updated for the <release> release: …" for existing pages.
- Keep it to one sentence or one to three bullets, written for readers.
- Credit contributing teams here where relevant (e.g. "contributed by GovTech Data Practice").
- No git archaeology: no branch names, no links to previous page URLs, no editing history.
- Refresh or remove the admonition at every release. It must never describe a release that has already shipped.

Inline highlighting of new prose (the `.new-since-v1` and `.privacy-additions` classes) is retired. Do not add new highlight marks; remove existing ones when touching a page.

## Placeholders and roadmap

- Never publish empty section headings. If content is planned but unwritten, collapse it into at most one admonition per page:

```markdown
:::note[On the roadmap]

Planned additions to this page: tool-argument injection tests, memory and
state evals.

:::
```

- Never use internal shorthand (e.g. "KIV") in reader-facing text.
- Only include code tabs that contain working content — no "coming soon" stub tabs.

## Code examples

Where a how-to page benefits from a code example, pair a framework-agnostic version with a GovTech version (Sentinel, Litmus, or Cloak) using tabs:

```mdx
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="general" label="General">
  ...
</TabItem>
<TabItem value="sentinel" label="Sentinel">
  ...
</TabItem>
</Tabs>
```

Tabs require the page to be `.mdx`.

- Examples must run against a documented API, or be clearly labelled as illustrative in a comment.
- Use placeholder model identifiers (e.g. `"your-pinned-judge-model-version"`) rather than hardcoding a model name that will age.

## Single source of truth

Shared tables — taxonomies, risk categories, guardrail lists — live on exactly one page. Other pages link to that page, optionally with a short excerpt. Never copy a full table across pages: copies drift.

## Ownership and review

Each substantial page should have:

- An owner or owning team, recorded in the page frontmatter (`owner: <name-or-team>`), not in reader-facing sidebar labels.
- A last-reviewed date in frontmatter (`last_reviewed: YYYY-MM-DD`), updated whenever the owner re-verifies the content. The automatic last-updated timestamp reflects the most recent edit, not a deliberate review, so the two are tracked separately.

## Linking principles

- Link from conceptual pages to the practical pages that apply them.
- Link from practical pages to tools and templates only when the tool operationalises the method.
- Every page must be registered in `website/sidebars.ts`.
- Avoid creating new top-level sections unless they represent a major practitioner workflow.
