# \<html-import> [![Build Status](https://travis-ci.org/grislyeye/html-import.svg?branch=master)](https://travis-ci.org/grislyeye/html-import) [![Known Vulnerabilities](https://snyk.io/test/github/grislyeye/html-import/badge.svg?targetFile=package.json)](https://snyk.io/test/github/grislyeye/html-import?targetFile=package.json)

Dynamically import HTML documents and fragments. This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

## Installation
```bash
npm i html-import-wc
```

## Usage
```html
<script type="module">
  import 'html-import-wc/html-import.js';
</script>

<html-import src="https://example.org/to-import#fragment"></html-import>
```

## Linting with ESLint, Prettier, and Types
To scan the project for linting errors, run
```bash
npm run lint
```

You can lint with ESLint and Prettier individually as well
```bash
npm run lint:eslint
```
```bash
npm run lint:prettier
```

To automatically fix many linting errors, run
```bash
npm run format
```

You can format using ESLint and Prettier individually as well
```bash
npm run format:eslint
```
```bash
npm run format:prettier
```

## Testing with Karma
To run the suite of karma tests, run
```bash
npm run test
```

To run the tests in watch mode (for <abbr title="test driven development">TDD</abbr>, for example), run

```bash
npm run test:watch
```


## Tooling configs

For most of the tools, the configuration is in the `package.json` to reduce the amount of files in your project.

If you customize the configuration a lot, you can consider moving them to individual files.

## Local Demo with `es-dev-server`
```bash
npm start
```
To run a local development server that serves the basic demo located in `demo/index.html`
