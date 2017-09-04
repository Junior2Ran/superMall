var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, '/src/index.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'babel-loader', 
      query: {
        presets: ['es2015','react']
      }
    }]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'build'),
    inline: true,
    hot: true
  },
  plugins: [ 
    new webpack.HotModuleReplacementPlugin()//热加载插件
  ]
};
