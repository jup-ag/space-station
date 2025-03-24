# Contributing to Jupiter Documentation

This document is a guide for contributing to the Jupiter documentation. If you are not sure what is the best approach to make changes, you can reach out to the team via [Discord](https://discord.gg/jup) or make an issue in this repository.

## Understanding the Documentation Structure

The documentation is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

- **Configuration**: The documentation configuration is located in the `docusaurus.config.js` file.
- **CSS**: The CSS files are located in the `/src/css` folder.
- **Navbar**: The navbar is located in the `/src/constant.ts` file.
- **Sidebars**: The sidebars of the dev docs are located in the `sidebars-docs.js` file.
- **Markdown files**: The content of the dev docs is located in the `/docs` folder.

For API schema:

- **Configuration**: The API schema configuration uses the `docusaurus-plugin-openapi-docs` plugin in `docusaurus.config.js`.
- **OpenAPI schema**: The OpenAPI schema is located in the `/openapi` folder.

## tldr of making changes

- To add a new page, create a new markdown file in the `/docs/**` folder based on its category.
- To add a new category, create a new folder in the `/docs` folder
  - Add it to the `sidebars-docs.js` file.
  - Add it to the `/src/constant.ts` file to add to navbar.

