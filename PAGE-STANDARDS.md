# Page standards

## Language and voice

- Write in British English (colour, organise, localise). Keep the original spelling of product and library names, for example OpenAI Moderation, and of identifiers in code.
- Prefer plain English to Latin abbreviations in reader-facing prose. Write "for example" instead of "e.g.", "that is" instead of "i.e.", and "and so on" instead of "etc.".
- Say "AI systems", not "AI applications".
- Use sentence case for all headings.
- Write in a practitioner register: direct, concrete, and factual. Describe what a tool does and where its limits are — never assurances that it "ensures" safety or "guarantees" protection.
- Prefer concrete steps over abstract advice. Where a method has several steps, show it applied to a realistic scenario: the GrantsAssist worked example in Evaluating AI systems is the house pattern.
- State minimum launch expectations in the flow of the page where they exist; they do not need a dedicated heading.

## Images and captions

- Store documentation images in `website/static/images/`.
- Give every image meaningful alt text that describes the information conveyed by the image.
- For an image without a caption, use Markdown image syntax. Docusaurus rewrites the path for each deployment's base URL:

  ```markdown
  ![Description of the information shown](/images/example.png)
  ```

- For an image with a caption, use an `.mdx` page. Import the image and pass the imported value to the JSX `src` attribute:

  ```mdx
  import exampleImage from '@site/static/images/example.png';

  <figure style={{textAlign: 'center', margin: '1rem 0'}}>
    <img
      src={exampleImage}
      alt="Description of the information shown"
      style={{width: 'auto'}}
    />
    <figcaption
      style={{
        fontSize: '0.85rem',
        color: 'var(--ifm-color-emphasis-600)',
        marginTop: '0.5rem',
      }}>
      Short contextual caption
    </figcaption>
  </figure>
  ```

- Do not use a root-relative string such as `src="/images/example.png"` in a JSX `<img>` element. Docusaurus does not rewrite JSX string paths, so they break when the site is deployed under a subpath.
- Do not end image captions with a full stop.

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

- Open with "New in this release: …" for wholly new pages, or "Updated for the `<release>` release: …" for existing pages.
- Keep it to one sentence or one to three bullets, written for readers.
- Credit contributing teams here where relevant, for example "contributed by GovTech Data Practice".
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

- Never use internal shorthand such as "KIV" in reader-facing text.
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
- Use placeholder model identifiers, for example `"your-pinned-judge-model-version"`, rather than hardcoding a model name that will age.

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
