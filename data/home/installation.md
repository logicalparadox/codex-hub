---
  title: Installation
  weight: 3
  render-file: false
---

To use this theme, either clone or download as a starting point your project then customize `data/codex.json`
to meet your needs. The following templates are provided:

* **index.jade** - The home page, but can also be easily modified for any "sectioned" pages.
* **code-index.jade** - The api docs summary pages. Pulls a list of pages from the `code` plugin and display their description.
* **code.jade** - Displays the api docs for any pages which are listed as having inline documentation.
* **layout.jade** - The header/footer template for all HTML pages.

A common for GitHub projects is to use this project as the `docs` folder. Then, remove the `code` folder
provided and reference your own javascript files from in the `codex.json` file. You can view the configuration
for [chai.js](https://github.com/logicalparadox/chai/blob/master/docs/data/codex.json) for a production example.


