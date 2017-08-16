const production = require('./production'),
      development = require('./development');

const env = process.env.NODE_ENV === 'production';

module.exports = env ? production : development;