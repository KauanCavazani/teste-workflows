module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    "@typescript-eslint/no-unused-vars": [
      "warn", 
      { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }
    ],

    // Não permite eval (transforma texto em código)
    "no-eval": "error",

    // não permite funções vazias
    "no-empty-function": "warn", 

    // não permite imports duplicados
    "no-duplicate-imports": "error",

    // permite apenas console.error e console.warn
    "no-console": [
      "warn",
      { allow: ["warn", "error"] }
    ], 

    "react-refresh/only-export-components": [
      "warn", 
      { "allowConstantExport": true }
    ]
  },
}
