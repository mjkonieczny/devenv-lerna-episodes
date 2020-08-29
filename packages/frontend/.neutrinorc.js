const airbnb = require('@neutrinojs/airbnb');
const react = require('@neutrinojs/react');
const jest = require('@neutrinojs/jest');
const { eslint, babel, typescript, jestConfig } = require('../../environment/neutrino')

module.exports = {
  options: {
    root: __dirname,
  },
  use: [
    airbnb({
      eslint: eslint({
        rules: {
          'react/prop-types': 0,
          'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.ts'] }],
        }
      })
    }),
    react({
      html: {
        title: 'frontend'
      },
      babel: babel(),
    }),
    jest(jestConfig()),
    typescript(),
  ],
};
