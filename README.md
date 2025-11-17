# 📘 GitHub Actions Setup Guide (For Node.js Project)

This guide explains **how to set up and use GitHub Actions** in this
project.\
Follow these steps whenever you create CI/CD or lint workflows.

------------------------------------------------------------------------

## ✅ 1. Folder structure for GitHub Actions

All workflows must be inside:

    .github/workflows/

Example:

    .github/
     └── workflows/
          └── node-ci.yml

If the file is NOT inside this folder → **GitHub Actions will NOT run**.

------------------------------------------------------------------------

## ✅ 2. Create a Workflow File

The workflow file must be written in **YAML**.

Example filename:

    node-ci.yml

Basic structure:

``` yaml
name: Node CI

on:
  push:
    branches: [main, development]
  pull_request:
    branches: [main, development]

jobs:
  ci:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 18
      - run: npm ci
      - run: npm run lint
      - run: npm test
```

------------------------------------------------------------------------

## ✅ 3. When Workflows Run

This workflow runs when:

### ✔ Push to `main` or `development`

    git push origin main
    git push origin development

### ✔ Opening or updating a Pull Request into `main` or `development`

### ❌ It does NOT run when:

-   You run `git pull`
-   You push to other branches (e.g., feature/login)

------------------------------------------------------------------------

## ✅ 4. Add ESLint Support (Flat Config -- ESLint v9+)

Create a file:

**eslint.config.js**

``` js
import js from "@eslint/js";

module.exports = [
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs",
      globals: {
        console: "readonly",
        process: "readonly",
        __dirname: "readonly",
        __filename: "readonly",
        Buffer: "readonly",
        module: "readonly",
        require: "readonly",
        exports: "readonly",
        global: "readonly"
      }
    },
    rules: {
      "no-unused-vars": ["error", {
        vars: "all",
        args: "after-used",
        ignoreRestSiblings: false
      }],
      "no-console": ["warn"]
    }
  }
];
```

Install ESLint:

    npm install --save-dev eslint @eslint/js

Run lint:

    npm run lint

Add to `package.json`:

``` json
"scripts": {
  "lint": "eslint .",
  "test": "echo \"No tests yet\""
}
```

------------------------------------------------------------------------

## ✅ 5. Common Commands

### Create a new branch

    git checkout -b chore/ci-lint

### Commit changes

    git add .
    git commit -m "added GitHub Actions CI + ESLint"

### Push branch

    git push -u origin chore/ci-lint

### Create Pull Request

Go to GitHub → Open PR to `development` or `main`.

------------------------------------------------------------------------

## ✅ 6. Check Workflow Runs

Go to:\
**GitHub → Actions tab**

You will see:

-   Workflow name (`Node CI`)
-   Status: ✔ success, ❌ failed, ⏳ running
-   Logs for each step

------------------------------------------------------------------------

## ✅ 7. Troubleshooting

### If workflow did NOT run:

-   Check file path: `.github/workflows/xxxxx.yml`
-   Ensure branches match
-   Ensure Actions are enabled (Settings → Actions)
-   Check for YAML indentation errors

### If ESLint fails:

-   Fix unused variables, unused functions, or console logs
-   Run `npm run lint` locally before pushing

------------------------------------------------------------------------

## 🎉 Ready!

Now your project has:

✔ GitHub Actions\
✔ CI pipeline\
✔ ESLint (new format)\
✔ Auto checks for pushes & PRs
