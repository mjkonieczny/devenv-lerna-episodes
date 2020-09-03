const airbnbBase = require('@neutrinojs/airbnb-base');
const library = require('@neutrinojs/library');
const jest = require('@neutrinojs/jest');
const { eslint, babel, typescript, jestConfig } = require('../../environment/neutrino')

module.exports = {
  options: {
    root: __dirname,
  },
  use: [
    airbnbBase({
      eslint: eslint()
    }),
    library({
      name: 'core',
      target: 'node',
      babel: babel()
    }),
    jest(jestConfig()),
    typescript(),
  ],
};
