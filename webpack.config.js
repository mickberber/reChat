const path = require('path');

module.exports = {
  entry: [
    'babel-polyfill',
    './src/index.jsx'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: './dist/bundle.js'
  },
  module: {
    preLoaders: [{
      test: /\.(js|jsx)?$/,
      loader: 'eslint',
      include: path.resolve(__dirname, 'src')
    }],
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        plugins: ['transform-runtime'],
        presets: ['es2015', 'stage-0', 'react'],
      }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
