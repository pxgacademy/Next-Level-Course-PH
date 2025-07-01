## ESLint, Prettier, VS Code integration এবং Git commit hook

---

## ✅ 1. `eslint.config.mjs`

```js
import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    plugins: { js },
    extends: ["js/recommended"],
    rules: {
      // Code quality
      "no-unused-vars": "error",
      "no-undef": "error",
      "prefer-const": "error",
      "no-console": "warn",
      "eqeqeq": ["error", "always"],
      "no-var": "error",
      "curly": ["error", "all"],
      "consistent-return": "error",
      "no-duplicate-imports": "error",
      "object-shorthand": ["error", "always"],
      "arrow-body-style": ["error", "as-needed"],
      "no-unneeded-ternary": "error",

      // Formatting
      "semi": ["error", "always"],
      "quotes": ["error", "single", { avoidEscape: true }],
      "comma-dangle": ["error", "always-multiline"],
      "indent": ["error", 2],
      "brace-style": ["error", "1tbs", { allowSingleLine: true }],
      "space-before-blocks": ["error", "always"],
      "keyword-spacing": ["error", { before: true, after: true }],
      "space-infix-ops": "error",

      // Complexity control
      "max-lines": ["warn", { max: 300, skipBlankLines: true, skipComments: true }],
      "complexity": ["warn", 10],
      "max-params": ["warn", 4]
    },
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    languageOptions: {
      globals: globals.browser,
    },
  },
  tseslint.configs.recommended,
]);
```

---

## ✅ 2. `.prettierrc` (Prettier config)

```json
{
  "semi": true,
  "singleQuote": true,
  "trailingComma": "all",
  "printWidth": 100,
  "tabWidth": 2,
  "arrowParens": "avoid"
}
```

---

## ✅ 3. `.vscode/settings.json`

```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll": true,
    "source.fixAll.eslint": true
  },
  "eslint.validate": ["javascript", "typescript"],
  "prettier.enableDebugLogs": false
}
```

---

## ✅ 4. Git Hook (with Husky)

### 4.1. Install tools:

```bash
pnpm add -D husky lint-staged
```

### 4.2. Enable Husky:

```bash
npx husky install
```

Then add to `package.json`:

```json
{
  "scripts": {
    "prepare": "husky install"
  },
  "lint-staged": {
    "**/*.{js,ts,tsx,json}": [
      "eslint --fix",
      "prettier --write"
    ]
  }
}
```

### 4.3. Create pre-commit hook:

```bash
npx husky add .husky/pre-commit "npx lint-staged"
```

---

## ✅ 5. Install Dependencies

```bash
pnpm add -D eslint prettier typescript @eslint/js typescript-eslint globals
```

---

## 🔚 ফলাফল:

* Auto lint + fix on save in VS Code
* Clean commit enforced with `husky + lint-staged`
* Production-grade rules enforced automatically

