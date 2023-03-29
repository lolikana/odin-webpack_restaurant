/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import path from 'path';
import common from 'webpack.common.js';
import { merge } from 'webpack-merge';

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist')
    },
    hot: true,
    open: true,
    port: 4000,
    compress: true,
    historyApiFallback: true
  },
  optimization: {
    runtimeChunk: 'single'
  }
});
