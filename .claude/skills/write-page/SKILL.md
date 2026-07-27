---
name: write-page
description: Draft a new Responsible AI Playbook docs page from scratch, applying house style, British English, and Docusaurus formatting conventions. For editing existing pages use /polish-page.
---

You are helping a GovTech AI Practice author write a new page for the Responsible AI Playbook — a practitioner-focused documentation site for Singapore public servants building and deploying AI systems. The site is built with Docusaurus 3.

## Step 1 — Gather context

Before writing anything, ask the author for:

1. **Topic** — What is this page about? One sentence is enough.
2. **Section** — Which section does it belong in?
   - `evaluating-ai-systems` — how to test and measure AI behaviour
   - `mitigations-controls` — guardrails, safety controls, and fixes
   - `deep-dives` — background and theory behind a topic
   - `tools` — a specific GovTech or open-source tool
   - `start-here` — foundational concepts and orientation
   - `understanding-risks` — risk categories and profiles
3. **Raw notes** — Any existing bullet points, source material, or a rough outline. Optional but strongly recommended.

Wait for their answers before writing anything.

## Step 2 — Write the draft

Default to a `.mdx` file — it supports JSX components, sized images, and captions. Only use `.md` if the page has no images and no JSX components. Follow every rule below without exception.

### Frontmatter

```md
---
sidebar_label: "<Short label, 3–5 words>"
sidebar_position: 99
---
```

Use `99` as a placeholder — the author sets the real value.

### Imports (`.mdx` only)

Only include when the page uses JSX components:

```mdx
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

### Page structure

There is no fixed template. Structure the page around what the topic actually needs. Use the list below as a menu of possible sections — pick what fits, reorder as needed, and leave out what does not apply.

**Possible sections (not a checklist):**
- What this is / background and context
- When to use it
- How to apply it (the main instructional content)
- Common pitfalls or failure modes
- Tools and templates
- Code example

Every page must have:
1. **Single H1 title** — sentence case. One per page, used only once.
2. **`:::info[About this page]`** admonition — one paragraph stating what the page covers. End with `All content is new.`
3. **Opening paragraph** immediately after the admonition — one or two sentences defining the topic. No heading above it.

After that, let the topic drive the structure. A tools page looks different from a concepts page; a how-to page looks different from a risk taxonomy. Ask yourself: what does a developer need to know, and in what order does it make sense to tell them?

**H3 subsections** inside H2 blocks only. Do not use H4 or deeper.

**Code examples** — use Tabs if the page involves implementation. Always include a `General` tab. Add a `Sentinel` or `Litmus` tab if a GovTech-specific version exists; if not, omit the tab entirely rather than stubbing it.

### Placeholder content

Use `*Coming soon*` or WIP markers **sparingly** — only when a section is genuinely blocked on external input (e.g. a tool that does not exist yet). Do not use them to defer content you could write now. A well-scoped page with fewer complete sections is better than a page full of stubs. If you do not have enough content for a section, cut the section.

### Admonitions

Use admonitions purposefully. Each one must carry information the reader would miss if it were removed — do not use them as decoration.

| Admonition | When to use |
|---|---|
| `:::info[About this page]` | Top-of-page context block on every new page |
| `:::tip[Tip: ...]` | A practical shortcut or strongly recommended approach |
| `:::warning[...]` | Something the reader must not overlook; risk of error or harm |
| `:::note[...]` | A nuance or caveat that does not rise to a warning |

Syntax:
```mdx
:::warning[Check compliance policies before using external services]

External moderation services receive your data. Confirm compliance with your organisation's policies before integrating.

:::
```

### Formatting rules

- **H1** — one per page, the title only.
- **H2** — major sections. **H3** — subsections inside H2. Stop at H3.
- **Images** — every image must have descriptive alt text. Use `.webp` or `.png` for generated/diagram images, `.jpg` for photos. Always use `<figure>`/`<figcaption>` for images with captions, and `<img>` JSX for size-constrained images (requires `.mdx`). Plain `![]()` markdown syntax renders at full container width with no size control. Use this pattern:
  ```mdx
  <figure style={{textAlign: 'center', margin: '1rem 0'}}>
    <img src="/images/example.png" alt="Descriptive alt text" style={{maxWidth: '400px', width: 'auto'}} />
    <figcaption style={{fontSize: '0.85rem', color: 'var(--ifm-color-emphasis-600)', marginTop: '0.5rem'}}>Caption text here.</figcaption>
  </figure>
  ```
  For full-width images without a caption, `![]()` is acceptable.
- **Hyperlinks** — include at minimum 2 inline links to related playbook pages or external resources.
- **Tables** — use for comparisons, taxonomies, or tool lists. Keep to 3–4 columns.
- **Lists** — bullet lists for unordered sets; numbered lists for sequential steps only.
- **Bold** — use for the first introduction of a key term, or to call out a critical constraint. Do not bold for general emphasis.

### British English

Always use British English. Common patterns:

| Use | Not |
|---|---|
| organise, optimise, recognise, analyse, prioritise | organize, optimize, recognize, analyze, prioritize |
| behaviour, colour, favour, honour, labour | behavior, color, favor, honor, labor |
| organisation, optimisation, standardisation | organization, optimization, standardization |
| defence, licence (noun) | defense, license (noun) |
| modelled, travelling, cancelled, labelled | modeled, traveling, canceled, labeled |
| centre, metre | center, meter |
| whilst, amongst | while, among (either acceptable) |
| single quotes for quotations | double quotes (acceptable for nested quotes) |

### Audience

**Primary audience: developers in GovTech and across Singapore government agencies.** These are technical practitioners — engineers and software developers — who are building or integrating AI systems. Write at a level that assumes coding ability and familiarity with APIs, but does not assume AI research expertise.

**Secondary audience: data scientists** who want deeper technical grounding on a topic.

Do not write for general public officers or policy audiences. If a concept requires non-technical framing, keep it brief and link out rather than explaining from first principles.

### Voice and tone

- Write for **practitioners who need to act**, not researchers who want to understand.
- Assume the reader can read code. Use code examples freely.
- Use **concrete steps**. Say what to do, not what to consider.
- Reference **WOG tools** where relevant: Sentinel, Litmus, LionGuard, Cloak, Responsible AI Benchmark.
- Avoid academic hedging. Prefer "do X" over "one might consider doing X".
- Keep sentences short. One idea per sentence.
- Singapore public-sector context: refer to WOG (Whole of Government), government agencies, and local regulatory context where appropriate.

## Step 3 — Self-check before outputting

Before presenting the draft, silently verify:

- [ ] Only one H1, used as the page title
- [ ] No headings deeper than H3
- [ ] British English spelling throughout
- [ ] At least 2 inline links to related pages or external resources
- [ ] Every image has descriptive alt text
- [ ] No `*Coming soon*` stubs except where genuinely blocked
- [ ] File extension is `.mdx` unless the page has no images and no JSX components
- [ ] All images with captions use `<figure>`/`<figcaption>` JSX
- [ ] All size-constrained images use `<img>` JSX with `maxWidth` and `width: 'auto'`

Fix any issues, then output the draft.
