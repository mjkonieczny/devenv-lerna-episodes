const merge = require('deepmerge');

module.exports = {
  typescript: () => (neutrino) => {
    neutrino.config.resolve.extensions.add('.tsx');
    neutrino.config.resolve.extensions.add('.ts');
    neutrino.config.module.rule('compile').test(/\.(jsx|js|tsx|ts)$/);
  },
  babel: (props = {}) => merge(
    props,
    {
      presets: ['@babel/preset-typescript'],
    }
  ),
  eslint: (props = {}) => merge(
    props,
    {
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
      },
      plugins: [
        '@typescript-eslint',
      ],
      baseConfig: {
        extends: [
          'plugin:@typescript-eslint/eslint-recommended',
          'plugin:@typescript-eslint/recommended',
        ],
        settings: {
          'import/resolver': {
            node: {
              extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
          },
        },
      },
      rules: {
        'import/extensions': [
          'error',
          'ignorePackages',
          {
            js: 'never',
            jsx: 'never',
            ts: 'never',
            tsx: 'never',
          },
        ],
        '@typescript-eslint/ban-ts-comment': 0,
        'import/prefer-default-export': 'off',
      },
    },
  ),
  jestConfig: (props = {}) => merge(
    props,
    {
      testRegex: 'test/.*.test.ts$',
      transform: {
        "^.+\\.ts$": "ts-jest"
      },
    },
  ),
};