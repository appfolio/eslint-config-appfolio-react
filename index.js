module.exports = {
  'extends': [
    'airbnb',
    'appfolio-base'
  ],
  rules: {
    'react/prefer-stateless-function': 0,
    'react/prop-types': 1,
    'react/sort-comp': [1, {
      'order': [
        'static-methods',
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
