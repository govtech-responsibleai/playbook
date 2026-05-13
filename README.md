# Responsible AI Playbook

This is a playbook for Responsible AI in the Singapore Public Service, maintained by GovTech Singapore's AI Practice.

- [Prod (`main`)](https://playbooks.aip.gov.sg/responsibleai/)
- [Staging (`staging`)](https://govtech-responsibleai.github.io/playbook/)

## Repository structure

This repository uses **Docusaurus 3** for local development and deployment. MkDocs is deprecated and should not be used for new work on this branch.

- `website/`: Docusaurus site source
- `.github/workflows/pages-staging.yml`: GitHub Actions workflow for the staging deployment
- `AGENTS.md`: canonical repository instructions for coding assistants

## Set-up

1. Install dependencies:

   ```bash
   cd website
   npm install
   ```

2. Run the development server:

   ```bash
   npm run start
   ```

3. Create a production build:

   ```bash
   npm run build
   ```

## Contributing

1. Branch off `staging`.

2. Add or update documentation in `website/docs`.

3. If you add a new page, update `website/sidebars.ts` and set `sidebar_position` in the page frontmatter.

4. Validate changes locally with `npm run build`. For visible changes, also review them in the local dev server with `npm run start`.

5. Commit and push your changes, then raise a PR into `staging` for review. Pushes to `staging` trigger the GitHub Actions workflow that deploys the staging site.

6. Once approved, merge `staging` into `main` to promote to production.

`main` should only ever receive merges from `staging`.

## Deployment

GitHub Actions deployment is defined in:

- `.github/workflows/pages-staging.yml`: triggered by pushes to `staging`, builds with `DOCUSAURUS_SITE_URL=https://govtech-responsibleai.github.io` and `DOCUSAURUS_BASE_URL=/playbook/`

Production is not currently deployed via GitHub Actions. When producing a production build, use `DOCUSAURUS_SITE_URL=https://playbooks.aip.gov.sg` and `DOCUSAURUS_BASE_URL=/responsibleai/`.

The staging workflow builds from `website/` with `npm run build` and publishes `website/build`.

Updating `README.md` does not affect deployment unless the workflow file or site build configuration also changes.
