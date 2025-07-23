const defaultConfig = require('@wordpress/scripts/config/webpack.config');

module.exports = {
    ...defaultConfig,
    entry: {
        'portfolio': './src/styles/index.js',
        'portfolio-style': './src/styles/index.scss'
    }
};