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
      // General best practices
      "no-unused-vars": "error",
      "no-undef": "error",
      "no-console": "warn",
      "prefer-const": "error",
      eqeqeq: ["error", "always"],
      "no-var": "error",
      curly: ["error", "all"],
      "object-shorthand": ["error", "always"],
      "no-duplicate-imports": "error",
      "arrow-body-style": ["error", "as-needed"],
      "no-multi-spaces": "error",
      "no-unneeded-ternary": "error",

      // Style preferences
      "comma-dangle": ["error", "always-multiline"],
      semi: ["error", "always"],
      quotes: ["error", "single", { avoidEscape: true }],
      indent: ["error", 2, { SwitchCase: 1 }],
      "brace-style": ["error", "1tbs", { allowSingleLine: true }],
      "space-before-blocks": ["error", "always"],
      "keyword-spacing": ["error", { before: true, after: true }],
      "space-infix-ops": "error",

      // Complexity and readability
      "max-lines": [
        "warn",
        { max: 300, skipBlankLines: true, skipComments: true },
      ],
      complexity: ["warn", 10],
      "max-params": ["warn", 4],
      "consistent-return": "error",
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
