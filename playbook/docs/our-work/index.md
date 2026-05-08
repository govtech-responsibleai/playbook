---
title: Our Work
hide:
  - navigation
  - toc
---

!!! info "About this page"

    This page is new in the upcoming Responsible AI Playbook release. It is a portfolio showcase of key projects and publications from the GovTech Responsible AI team. All content is new.

Explore key projects and publications from our portfolio.

<style>
/* Reuse Highlights card look (page-local, lightweight) */
.md-typeset .grid.cards > ul > li { position: relative; }
.md-typeset .grid.cards > ul > li strong { color: var(--md-primary-fg-color); font-size: .95rem; }
.md-typeset .grid.cards > ul > li p { font-size: .70rem; line-height: 1.5; }
.md-typeset .grid.cards > ul > li .meta { display: block; margin-top: .25rem; font-size: .68rem; }
.md-typeset .grid.cards > ul > li .meta a { margin-right: .25rem; }
.md-typeset .grid.cards > ul > li .meta.subtitle { color: var(--md-accent-fg-color); font-style: italic; }
/* No full-card tint/border for pinned items */
.type-badge { position: absolute; top: .45rem; right: 1.8rem; font-size: .62rem; padding: .12rem .35rem; border-radius: .35rem; background: var(--md-default-fg-color--lightest); border: 1px solid var(--md-default-fg-color--lighter); color: var(--md-default-fg-color); z-index: 1;}
.pin-badge { position: absolute; top: .45rem; right: .5rem; display: inline-flex; align-items: center; justify-content: center; color: var(--md-accent-fg-color); background: transparent; border: none; z-index: 1; }
.pin-badge .twemoji, .pin-badge svg { width: 16px; height: 16px; }

/* Corner tag strip (top-right), sits below the type badge */
.corner-tags { position: absolute; top: 1.6rem; right: .5rem; display: flex; gap: .25rem; flex-wrap: wrap; justify-content: flex-end; max-width: 55%; z-index: 1; }
.corner-tags .tag-chip { font-size: .62rem; padding: .08rem .35rem; border-radius: 999px; border: 1px solid var(--md-default-fg-color--lighter); background: var(--md-default-fg-color--lightest); color: var(--md-default-fg-color); }
.corner-tags .tag-chip.is-primary { background: var(--md-accent-fg-color); color: var(--md-accent-bg-color); border-color: transparent; }

/* Hide original tags meta once cloned into corner */
.md-typeset .grid.cards > ul > li .meta.is-hidden { display: none !important; }

/* Hide page feedback + last edited on this page only */
.md-feedback { display: none !important; }
.md-source-file { display: none !important; }
</style>

{{ render_our_work() }}

<script>
// Page-local logic: add type badges and filter by Type
(function() {
  const items = Array.from(document.querySelectorAll('.grid.cards li'));
  const types = new Set();

  items.forEach(li => {
    const meta = Array.from(li.querySelectorAll('.meta'));
    const typeMeta = meta.find(m => /\bType:\b/i.test(m.textContent || ''));
    const typeText = typeMeta ? (typeMeta.textContent.split(':')[1] || '').trim().toLowerCase() : '';
    if (!typeText) return;
    li.dataset.type = typeText; // project | engagement | thoughtpiece
    types.add(typeText);

    // Add a small top-right badge showing the type
    const badge = document.createElement('span');
    badge.className = 'type-badge';
    badge.textContent = typeText.charAt(0).toUpperCase() + typeText.slice(1);
    li.appendChild(badge);
    // Hide original Type meta line once badge is added
    if (typeMeta) typeMeta.classList.add('is-hidden');

    // Build corner tag strip: first tag is RAI (colored), rest are project tags
    const tagsMeta = meta.find(m => /\bTags:\b/i.test(m.textContent || ''));
    const codes = tagsMeta ? Array.from(tagsMeta.querySelectorAll('code')).map(c => c.textContent.trim()) : [];
    const raiFirst = codes.length ? codes[0] : '';
    const raiSlug = (raiFirst || '').toLowerCase();
    const projectTags = codes.slice(1);

    if (raiFirst || projectTags.length) {
      const strip = document.createElement('div');
      strip.className = 'corner-tags';
      if (raiFirst) {
        const raiChip = document.createElement('span');
        raiChip.className = 'tag-chip';
        raiChip.textContent = raiFirst;
        strip.appendChild(raiChip);
      }
      projectTags.forEach((tag) => {
        const chip = document.createElement('span');
        chip.className = 'tag-chip';
        chip.textContent = tag;
        strip.appendChild(chip);
      });
      li.appendChild(strip);
      if (tagsMeta) tagsMeta.classList.add('is-hidden');
    }

    // No full-card tint/border for pinned items
  });
})();
</script>
