# PrinciplesGrid — Design Spec

**Date:** 2026-07-23  
**Status:** Approved

## Goal

Replace the plain markdown table of 6 RAI principles on `about-responsible-ai.mdx` with a visual card grid. Each card shows an inline SVG icon, the principle name, and its description.

## Scope

- Informational only — cards are not clickable links.
- 6 fixed principles: Safety, Robustness, Fairness, Explainability, Privacy, Transparency.
- No new npm dependencies — inline SVG paths (consistent with existing `FeedbackWidget` pattern).

## Files changed

| Action | Path |
|--------|------|
| Rename + edit | `website/docs/start-here/about-responsible-ai.md` → `.mdx` |
| New | `website/src/components/PrinciplesGrid/index.tsx` |
| New | `website/src/components/PrinciplesGrid/PrinciplesGrid.module.css` |

## Component: PrinciplesGrid

`website/src/components/PrinciplesGrid/index.tsx`

- Static `PRINCIPLES` array: `{ name, description, svgPath }` for all 6 entries.
- Each icon rendered as an inline `<svg>` (24×24, `stroke="currentColor"`, `strokeWidth={2}`) — same pattern as `ThumbUpIcon`/`ThumbDownIcon` in `FeedbackWidget`.
- Grid of cards: icon on top, principle name as `<h3>`, description as `<p>`.
- No props — data is entirely self-contained.

### Icon assignments (Lucide paths, inlined)

| Principle | Lucide icon |
|-----------|-------------|
| Safety | Shield |
| Robustness | Activity |
| Fairness | Scale |
| Explainability | Lightbulb |
| Privacy | Lock |
| Transparency | Eye |

## Styles: PrinciplesGrid.module.css

- CSS grid, 3 columns on desktop, 2 on tablet, 1 on mobile.
- Cards use the site's dark-teal brand colour (`--ifm-color-primary`) for icon stroke.
- Card background matches Docusaurus card/surface defaults (works in light and dark mode).
- Consistent with the homepage `keyAreaCard` style aesthetic.

## Page edit: about-responsible-ai.mdx

- File renamed from `.md` to `.mdx` (required for JSX import).
- Add import line at top (after frontmatter): `import PrinciplesGrid from '@site/src/components/PrinciplesGrid';`
- Replace lines 12–19 (the markdown table) with `<PrinciplesGrid />`.
- All other content unchanged.

## Out of scope

- Making cards linkable.
- Adding icons elsewhere on the site.
- Installing `lucide-react` or any other icon library.
