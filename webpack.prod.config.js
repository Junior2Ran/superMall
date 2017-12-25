const webpack = require('webpack');
const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const theme = require('./package.json').theme;  // antd-mobile 主题自定义设置

const svgDirs = [
  require.resolve('antd-mobile').replace(/warn\.js$/, '')  // 1. 属于 antd-mobile 内置 svg 文件
  // path.resolve(__dirname, 'src/my-project-svg-foler'),  // 2. 自己私人的 svg 存放目录
];

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    bundle: path.resolve(__dirname, 'src/index.js'),
    vendor: ['react','react-dom','react-router','react-router-dom','react-responsive']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]-[hash:6].js'
  },
  module: {
    rules: [
      {
        test: /\.json$/, 
        loader: 'json-loader'
      },{
        test: /(\.js?$)|(\.jsx?$)/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },{
        test: /\.css$/, 
        loader: 'style-loader!css-loader'
      },{
        test: /\.less$/, 
        use: [
          'style-loader',
          'css-loader',
          {loader: 'less-loader', options: {modifyVars: theme}},
        ]
      },{
        test:/(\.jpg$)|(\.png$)|(\.gif$)/,
        loader:'url-loader?limit=10000&name=images/[name]-[hash:6].[ext]'
      },{
        test: /\.(svg)$/i,
        loader: 'svg-sprite-loader',
        include: svgDirs  // 把 svgDirs 路径下的所有 svg 文件交给 svg-sprite-loader 插件处理
      },{
        test: /\.(htm|html)$/i,
        loader: 'html-withimg-loader'
      }
    ]
  },
  resolve: {
    modules: ['node_modules', path.resolve(__dirname, '/src')],
    extensions: ['.web.js', '.js', '.json']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + "/src/index.tmpl.html"//new 一个这个插件的实例，并传入相关的参数
    }),
    new BundleAnalyzerPlugin(),                //打包分析工具
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      },
    }),
    new UglifyJSPlugin({
      uglifyOptions: {
        ie8: false,
        output: {
          comments: false,
          beautify: false
        },
        mangle: {
          keep_fnames: true
        },
        compress: {
          warnings: false,
          drop_console: true
        }
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor']
    }),
    // Make sure that the plugin is after any plugins that add images
    new ImageminPlugin({
      disable: process.env.NODE_ENV !== 'production', 
      pngquant: {
        quality: '95-100'
      }
    })
  ]
};
