module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'prettier',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['-', './src'],
        ],
        extensions: ['.js', '.jsx', '.json']
      }
    }
  },
  plugins: [
    'react',
    'prettier'
  ],
  rules: {
    'prettier/prettier': 'error',
    "react/jsx-filename-extension": [0],
    "import/extensions": 'off',
    "global-require": 'off',
    // "no-unused-vars": "off",
    "import/prefer-default-export": "off",
    "react/prop-types": "off",
    "react/jsx-props-no-spreading": "off",
    "no-param-reassign": "off",
    "camelcase": "off",
    "no-restricted-globals": "off",
    "no-alert": "off",
    "react/no-array-index-key": "off",
    "react/jsx-one-expression-per-line": "off",
    "no-unused-expressions": "off",
    "react/jsx-fragments": "off"
  },
};
