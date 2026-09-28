import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,ts}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.browser },
  },
  tseslint.configs.recommended,
  {
    rules: {
      complexity: ["warn", { max: 10 }],
      "max-depth": ["warn", 3],
      "max-lines-per-function": [
        "warn",
        { max: 50, skipBlankLines: true, skipComments: true },
      ],
      "max-params": ["error", 3],
      "prefer-const": "error",
      "no-var": "error",
      eqeqeq: ["error", "always"],
      "no-console": "warn",
      "no-param-reassign": "error",
      "no-shadow": "error",
      "prefer-template": "error",
      "no-alert": "error",
    },
  },
]);
