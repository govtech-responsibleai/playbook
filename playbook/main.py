from pathlib import Path
import yaml


def define_env(env):
    """Hook for mkdocs-macros-plugin.

    Exposes our-work data and a renderer that outputs the card list
    using the same structure as the Highlights/Showcase page.
    """

    root = Path(env.project_dir)
    # Data file co-located with the page for clarity
    data_path = root / "docs" / "our-work" / "_data.yml"

    def load_data():
        if not data_path.exists():
            return []
        with data_path.open("r", encoding="utf-8") as f:
            return yaml.safe_load(f) or []

    def _render_item(it, icon_map):
        t = (it.get("type") or "").strip()
        title = (it.get("title") or "").strip()
        summary = (it.get("summary") or "").strip()
        subtitle = (it.get("subtitle") or "").strip()
        rai = (it.get("rai") or "").strip()
        tags = it.get("tags") or []
        icon = (it.get("icon") or ":material-shield-check:").strip()
        links = it.get("links") or []  # ordered list of {key: url}
        pinned = bool(it.get("pinned", False))

        out = []
        # Compose tag line: RAI first, then project tags
        tag_codes = []
        if rai:
            tag_codes.append(f"`{rai}`")
        for tg in tags:
            tag_codes.append(f"`{tg}`")
        tags_line = " ".join(tag_codes)

        out.append(f"-   {icon}")
        if pinned:
            out.append("    <span class=\"pin-badge\" markdown=\"1\" title=\"Featured\">:material-pin:</span>")
        out.append(f"    **{title}**")
        if subtitle:
            out.append(f"\n    <span class=\"meta subtitle\">{subtitle}</span>")
        out.append("")
        if summary:
            out.append(f"    {summary}")
            out.append("")
        if t:
            # Keep Type for scripting, but hide by default
            out.append(f"    <span class=\"meta is-hidden\">Type: {t.capitalize()}</span>")
        if tags_line:
            out.append(f"    <span class=\"meta\">Tags: {tags_line}</span>")

        # Links row: render in specified order; support only known keys
        rendered_links = []
        for entry in links:
            if not isinstance(entry, dict):
                continue
            for key, url in entry.items():
                key = str(key).lower().strip()
                if not url:
                    continue
                icon_code = icon_map.get(key)
                if not icon_code:
                    continue
                rendered_links.append(
                    f"[{icon_code}]({url}){{ aria-label=\"{key.title()}\" title=\"{key.title()}\" }}"
                )
        if rendered_links:
            out.append("")
            out.append("    <span class=\"meta\">Find out more: ")
            out.append("    " + " ".join(rendered_links))
        out.append("")
        return out

    def render_our_work():
        items = load_data()
        lines = []
        # Allowed link icons and fallback mapping
        # Prefer Simple Icons (Insiders). If Insiders isn't enabled, these
        # shortcodes will render as text — enable Insiders to see brand icons.
        icon_map = {
            "docs": ":material-file-document-outline:",
            "paper": ":material-file-document-outline:",
            "github": ":simple-github:",
            "medium": ":simple-medium:",
            "huggingface": ":simple-huggingface:",
        }

        order = [
            ("project", "Projects"),
            ("engagement", "Engagements"),
            ("thoughtpiece", "Thoughtpieces"),
        ]
        lowered = [{**it, "type": (it.get("type") or "").strip().lower()} for it in items]
        for key, label in order:
            group = [it for it in lowered if it.get("type") == key]
            # Pinned first, then others (stable order within each)
            group.sort(key=lambda x: (not bool(x.get("pinned", False))))
            if not group:
                continue
            lines.append(f"## {label}")
            lines.append("")
            lines.append('<div class="grid cards" markdown>')
            lines.append("")
            for it in group:
                lines.extend(_render_item(it, icon_map))
            lines.append("</div>")
            lines.append("")
        return "\n".join(lines)

    env.macro(render_our_work)
