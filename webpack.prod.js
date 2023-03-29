/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import common from 'webpack.common.js';
import { merge } from 'webpack-merge';

module.exports = merge(common, {
  mode: 'production',
  watch: true,
  devtool: 'source-map'
});
