const EmojiFaviconPlugin = require('./plugin');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './index',
  plugins: [
    new EmojiFaviconPlugin({
      emoji: 'carrot',
      useSystem: false
    }),
    new HtmlPlugin()
  ]
};