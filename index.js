module.exports = {
  extends: ['airbnb', '@appfolio/eslint-config-appfolio-base'],
  env: { browser: true },
  rules: {
    'class-methods-use-this': 'off',
    'jsx-a11y/anchor-is-valid': ['error', { components: ['Link'], specialLink: ['to'] }],
    'react/forbid-prop-types': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prefer-stateless-function': 'off',
    'react/prop-types': 'warn',
    'react/require-default-props': 'off',
    'react/sort-comp': [
      'warn',
      {
        order: [
          'propTypes',
          'defaultProps',
          'static-methods',
          'state',
          'constructor',
          'everything-else',
          'lifecycle',
          'render'
        ]
      }
    ]
  },
  settings: { 'import/resolver': { webpack: {} } }
};
