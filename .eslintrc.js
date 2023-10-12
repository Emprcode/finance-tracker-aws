module.exports = {
  settings: {
    react: { version: 'detect' },
  },
  env: {
    browser: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: 2021,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  extends: ['eslint:recommended', 'prettier'],
  rules: {
    'no-console': 'error',
  },
  overrides: [
    {
      files: ['**/*.+(ts|tsx)'],
      env: {
        browser: true,
      },
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.eslint.json',
      },
      plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:prettier/recommended',
      ],
      rules: {
        'react/jsx-uses-react': 'off',
        "react/react-in-jsx-scope": "off",
        'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
        '@typescript-eslint/no-unused-vars': [
          'error',
          { argsIgnorePattern: '^_' },
        ],
        '@typescript-eslint/ban-ts-comment': 'off',
        'react/display-name': 'off',
        '@typescript-eslint/no-explicit-any': 'warn',
        'react/prop-types': 'off',
      },
    },
    {
      files: ['**/__tests__/**'],
      env: { jest: true },
      plugins: ['jest', 'testing-library', 'prettier'],
      extends: [
        'plugin:jest/recommended',
        // 'plugin:jest-dom/recommended',
        'plugin:testing-library/react',
      ],
      rules: {
        '@typescript-eslint/no-var-requires': 'warn',
      },
    },
  ],
};
