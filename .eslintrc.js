module.exports = {
  root: true,
  extends: ['eslint:recommended'],
  env: {
    es6: true,
    node: true,
    browser: true
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    semi: ['error', 'never'],
    quotes: ['error', 'single'],
    'quote-props': ['error', 'as-needed'],
    indent: ['error', 2, { SwitchCase: 1 }],
    'function-paren-newline': ['error', 'consistent'],
    'object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
    'object-curly-newline': ['error', { consistent: true, minProperties: 2 }],
    'object-curly-spacing': ['error', 'always'],
    'array-bracket-newline': ['error', 'consistent'],
    'array-bracket-spacing': ['error', 'always'],
    'array-element-newline': ['error', { minItems: 2 }],
    'linebreak-style': ['error', 'unix'],
    'jsx-quotes': ['error', 'prefer-single'],
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'comma-dangle': ['error', 'never'],
    'brace-style': 'error'
  }
}
