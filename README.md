<p align="center">
  <img src="website/static/images/govtech-white.gif" alt="GovTech" width="300" />
</p>

<h1 align="center">Responsible AI Playbook</h1>

<p align="center">
  Practical guidance for responsible AI in the Singapore Public Service.<br/>
  Maintained by <strong>GovTech AI Practice</strong>.
</p>

<p align="center">
  <a href="https://playbooks.aip.gov.sg/responsibleai/"><strong>Production</strong></a> · <a href="https://govtech-responsibleai.github.io/playbook/"><strong>Staging</strong></a>
</p>

---

## Quick start

```bash
cd website
npm install
npm run start        # dev server at localhost:3000
npm run build        # production build
```

## Repository structure

```text
website/             Docusaurus 3 site source
├── docs/            Reader-facing content (MD/MDX)
├── src/components/  React components (OurWork, FeedbackWidget)
├── src/pages/       Custom pages (landing page)
└── static/          Images, favicons, GIFs
.github/workflows/   CI/CD (staging deploy)
.githooks/           Shared pre-commit hooks
.agents/skills/      Claude Code skills (write-page, polish-page)
AGENTS.md            Repository instructions for coding assistants
CLAUDE.md            Identical to AGENTS.md (enforced by hook)
CONTRIBUTING.md      Contributor workflow and PR expectations
```

## Local hooks

```bash
git config core.hooksPath .githooks
```

Enforces:
- `AGENTS.md` must be staged when repository-level files change.
- `CLAUDE.md` and `AGENTS.md` must have identical content.

## Local hooks

Optional shared hooks can be enabled with:

```bash
git config core.hooksPath .githooks
```

The pre-commit hook blocks commits that touch repository-level files (config, workflows, `website/src/`, etc.) unless `AGENTS.md` is also staged. If you reviewed `AGENTS.md` and no update is needed:

```bash
AGENT_GUIDES_REVIEWED=1 git commit
```

See `CONTRIBUTING.md` for the full list of monitored paths.

## Deployment

| Environment | Trigger | `DOCUSAURUS_SITE_URL` | `DOCUSAURUS_BASE_URL` |
|---|---|---|---|
| Staging | Merge to `staging` | `https://govtech-responsibleai.github.io` | `/playbook/` |
| Production | Merge to `main` | `https://playbooks.aip.gov.sg` | `/responsibleai/` |

## Contributing

We welcome contributions! See [CONTRIBUTING.md](CONTRIBUTING.md) for branching, PR workflow, and page authoring details.

### Made possible by

<a href="https://github.com/govtech-responsibleai/playbook/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=govtech-responsibleai/playbook&max=100&columns=12" width="200" />
</a>

---

<p align="center">
  <sub>Built with <a href="https://docusaurus.io/">Docusaurus</a></sub>
</p>
