# Responsible AI Playbook

This is a playbook for Responsible AI in the Singapore Public Service, maintained by GovTech Singapore's AI Practice. 

This is under active development.

## Set-up

1. Create a new virtual environment:

    ```bash
    python -m venv .venv
    ```

2. Install the dependencies:

    ```bash
    pip install -r requirements.txt
    ```

3. Run the development server:

    ```bash
    cd playbook
    mkdocs serve
    ```

## Adding new content

1. Add a new markdown file in the `playbook/src` directory.

2. Then add a link to it in the `mkdocs.yml` file.

3. Build the site by running this command at the root directory:

```bash
mkdocs build --config-file playbook/mkdocs.yml
```

4. Commit and push your changes.

For external collaborators, please create a separate branch and raise a PR to merge. 
