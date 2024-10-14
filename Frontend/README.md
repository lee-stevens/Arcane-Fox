# Project Arcane-Fox 

## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Key Notes

- SASS by default will use the deprecated css postprocessor compiler so in vite.config.ts with `api: 'modern-compiler'`
- Vite by default does not support route aliases, when we declare tsconfig.json aliases we need corresponding vite.config.ts ones, tsconfig is mainly needed so the IDE can understand the project's context
- Project is using ESM which is ECMAScript Modules (ESM) which imports like `import { fnName } from './example.js'`, this requires `"type":"module"` in package.json` which is static

## Cool Features

- Vite uses ESM which  allows the browser to handle module imports instead of bundling the whole application leading to near-instant page loads. This also allows HMR which means that your code doesn't impact any modules that your code change didn't impact allowing states to remain between page loads. Vite also pre-bundles using esbuild built in GO
