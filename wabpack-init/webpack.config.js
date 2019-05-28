const path = require('path');
import ExtractTextWebpackPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

module.exports = {
  entry: './src/index.js', // 入口文件， src下的index.js
  output: {
    publicPath: __dirname + "dist", // js引用的路径也可以是cdn地址
    path: path.resolve(__dirname, 'dist'), // 出口目录，dist文件
    filename: '[name].[hash].js' // 这里name就是打包出来的文件名
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: {
        loader: 'babel-loader',
        query: {
          presets: ['env', 'stage-0', 'react'] // env 转换 es6 stage-0 转换 es7
        }
      }
    }, {
      test: /\.vue$/,
      loader: 'vue-loader'
    }, {
      test: /\.css$/,
      // use: [{
      //   loader: 'style-loader',
      //   options: {
      //     singleton: true // 处理为单个style标签
      //   },
      // }, {
      //   loader: 'css-loader',
      // }, {
      //   loader: 'postcss-loader',
      // }],
      use: ExtractTextWebpackPlugin.extract({
        use: 'css-loader'
      })
      // include: path.resolve(__dirname, 'src'), // 限制范围，提高打包速度
      // exclude: /node_moudles/
    }, {
      test: /\.scss$/,
      use: [{
        loader: 'style-loader' // 将字符串生成为style字符串
      }, {
        loader: 'css-loader', // 将css 转化为 CommonJS模块
      }, {
        loader: 'sass-loader', // 将sass编译为css
      }]
    }, {
      test: /\.(png|jpg|jpeg|git|svg)/,
    }],
  },
  plugins: [
    new ExtractTextWebpackPlugin('index.css'),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
      filename: 'index.html',
      hash: true, // 防止缓存
      minify: {
        removeAttributeQuotes: true // 压缩去掉引号
      }
    })
  ], // 加s的都是数组
  // 配置开发服务器
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'), // 静态文件根目录
    port: 9090, // 端口
    host: 'localhost',
    overlay: true,
    compress: true // 服务器返回浏览器的时候是否启动gzip压缩
  },
}