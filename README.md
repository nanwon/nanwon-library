# The Library of Nanwon

Portfolio deployment repository. The owner approved public repository visibility and GitHub Pages hosting on 2026-09-13.

`out/` contains the static export of the portfolio, approved for publication by its owner on 2026-09-13. Raw career archives and working drafts are not included.

The website requests search exclusion with `noindex`; this is not access control. The public GitHub repository can be discovered independently.

GitHub Pages publishes the `docs` directory on `main`. Regenerate it from the latest `out` export with `node prepare-pages.mjs` (archive the previous docs directory first), then commit and push. GitHub deploys the updated directory to the same website address.
