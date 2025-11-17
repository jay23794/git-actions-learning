import js from "@eslint/js";

export default [
  js.configs.recommended,

  {
    files: ["**/*.js", "**/*.cjs", "**/*.mjs"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
    },
    rules: {
      "no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
      "no-unused-private-class-members": "error",
      "no-console": "error",
      "no-empty-function": "warn"
    }
  }
];
