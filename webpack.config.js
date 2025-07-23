const defaultConfig = require('@wordpress/scripts/config/webpack.config');

module.exports = {
    ...defaultConfig,
    entry: {
        'starter': './src/styles/index.js',
        'starter-style': './src/styles/index.scss'
    }
};