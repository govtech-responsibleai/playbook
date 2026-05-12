#!/usr/bin/env python3
"""
MkDocs → Docusaurus content migration script.

Converts playbook/docs/ content to website/docs/, handling:
  - Admonitions (!!! / ???)
  - Tabbed content (=== "Label")
  - Frontmatter (hide directives, sidebar metadata)
  - Image paths (../images/ → /images/)
  - HTML attributes (class= → className=, remove markdown attr) in MDX files
  - Copies all images to website/static/images/

Usage:
  python website/scripts/migrate.py
"""

import json
import os
import re
import shutil
from pathlib import Path

try:
    import yaml
except ImportError:
    yaml = None

REPO_ROOT = Path(__file__).resolve().parents[2]
SRC_DOCS = REPO_ROOT / "playbook" / "docs"
DST_DOCS = REPO_ROOT / "website" / "docs"
SRC_IMAGES = SRC_DOCS / "images"
DST_IMAGES = REPO_ROOT / "website" / "static" / "images"

# ─── Admonition type mapping ─────────────────────────────────────────────────

ADMON_TYPES = {
    "info": "info",
    "note": "note",
    "warning": "warning",
    "caution": "warning",
    "danger": "danger",
    "tip": "tip",
    "hint": "tip",
    "success": "tip",
    "check": "tip",
    "example": "note",
    "abstract": "info",
    "summary": "info",
    "question": "info",
    "help": "info",
    "faq": "info",
    "bug": "danger",
    "failure": "danger",
    "quote": "note",
    "cite": "note",
}

# ─── Nav metadata (derived from mkdocs.yml) ──────────────────────────────────

NAV = [
    ("start-here/choose-your-path.md",               "Choose your path",                              1),
    ("start-here/minimum-bar-before-launch.md",       "Minimum bar before launch",                     2),
    ("start-here/lifecycle.md",                       "AI evaluation and safety lifecycle",            3),
    ("start-here/application-types.md",               "Common AI application types",                   4),
    ("start-here/glossary.md",                        "Glossary",                                      5),
    ("understanding-risks/index.md",                  "Overview",                                      1),
    ("understanding-risks/intended-prohibited-use.md","Intended and prohibited use",                   2),
    ("understanding-risks/application-risk-profile.md","Application risk profile",                    3),
    ("understanding-risks/risk-categories.md",        "Risk categories",                               4),
    ("understanding-risks/agentic-risk-model.md",     "Agentic risk model",                            5),
    ("understanding-risks/agentic-risk-categories.md","Agentic risk categories",                       6),
    ("understanding-risks/launch-criteria-risk-register.md","Launch criteria and risk register",       7),
    ("evaluating-ai-systems/index.md",                "Overview",                                      1),
    ("evaluating-ai-systems/functional.md",           "Functional evals",                              2),
    ("evaluating-ai-systems/safety.md",               "Safety evals",                                  3),
    ("evaluating-ai-systems/robustness.md",           "Robustness evals",                              4),
    ("evaluating-ai-systems/fairness.md",             "Fairness evals",                                5),
    ("evaluating-ai-systems/privacy.md",              "Privacy evals",                                 6),
    ("evaluating-ai-systems/agentic-evals.md",        "Agentic evals",                                 7),
    ("evaluating-ai-systems/methods.md",              "Evaluation methods",                            8),
    ("mitigations-controls/index.md",                 "Overview",                                      1),
    ("mitigations-controls/guardrail-architecture.md","Guardrail architecture",                        2),
    ("mitigations-controls/pii-guardrails.md",        "PII guardrails",                                3),
    ("mitigations-controls/content-safety.md",        "Content safety guardrails",                     4),
    ("mitigations-controls/prompt-injection-jailbreak.md","Prompt injection and jailbreak guardrails", 5),
    ("mitigations-controls/hallucination-grounding.md","Hallucination and grounding guardrails",       6),
    ("mitigations-controls/off-topic-scope.md",       "Off-topic and scope guardrails",                7),
    ("mitigations-controls/system-prompt-leakage.md", "System-prompt leakage guardrails",              8),
    ("mitigations-controls/threshold-tuning.md",      "Threshold tuning",                              9),
    ("mitigations-controls/measuring-impact.md",      "Measuring guardrail impact",                   10),
    ("mitigations-controls/building-your-own-guardrail.md","Building your own guardrail",             11),
    ("mitigations-controls/production-integration.md","Production integration",                       12),
    ("mitigations-controls/agentic-safety-controls.md","Agentic safety controls",                     13),
    ("mitigations-controls/monitoring-incident-response.md","Monitoring and incident response",        14),
    ("tools/index.md",                                "Overview",                                      1),
    ("tools/litmus.md",                               "Litmus",                                        2),
    ("tools/sentinel.md",                             "Sentinel",                                      3),
    ("tools/lionguard.md",                            "LionGuard",                                     4),
    ("tools/rabakbench.md",                           "RabakBench",                                    5),
    ("tools/minorbench.md",                           "MinorBench",                                    6),
    ("tools/responsible-ai-benchmark.md",             "Responsible AI Benchmark",                      7),
    ("tools/pii-test-set-template.md",                "PII test set template",                         8),
    ("tools/eval-dataset-template.md",                "Eval dataset template",                         9),
    ("tools/human-annotation-template.md",            "Human annotation template",                    10),
    ("tools/llm-as-judge-template.md",                "LLM-as-judge template",                        11),
    ("tools/guardrail-tuning-template.md",            "Guardrail tuning template",                    12),
    ("tools/agentic-risk-assessment-template.md",     "Agentic risk assessment template",             13),
    ("deep-dives/index.md",                           "Overview",                                      1),
    ("deep-dives/safety.md",                          "Safety",                                        2),
    ("deep-dives/fairness.md",                        "Fairness",                                      3),
    ("deep-dives/robustness.md",                      "Robustness",                                    4),
    ("deep-dives/privacy.md",                         "Privacy",                                       5),
    ("deep-dives/interpretability.md",                "Interpretability",                              6),
    ("deep-dives/llm-evaluation.md",                  "LLM evaluation",                                7),
    ("deep-dives/guardrails.md",                      "Guardrails",                                    8),
    ("deep-dives/agentic-safety.md",                  "Agentic safety",                                9),
    ("resources.md",                                  "Papers and external tools",                    10),
    ("our-work/index.md",                             "Our Work",                                     11),
    ("getting-started/contributing.md",               "Contributing",                                 12),
    ("contributing/page-standards.md",                "Page standards",                               13),
]

NAV_LABELS = {path: label for path, label, _ in NAV}
NAV_POSITIONS = {path: pos for path, _, pos in NAV}


# ─── Frontmatter helpers ──────────────────────────────────────────────────────

def split_frontmatter(text):
    """Return (raw_fm_lines, body) where raw_fm_lines is between the --- delimiters."""
    if not text.startswith("---"):
        return [], text
    lines = text.split("\n")
    end = None
    for i in range(1, len(lines)):
        if lines[i].strip() == "---":
            end = i
            break
    if end is None:
        return [], text
    return lines[1:end], "\n".join(lines[end + 1:])


def parse_hide(fm_lines):
    """Extract hide: [navigation, toc] values from raw frontmatter lines."""
    hide_nav = False
    hide_toc = False
    for line in fm_lines:
        if re.match(r"^\s*hide\s*:", line):
            rest = "\n".join(fm_lines)
            if "navigation" in rest:
                hide_nav = True
            if "toc" in rest:
                hide_toc = True
            break
        if re.match(r"^\s*-\s*(navigation|toc)", line):
            val = re.sub(r"^\s*-\s*", "", line).strip()
            if val == "navigation":
                hide_nav = True
            elif val == "toc":
                hide_toc = True
    return hide_nav, hide_toc


def build_frontmatter(rel_path, fm_lines):
    """Build Docusaurus frontmatter from the source frontmatter."""
    hide_nav, hide_toc = parse_hide(fm_lines)

    label = NAV_LABELS.get(rel_path)
    position = NAV_POSITIONS.get(rel_path)

    lines = ["---"]
    if label:
        lines.append(f'sidebar_label: "{label}"')
    if position is not None:
        lines.append(f"sidebar_position: {position}")
    if hide_nav:
        lines.append("displayed_sidebar: null")
    if hide_toc:
        lines.append("hide_table_of_contents: true")
    lines.append("---")
    return "\n".join(lines)


# ─── Admonition conversion ────────────────────────────────────────────────────

def convert_admonitions(text):
    """Convert MkDocs !!! / ??? admonitions to Docusaurus ::: directives."""
    lines = text.split("\n")
    result = []
    i = 0

    while i < len(lines):
        line = lines[i]
        m = re.match(r'^(\?\?\?|!!!)\s+(\w+)(?:\s+"([^"]*)")?$', line)
        if m:
            is_collapsible = m.group(1) == "???"
            admon_type = m.group(2).lower()
            title = m.group(3)

            docusaurus_type = ADMON_TYPES.get(admon_type, "info")
            if is_collapsible:
                docusaurus_type = "details"

            i += 1
            # Skip optional blank line after header
            if i < len(lines) and lines[i].strip() == "":
                i += 1

            # Collect 4-space-indented content
            content_lines = []
            while i < len(lines):
                current = lines[i]
                if current.startswith("    "):
                    content_lines.append(current[4:])
                    i += 1
                elif current.strip() == "":
                    # Include blank line only if followed by more indented content
                    j = i + 1
                    while j < len(lines) and lines[j].strip() == "":
                        j += 1
                    if j < len(lines) and lines[j].startswith("    "):
                        content_lines.append("")
                        i += 1
                    else:
                        i += 1
                        break
                else:
                    break

            # Trim trailing blanks
            while content_lines and content_lines[-1].strip() == "":
                content_lines.pop()

            content = "\n".join(content_lines)

            if title:
                result.append(f":::{docusaurus_type}[{title}]")
            else:
                result.append(f":::{docusaurus_type}")
            result.append("")
            result.append(content)
            result.append("")
            result.append(":::")
            result.append("")
        else:
            result.append(line)
            i += 1

    return "\n".join(result)


# ─── Tab conversion ───────────────────────────────────────────────────────────

TAB_HEADER = re.compile(r'^=== "([^"]+)"$')
FENCE_OPEN = re.compile(r'^(`{3,}|~{3,})')


def convert_tabs(text):
    """Convert MkDocs === tabbed syntax to Docusaurus <Tabs> JSX.

    Tab headers inside fenced code blocks are treated as literal text.
    """
    lines = text.split("\n")
    result = []
    i = 0
    found_tabs = False
    in_fence = False

    while i < len(lines):
        line = lines[i]

        # Track fenced code block boundaries
        fence_m = FENCE_OPEN.match(line)
        if fence_m:
            in_fence = not in_fence

        m = (None if in_fence else TAB_HEADER.match(line))
        if m:
            found_tabs = True
            tabs = []

            while i < len(lines):
                tab_m = TAB_HEADER.match(lines[i])
                if not tab_m:
                    break
                label = tab_m.group(1)
                i += 1

                # Skip optional blank line after tab header
                if i < len(lines) and lines[i].strip() == "":
                    i += 1

                # Collect indented content
                content_lines = []
                while i < len(lines):
                    current = lines[i]
                    if current.startswith("    "):
                        content_lines.append(current[4:])
                        i += 1
                    elif current.strip() == "":
                        # Look ahead: stay in tab if followed by indented content
                        j = i + 1
                        while j < len(lines) and lines[j].strip() == "":
                            j += 1
                        if j < len(lines) and lines[j].startswith("    "):
                            content_lines.append("")
                            i += 1
                        elif j < len(lines) and TAB_HEADER.match(lines[j]):
                            # Blank line before next tab header — skip it and break
                            i += 1
                            break
                        else:
                            i += 1
                            break
                    else:
                        break

                # Trim trailing blanks
                while content_lines and content_lines[-1].strip() == "":
                    content_lines.pop()

                # Recursively convert admonitions within tab content
                tab_content = "\n".join(content_lines)
                tab_content = convert_admonitions(tab_content)
                tabs.append((label, tab_content))

            # Emit Tabs JSX
            result.append('<Tabs>')
            for label, content in tabs:
                value = re.sub(r"[^a-z0-9]+", "-", label.lower()).strip("-")
                result.append(f'<TabItem value="{value}" label="{label}">')
                result.append("")
                result.append(content)
                result.append("")
                result.append("</TabItem>")
            result.append("</Tabs>")
            result.append("")
        else:
            result.append(line)
            i += 1

    return "\n".join(result), found_tabs


# ─── Internal link fixes ─────────────────────────────────────────────────────

# Basenames of files that become .mdx (have tabs). These link targets need
# their .md extension changed to .mdx in all other pages.
_MDX_BASENAMES = {
    "safety",
    "agentic-evals",
    "methods",
    "pii-guardrails",
    "content-safety",
    "prompt-injection-jailbreak",
    "hallucination-grounding",
    "off-topic-scope",
    "agentic-safety-controls",
}


def fix_internal_links(text):
    """Rewrite .md links that point to pages now saved as .mdx."""
    def replace(m):
        stem = m.group(1)
        if stem in _MDX_BASENAMES:
            return stem + '.mdx'
        return m.group(0)

    # Match filename.md where filename is one of the MDX pages.
    # Use a lookbehind for / or ( to avoid matching substrings like
    # "agentic-safety.md" when "safety" is in the set.
    pattern = re.compile(
        r'(?<=[/(])(' + '|'.join(re.escape(n) for n in _MDX_BASENAMES) + r')\.md\b'
    )
    return pattern.sub(replace, text)


# ─── Image path conversion ────────────────────────────────────────────────────

# Matches both ../images/foo.png and ./images/foo.png and images/foo.png
IMG_PATH = re.compile(r'(!\[[^\]]*\]\()(?:\.\.?/)*images/([^)"]+)("?[^)]*\))')


def fix_image_paths(text):
    """Convert relative image paths to absolute /images/ paths for static serving."""
    return IMG_PATH.sub(r'\1/images/\2\3', text)


# ─── HTML fixes ───────────────────────────────────────────────────────────────

def fix_html(text, is_mdx):
    """
    Fix HTML for Docusaurus MDX compatibility, skipping fenced code blocks.

    Applied to all files:
      - <br> → <br /> (void element, MDX requires self-closing)
      - <hr> → <hr />

    Applied to MDX files only:
      - Remove <style>...</style> blocks (MkDocs-specific page-local CSS, invalid in MDX)
      - Remove `markdown` attribute from div tags
      - class= → className= in opening HTML tags
    """
    # Strip <style>...</style> and <script>...</script> blocks from MDX files.
    # These are MkDocs/Material page-local overrides; they break MDX parsing
    # and don't apply to Docusaurus anyway.
    if is_mdx:
        text = re.sub(r'<style>.*?</style>', '', text, flags=re.DOTALL)
        text = re.sub(r'<script>.*?</script>', '', text, flags=re.DOTALL)

    lines = text.split("\n")
    result = []
    in_fence = False

    for line in lines:
        if re.match(r"^\s*```", line):
            in_fence = not in_fence
        if not in_fence:
            # Self-closing void elements
            line = re.sub(r'<br\s*>', '<br />', line)
            line = re.sub(r'<hr\s*>', '<hr />', line)
            if is_mdx:
                # Remove markdown attr from HTML tags
                line = re.sub(r'\s+markdown(?=[>\s/])', '', line)
                # class= → className= in opening tags
                line = re.sub(r'(<[a-zA-Z][^>]*)\bclass=', r'\1className=', line)
        result.append(line)

    return "\n".join(result)


# ─── Our Work macro stub ──────────────────────────────────────────────────────

OUR_WORK_STUB = """\
import OurWork from '@site/src/components/OurWork';

<OurWork />
"""

def handle_our_work(body):
    """Replace the MkDocs macro call with the Docusaurus component stub."""
    return re.sub(r'\{\{\s*render_our_work\(\)\s*\}\}', OurWork_STUB_INLINE, body)

OurWork_STUB_INLINE = "<OurWork />"


# ─── Main file conversion ─────────────────────────────────────────────────────

def convert_file(src_path, dst_path, rel_path):
    text = src_path.read_text(encoding="utf-8")

    # 1. Split frontmatter
    fm_lines, body = split_frontmatter(text)

    # 2. Convert tabs (and admonitions within them)
    body, has_tabs = convert_tabs(body)

    # 3. Convert remaining top-level admonitions
    body = convert_admonitions(body)

    # 4. Fix image paths
    body = fix_image_paths(body)

    # 4b. Fix internal links (.md → .mdx where the target became MDX)
    body = fix_internal_links(body)

    # 5. HTML fixes (void elements for all files; MDX-specific for .mdx)
    is_mdx = has_tabs or "our-work" in rel_path
    body = fix_html(body, is_mdx)

    # 6. Handle Our Work macro
    if "our-work" in rel_path:
        body = handle_our_work(body)

    # 7. Build frontmatter
    fm = build_frontmatter(rel_path, fm_lines)

    # 8. Add Tabs import if needed
    tabs_import = ""
    our_work_import = ""
    if has_tabs:
        tabs_import = (
            "import Tabs from '@theme/Tabs';\n"
            "import TabItem from '@theme/TabItem';\n"
        )
    if "our-work" in rel_path:
        our_work_import = "import OurWork from '@site/src/components/OurWork';\n"

    imports = tabs_import + our_work_import
    if imports:
        output = fm + "\n\n" + imports + "\n" + body
    else:
        output = fm + "\n\n" + body

    # 9. Determine output extension and clean up the other format if it exists
    ext = ".mdx" if is_mdx else ".md"
    out_file = dst_path.with_suffix(ext)
    other_ext = ".md" if ext == ".mdx" else ".mdx"
    other_file = dst_path.with_suffix(other_ext)
    if other_file.exists():
        other_file.unlink()

    out_file.parent.mkdir(parents=True, exist_ok=True)
    out_file.write_text(output, encoding="utf-8")
    return ext


# ─── Entry point ─────────────────────────────────────────────────────────────

def main():
    print(f"Source: {SRC_DOCS}")
    print(f"Dest:   {DST_DOCS}")
    print()

    # Copy all images
    DST_IMAGES.mkdir(parents=True, exist_ok=True)
    if SRC_IMAGES.exists():
        for img in SRC_IMAGES.iterdir():
            shutil.copy2(img, DST_IMAGES / img.name)
        print(f"Copied {len(list(SRC_IMAGES.iterdir()))} images → static/images/")

    # Convert each page in the nav
    converted = 0
    skipped = 0
    for rel_path, _, _ in NAV:
        src = SRC_DOCS / rel_path
        dst = DST_DOCS / rel_path
        if not src.exists():
            print(f"  SKIP  {rel_path} (not found in source)")
            skipped += 1
            continue

        ext = convert_file(src, dst, rel_path)
        # If written as .mdx, remove the old .md placeholder if it exists
        if ext == ".mdx":
            old_md = DST_DOCS / rel_path
            if old_md.exists():
                old_md.unlink()
        print(f"  OK    {rel_path} → {Path(rel_path).with_suffix(ext)}")
        converted += 1

    print()
    print(f"Converted {converted} pages, skipped {skipped}.")


def convert_our_work_data():
    """Convert playbook/docs/our-work/_data.yml → website/src/components/OurWork/data.json."""
    import json

    src = REPO_ROOT / "playbook" / "docs" / "our-work" / "_data.yml"
    dst = REPO_ROOT / "website" / "src" / "components" / "OurWork" / "data.json"
    if not src.exists():
        print("  SKIP  _data.yml not found")
        return

    with src.open(encoding="utf-8") as f:
        data = yaml.safe_load(f) or []

    # Normalise links: [{key: url}, ...] → [{key, url}, ...]
    for item in data:
        raw_links = item.get("links") or []
        item["links"] = [
            {"key": k, "url": v}
            for entry in raw_links
            if isinstance(entry, dict)
            for k, v in entry.items()
            if v
        ]
        if item.get("tags") is None:
            item["tags"] = []

    dst.parent.mkdir(parents=True, exist_ok=True)
    dst.write_text(json.dumps(data, indent=2, ensure_ascii=False), encoding="utf-8")
    print(f"  OK    our-work/_data.yml → src/components/OurWork/data.json ({len(data)} items)")


if __name__ == "__main__":
    if yaml is None:
        import subprocess, sys
        subprocess.check_call([sys.executable, "-m", "pip", "install", "pyyaml", "-q"])
        import yaml as _yaml
        import builtins
        builtins.yaml = _yaml
    main()
    print()
    convert_our_work_data()
