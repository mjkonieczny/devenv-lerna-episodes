const airbnbBase = require('@neutrinojs/airbnb-base');
const node = require('@neutrinojs/node');
const jest = require('@neutrinojs/jest');
const { eslint, babel, typescript, jestConfig } = require('../../environment/neutrino')

module.exports = {
  options: {
    root: __dirname,
  },
  use: [
    airbnbBase({
      eslint: eslint(),
    }),
    node({
      babel: babel(),
    }),
    jest(jestConfig()),
    typescript(),
  ],
};
