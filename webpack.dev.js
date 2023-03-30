/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist')
    },
    // hot module replacement (HMR) so that changes to the code are reflected without requiring a full page refresh.
    hot: true,
    open: true,
    port: 4000,
    // Enables gzip compression for assets served by the dev server, which can improve performance by reducing the size of the files that are sent over the network.
    compress: true
    // Redirects all 404 errors to the index.html file, which is useful when using client-side routing with frameworks like React Router.
    // historyApiFallback: true
  },
  optimization: {
    // creates a separate chunk for the runtime code, which can improve caching and reduce the size of the main bundle.
    runtimeChunk: 'single',
    minimize: true
  }
});
