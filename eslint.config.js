export default [
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
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