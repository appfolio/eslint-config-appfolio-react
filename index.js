module.exports = {
  extends: ['airbnb', 'appfolio-base'],
  env: {
    browser: true
  },
  rules: {
    'class-methods-use-this': 0,
    'jsx-a11y/anchor-is-valid': [2, {
      components: ['Link'],
      specialLink: ['to']
    }],

    // Relaxes the prefer-default-export rule. We often have services / apis
    // that start with a single named export which should not be the `default`.
    'import/prefer-default-export': 0,

    'react/forbid-prop-types': 0,
    'react/jsx-filename-extension': 0,
    'react/prefer-stateless-function': 0,
    'react/prop-types': 1,
    'react/require-default-props': 0,
    'react/sort-comp': [1, {
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
    }]
  },
  settings: {
    'import/resolver': {
      webpack: {}
    }
  }
};
