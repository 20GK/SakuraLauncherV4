const rules = require('./webpack.rules');

rules.push(
  {
  test: /\.scss$/,
  use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
  },
  {
    test: /\.jpg$/,
    use: ['file-loader']
  },
  {
    test: /\.png$/,
    use: ['file-loader']
  }
  );

module.exports = {
  // Put your normal webpack config below here
  module: {
    rules,
  },
};
