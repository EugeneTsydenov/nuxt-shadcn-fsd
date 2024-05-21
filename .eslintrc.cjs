require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'plugin:vue/recommended',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    'prettier',
    "@feature-sliced",
    "plugin:@conarti/feature-sliced/recommended"
  ],
  plugins: ['prettier', 'simple-import-sort'],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'vue/multi-word-component-names': 'off',
    'vue/no-reserved-props': 'off',
    "prettier/prettier": "error",
    'max-len': 'off',
    'consistent-return': 'off',
    'no-shadow': 'off',
    'no-param-reassign': 'warn',
    'no-template-curly-in-string': 'off',
    'no-console': ['warn', { allow: ['info', 'error'] }],
    'sort-imports': 'off',
    'import/order': 'off',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // External packages:
          ['^vue', '^@?\\w'],
          // Internal packages:
          ['^@(siberiacancode-core/.*|$)'],
          // Alias imports:
          ['^@(([\\/.]?\\w)|assets|test-utils)'],
          // Side effect imports:
          ['^\\u0000'],
          // Parent imports:
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          // Other relative imports:
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          // Style imports:
          ['^.+\\.s?css$']
        ]
      }
    ]
  }
}
