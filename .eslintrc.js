module.exports = {
  root: true,
  env: {
    node: true,
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard',
    '@vue/typescript',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'indent': [1, 4, { 'SwitchCase': 1 }],
    'space-before-function-paren': [1, { 'anonymous': 'always', 'named': 'always', 'asyncArrow': 'always' }],
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
}
