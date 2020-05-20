const withCSS = require('@zeit/next-css');
const withImages = require('next-images');
module.exports = withCSS({
  // Set this to true if you use CSS modules.
  // See: https://github.com/css-modules/css-modules
  cssModules: false})
 module.exports= {webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg)$/i,
      include: [dir],
      use: [
        {
          loader: 'file-loader'
        }
      ]
    });
    return config
  }}
  module.exports= withImages() 
