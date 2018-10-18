module.exports = {
  'extends': [
    'airbnb',
    'appfolio-base'
  ],
  env: {
    browser: true
  },
  rules: {
    'class-methods-use-this': 0,
    'jsx-a11y/anchor-is-valid': [ 'error', {
      'components': ['Link'],
      'specialLink': ['to']
    }],
    'react/forbid-prop-types': 0,
    'react/jsx-filename-extension': 0,
    'react/prefer-stateless-function': 0,
    'react/prop-types': 1,
    'react/require-default-props': 0,
    'react/sort-comp': [1, {
      'order': [
        'static-methods',
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
}
