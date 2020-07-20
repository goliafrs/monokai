module.exports = {
  root: true,
  extends: ['eslint:recommended'],
  env: {
    es6: true,
    node: true,
    jest: true
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    semi: ['error', 'never'],
    'no-extra-semi': 'error',

    curly: ['error', 'all'],

    'brace-style': 'error',

    'require-atomic-updates': 'off',
    'no-useless-catch': 'off',

    // spacing
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
        VariableDeclarator: 'first'
      }
    ],
    'no-trailing-spaces': 'error',
    'block-spacing': 'error',
    'keyword-spacing': [
      'error',
      {
        before: true,
        after: true
      }
    ],

    // comma
    'comma-style': ['error', 'last'],
    'comma-dangle': ['error', 'never'],
    'comma-spacing': [
      'error',
      {
        before: false,
        after: true
      }
    ],

    // functions
    'function-paren-newline': ['error', { minItems: 4 }],
    'func-call-spacing': ['error', 'never'],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always'
      }
    ],

    // objects
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: {
          consistent: true,
          multiline: true,
          minProperties: 2
        },
        ObjectPattern: {
          consistent: true,
          multiline: true
        },
        ImportDeclaration: {
          consistent: true,
          multiline: true
        },
        ExportDeclaration: {
          consistent: true,
          multiline: true
        }
      }
    ],
    'object-curly-spacing': ['error', 'always'],
    'object-property-newline': ['error', { allowAllPropertiesOnSameLine: false }],
    'no-whitespace-before-property': 'error',

    // arrays
    'array-bracket-newline': ['error', { multiline: true }],
    'array-bracket-spacing': ['error', 'always'],
    'array-element-newline': ['error', 'consistent'],

    // lines
    'linebreak-style': ['error', 'unix'],
    'lines-between-class-members': ['error', 'always'],
    'no-multiple-empty-lines': ['error', { max: 1 }],

    // comments
    'spaced-comment': ['error', 'always'],

    // quotes
    quotes: ['error', 'single'],
    'quote-props': ['error', 'as-needed'],
    'jsx-quotes': ['error', 'prefer-single'],

    // variables
    'prefer-const': [
      'error',
      {
        destructuring: 'all',
        ignoreReadBeforeAssign: true
      }
    ]
  }
}