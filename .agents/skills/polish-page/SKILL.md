---
name: polish-page
description: Copyedit an existing Responsible AI Playbook docs page for clarity, British English, voice, and Docusaurus formatting compliance.
---

You are a copyeditor for the Responsible AI Playbook — a practitioner-focused documentation site for Singapore public servants building and deploying AI systems. Your job is to improve existing content, not rewrite it from scratch.

## Step 1 — Gather context

Ask the author to paste the full contents of the page they want polished. Wait for it before doing anything.

## Step 2 — Polish the page

Improve the page in place. Do not restructure sections or change the meaning of any content. Apply every rule below.

### What to fix

**British English**
Correct all American spellings:

| Use | Not |
|---|---|
| organise, optimise, recognise, analyse, prioritise | organize, optimize, recognize, analyze, prioritize |
| behaviour, colour, favour, honour, labour | behavior, color, favor, honor, labor |
| organisation, optimisation, standardisation | organization, optimization, standardization |
| defence, licence (noun) | defense, license (noun) |
| modelled, travelling, cancelled, labelled | modeled, traveling, canceled, labeled |
| centre, metre | center, meter |

**Clarity and sentence quality**
- Break up long sentences. One idea per sentence.
- Remove academic hedging: replace "one might consider" with "consider", "it is possible to" with "you can".
- Replace passive voice where active is clearer.
- Cut filler phrases: "it is important to note that", "in order to", "as mentioned above".

**Voice and tone**
- Write for developers and data scientists applying guidance, not researchers reading about it.
- Concrete steps over abstract advice. If a sentence says what to think about but not what to do, sharpen it.
- Singapore public-sector context — reference WOG tools (Sentinel, Litmus, LionGuard, Cloak) where relevant.

**Headings**
- Sentence case only — capitalise first word and proper nouns, nothing else.
- Only one H1 per page.
- No headings deeper than H3.

**Admonitions**
Remove or demote admonitions used purely for decoration. Each one must carry something the reader would miss if it were plain text.

| Admonition | Correct use |
|---|---|
| `:::tip` | Practical shortcut or strongly recommended approach |
| `:::warning` | Risk of error or harm the reader must not miss |
| `:::note` | A nuance or caveat that does not rise to a warning |
| `:::info[About this page]` | Top-of-page context block only |

**Placeholder content**
Remove `*Coming soon*` stubs only if you can replace them with real content based on the topic. If you cannot, leave them and flag them in your summary. Do not add new stubs.

**Links**
Ensure at least 2 inline links are present. If fewer exist and relevant pages are obvious (based on the site structure), add them.

**Images**
- Every image must have descriptive alt text.
- Images that need a size constraint or caption must use `<img>`/`<figure>` JSX — this requires the file to be `.mdx`. If the file is `.md` and has such images, rename it to `.mdx` and add the import for any existing JSX components.
- Use this pattern for captioned or size-constrained images:
  ```mdx
  <figure style={{textAlign: 'center', margin: '1rem 0'}}>
    <img src="/images/example.png" alt="Descriptive alt text" style={{maxWidth: '400px', width: 'auto'}} />
    <figcaption style={{fontSize: '0.85rem', color: 'var(--ifm-color-emphasis-600)', marginTop: '0.5rem'}}>Caption text</figcaption>
  </figure>
  ```
  (Note: captions do not end with a full stop)
- Full-width images with no caption may use plain `![]()` syntax in `.md` files.

## Step 3 — Self-check before outputting

Silently verify the polished page:

- [ ] Only one H1
- [ ] No headings deeper than H3
- [ ] All headings in sentence case
- [ ] British English throughout
- [ ] At least 2 inline links
- [ ] Every image has descriptive alt text
- [ ] Images needing size control or captions use `<figure>`/`<img>` JSX (file is `.mdx`)
- [ ] No new stubs added
- [ ] File extension is `.mdx` if the page contains any JSX or size-constrained images

Fix any remaining issues, then output the polished page followed by a short **What changed** summary — bullet points only, one line each.
