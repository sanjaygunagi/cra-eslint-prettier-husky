module.exports = {
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  extends: ['plugin:react/recommended', 'plugin:prettier/recommended'],
  plugins: [],
  //custom rules here
  rules: {
    'react/prop-types': 1,
    'react/react-in-jsx-scope': 'off',
    'no-console': 1,
  },
};
