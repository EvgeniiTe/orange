module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      js: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['react'],
  parser: 'babel-eslint',
  rules: {
    'linebreak-style': ['error', 'windows'],
    'react/jsx-props-no-spreading': 0,
    'comma-dangle': [
      'error',
      {
        functions: 'never',
        objects: 'only-multiline',
      }
    ],
    'import/prefer-default-export': 0,
    'react/prop-types': 0,
    'react/state-in-constructor': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'arrow-body-style': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    quotes: [
      'error',
      'single',
      { allowTemplateLiterals: true }
    ],
    'object-curly-newline': [
      'error',
      { multiline: true }
    ],
  },
};
