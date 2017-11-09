const webpack = require('webpack');
const path = require('path');
const theme = require('./package.json').theme;  // antd-mobile 主题自定义设置
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const svgDirs = [
  require.resolve('antd-mobile').replace(/warn\.js$/, '')  // 1. 属于 antd-mobile 内置 svg 文件
  // path.resolve(__dirname, 'src/my-project-svg-foler'),  // 2. 自己私人的 svg 存放目录
];

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
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
        loader:'url-loader?limit=10000&name=images/[name].[ext]'
      },{
        test: /\.(svg)$/i,
        loader: 'svg-sprite-loader',
        include: svgDirs  // 把 svgDirs 路径下的所有 svg 文件交给 svg-sprite-loader 插件处理
      }
    ]
  },
  resolve: {
    modules: ['node_modules', path.resolve(__dirname, '/src')],
    extensions: ['.web.js', '.js', '.json']
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'build'),
    inline: true,
    hot: true,
    host: '0.0.0.0'
  },
  plugins: [ 
    new webpack.HotModuleReplacementPlugin(),  //热加载插件
    // new BundleAnalyzerPlugin()                 //打包分析工具
  ]
};
