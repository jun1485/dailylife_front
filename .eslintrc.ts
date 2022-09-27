module.exports = {
  env: {
    browser: true,
    es2021: true,
  },

  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'airbnb',
    'airbnb-typescript',
    'prettier',
  ],
  overrides: [],

  parserOptions: {
    ecmaVersion: 'latest',
    project: './tsconfig.json',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          'plugin: prettier/recommended',
        ],
        paths: ['src'],
        moduleDirectory: ['src', 'node_modules'],
      },
    },
  },
  plugins: ['react'],
  rules: {
    'react/prop-types': 'off',

    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-alert': 'off',
    'react/react-in-jsx-scope': 'off',
    'linebreak-style': 0,
    indent: 0,
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', ['parent', 'sibling'], 'index'],
        pathGroups: [
          {
            pattern: 'angular',
            group: 'external',
            position: 'before',
          },
        ],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'always',
      },
    ],
  },
};
