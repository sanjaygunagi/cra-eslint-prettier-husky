module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  parserOptions: {
    sourceType: 'module',
  },
  // extends: ['plugin:react/recommended', 'plugin:prettier/recommended'],
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:react-hooks/recommended'],
  plugins: [],
  // custom rules here
  rules: {
    'react/prop-types': 1,
    'react/react-in-jsx-scope': 'off',
    'no-console': 1,
    'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: false }],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
