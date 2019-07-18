const path = require('path');

module.exports = async ({ config }) => {
  config.module.rules.push({
    test: /\.stories\.[tj]sx?$/,
    loaders: [
      {
        loader: require.resolve('@storybook/source-loader'),
        options: { injectParameters: true },
      }
    ],
    include: [path.resolve(__dirname, '../stories')],
    enforce: 'pre',
  });
  return config;
};