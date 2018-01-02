const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: [
      'react-hot-loader/patch',
      path.join(__dirname, '../src/main.js')
    ]
  },
  output: {
    filename: '[name].[hash].js',
    path: path.join(__dirname, '../dist'),

  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [
          path.join(__dirname, '../node_modules')
        ],
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.scss$/,
        use: [ "style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../public/index.html'),
      filename: 'index.html',
      title: 'MyMusic'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    open:true,
    host: 'localhost',
    port: '8080',
    hot: true,
    stats:{
      errors: true
    },
    proxy: {
      "*": {    //需要代理的路径
        target: "http://localhost:3000",  //需要代理的域名
        changeOrigin: true  //必须配置为true，才能正确代理
      }
    }
  }
};





