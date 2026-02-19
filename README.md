# Responsible AI Playbook

This is a playbook for Responsible AI in the Singapore Public Service, maintained by GovTech Singapore's AI Practice.

- Prod (`main`): https://playbooks.aip.gov.sg/responsibleai/
- Staging (`staging`): https://govtech-responsibleai.github.io/playbook/

## Set-up

1. Create a new virtual environment:

    ```bash
    python -m venv .venv
    source .venv/bin/activate
    ```

2. Install the dependencies:

    ```bash
    pip install -r requirements.txt
    ```

3. Run the development server:

    ```bash
    mkdocs serve --config-file playbook/mkdocs.yml
    ```

## Contributing

1. Branch off `staging`.

2. Add a new markdown file in the `playbook/docs` directory and link to it in `playbook/mkdocs.yml` under `nav`.

3. Commit and push your changes, then raise a PR into `staging` for review — this deploys to the staging URL.

4. Once approved, PR `staging` into `main` to promote to prod.

`main` should only ever receive merges from `staging`.

## Macros

Some pages use the [mkdocs-macros](https://mkdocs-macros-plugin.readthedocs.io/) plugin to render dynamic content. Page-specific data lives in `_data.yml` files alongside the page, and is rendered via macros defined in `playbook/main.py` (e.g. `render_our_work()` in `our-work/index.md`).
