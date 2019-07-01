module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/strongly-recommended',
    'eslint:recommended'
  ],
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'no-unused-vars': 1,
    'vue/require-default-prop': 'warning',
    'vue/attributes-order': 'error',
    'vue/no-confusing-v-for-v-if': 'error',
    'vue/order-in-components': 'error',
    'vue/no-use-v-if-with-v-for': 'error',
    'vue/no-v-html': 'warning',
    'vue/prop-name-casing': 'error',
    'vue/script-indent': ['error',4,{'baseIndent': 1}],
    'vue/html-indent': ['error',4,{'baseIndent': 1}],
    'vue/html-quotes': 'error',
    'vue/html-closing-bracket-newline': ['error', {
      'singleline': 'never',
      'multiline': 'always'
    }],
    'vue/html-closing-bracket-spacing': ['error', {
      'startTag': 'never',
      'endTag': 'never',
      'selfClosingTag': 'never'
    }],
    'comma-dangle': ['error', 'never'],
    'vue/no-side-effects-in-computed-properties': 'warning'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
