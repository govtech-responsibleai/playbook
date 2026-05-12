---
sidebar_label: "Page standards"
sidebar_position: 13
---

# Page Standards

Use these standards when adding or updating playbook pages.

## Page Shape

Practitioner guidance pages should usually include:

1. What this page is for.
2. When to use it.
3. How to apply it.
4. Common failure modes or pitfalls.
5. Links to relevant tools, templates, and deeper resources.

## Marking New Content

Pages added since the last public release, and modified canonical pages, should signal that to readers. Two mechanisms work together:

### Top-of-page admonition

For **wholly new pages** added since the public release, lead with:

```markdown
:::info[About this page]

This page is new in the upcoming Responsible AI Playbook release. It [one-line statement of intent — what the page is for]. Sections that are not highlighted have been migrated from the previously published [<source>](<live URL or repo path>).

:::

```

Three required slots: the page-is-new statement, the intent, and the sourcing line. For purely net-new pages with no migrated content, write `All content is new.` in place of the sourcing link.

For **modified canonical pages** (e.g. the homepage, the resources index), lead with:

```markdown
:::info[What's changed in this release]

This page has been updated for the upcoming Responsible AI Playbook release. [One-line statement of the new intent — what the page now does or emphasises.] Summary of changes: [short bullet list of substantive changes].

:::

```

### Inline highlighting

Highlight the **actual prose passages** that are new, in two colours that distinguish their origin:

| Class | Colour | Use |
|---|---|---|
| `.new-since-v1` | Soft yellow | Prose added since the public v1.1.0 release. |
| `.privacy-additions` | Soft teal | Prose contributed via the `feat/privacy-additions` branch. Takes precedence over `.new-since-v1` for those passages. |

Markdown form:

```markdown
<mark class="new-since-v1">This sentence is new in the upcoming release.</mark>

When integrated with the application layer, <mark class="privacy-additions">indirect identifiers such as postal codes can be combined with auxiliary data to re-identify individuals</mark>.
```

Don't wrap whole sections in a `<div>`; apply the highlight at the prose level so the markdown source stays readable and the highlights track real changes. Migrated already-public prose stays unhighlighted, matching the admonition's sourcing line.

When teammates fill in their content and the team is confident, **remove both** the admonition and the inline highlight wrappers in the same PR that promotes the page.

## Tabbed Code Examples

Where a how-to page benefits from a code example, present **two implementations side by side**: a framework-agnostic version, and a GovTech-specific (Sentinel/Litmus/Cloak) version. Use Material's tabbed code blocks:

```markdown
=== "General"

    ```python
    # framework-agnostic example
    ```

=== "Sentinel"

    ```python
    # GovTech Sentinel API example
    ```
```

If only one side exists today, leave the other tab as a stub (`# Coming soon`) so the structure is in place when teammates fill it.

## Ownership and Review

Each substantial page should have:

- A clear owner or owning team.
- A last-reviewed date when possible.
- A short note on what should be improved next if the page is incomplete.

## Linking Principles

- Link from conceptual pages to practical pages.
- Link from practical pages to tools and templates only when they operationalize the method.
- Avoid creating new top-level sections unless they represent a major practitioner workflow.

## Content Style

- Prefer concrete steps over abstract advice.
- Use examples and templates where possible.
- Call out minimum launch expectations clearly.
- Keep governance and use-case playbook material KIV until those sections are ready.
