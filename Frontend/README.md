# Project Arcane-Fox 

[Github Repo](https://github.com/lee-stevens/Arcane-Fox)

## Frontend - React

[React](https://react.dev/)
[React API](https://react.dev/reference/react)

## Backend - GO

[GO](https://go.dev/)
[GO Docs](https://go.dev/doc/)

## Database - PostgreSQL

[PostgreSQL](https://www.postgresql.org/)
[PgAdmin](https://www.pgadmin.org/)

## Hosting

[Netlify](https://app.netlify.com/sites/arcane-fox/overview)
[Heroku](https://www.heroku.com/)

## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with Hot Module Replacement (HMR) and some ESLint rules.

## Key Notes

- SASS by default will use the deprecated css postprocessor compiler so in vite.config.ts with `api: 'modern-compiler'`
- Vite by default does not support route aliases, when we declare tsconfig.json aliases we need corresponding vite.config.ts ones, tsconfig is mainly needed so the IDE can understand the project's context
- Project is using ESM which is ECMAScript Modules (ESM) which imports like `import { fnName } from './example.js'`, this requires `"type":"module"` in package.json` which is static

## Cool Features

- Vite uses ESM which  allows the browser to handle module imports instead of bundling the whole application leading to near-instant page loads. This also allows HMR which means that your code doesn't impact any modules that your code change didn't impact allowing states to remain between page loads. Vite also pre-bundles using esbuild built in GO

## Code Practises

1. If a Component will only ever be used a maximum of 1 time then give it an `id`, otherwise, `className`
2. If something is going to be used across Features/Routes then it should go in the associated folder in the root directory
3. `.tsx`, `.scss` and any other code filetypes must always be separated into their own files with the exact same name as the Component
4. Components with an input or output must have the functions defined on individual lines within the Element declaration
5. Arrow Functions are to be used only where one statement is going to be executed, otherwise, always use curly braces
6. Immutability is priority for React's Change Detection as React depends on References, not values
7. Use Functional Components, not Class Components, that is the React way
8. Always make use of `useEffect` and `useState` for state and lifecycle management
9. Always destructure props
10. Pascal for Components, camelCase for functions and variables
11. Use `useMemo` to apply memoization to something so it only recomputes when the explicit dependencies are changed
