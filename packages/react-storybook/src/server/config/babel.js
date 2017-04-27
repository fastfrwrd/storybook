/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

const findCacheDir = require('find-cache-dir');

module.exports = {
  // Don't try to find .babelrc because we want to force this configuration.
  babelrc: false,
  // This is a feature of `babel-loader` for webpack (not Babel itself).
  // It enables a cache directory for faster-rebuilds
  // `find-cache-dir` will create the cache directory under the node_modules directory.
  cacheDirectory: findCacheDir({ name: 'react-storybook' }),
  presets: [
    require.resolve('babel-preset-es2015'),
    require.resolve('babel-preset-es2016'),
    require.resolve('babel-preset-stage-0'),
    require.resolve('babel-preset-react'),
  ],
};
