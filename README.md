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
    "removeComments": true
  },
  "references": [{ "path": "./tsconfig.node.json" }],
  "include": [
    "src",
    "vite.config.ts",
    "vitest.config.ts"
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
