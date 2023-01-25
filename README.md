# Miguel Angel's site

## Vite + React + TypeScript setup

```bash
npm create vite@latest
```

* TypeScript configuration

<details>
<summary>tsconfig.json</summary>

```json
{
  "compilerOptions": {
    "sourceMap": true,
    "target": "ESNext",
    "useDefineForClassFields": true,
    "lib": ["DOM", "DOM.Iterable", "ESNext"],
    "allowJs": false,
    "skipLibCheck": true,
    "esModuleInterop": false,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "module": "ESNext",
    "moduleResolution": "Node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "removeComments": true,
    "types": ["node", "@testing-library/jest-dom", "vitest/globals"]
  },
  "references": [{ "path": "./tsconfig.node.json" }],
  "include": [
    "src",
    "vite.config.ts",
    "vitest.config.ts",
    "setupTest.ts"
  ],
  "exclude": [
    "./node_modules/**/*"
  ]
}
```
</details>

## Styled components

```bash
npm i -SE styled-components
```

```bash
npm i -DE @types/styled-components
```

## Eslint & Prettier setup

* Installation

```bash
npm i -DE \
    eslint \
    @typescript-eslint/parser \
    @typescript-eslint/eslint-plugin \
    eslint-import-resolver-typescript \
    eslint-plugin-react \
    eslint-plugin-react-hooks \
    eslint-plugin-jsx-a11y \
    eslint-plugin-import
```

```bash
npm i -DE \
    prettier \
    prettier-eslint \
    eslint-config-prettier \
    eslint-plugin-prettier
```

* Configuration
>#### [.eslintrc](.eslintrc)

>#### [.prettierrc](.prettierrc)

## Testing setup

* Installation

```bash
npm i -DE \
  vitest \
  @testing-library/react \
  @testing-library/jest-dom \
  @testing-library/user-event \
  jsdom \
  @vitest/coverage-c8
```

* Configuration

```ts
// setupTest.ts

import { expect } from 'vitest';
import matchers from '@testing-library/jest-dom/matchers';

expect.extend(matchers);
```

```ts
// vite.config.ts

/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTest.ts',
  },
});

```

## Storybook support

* Installation

```bash
npx storybook init
```
