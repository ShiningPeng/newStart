const HtmlWebpackPlugin = require('html-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CopyPlugin = require('copy-webpack-plugin');

const config = {
  entry: './src/index.js',
  devServer: {
    // contentBase是设置静态资源目录
    // hot是热更新
    contentBase: "./public",
    inline: true
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    "rules": [
      {
        test: /(.js|.jsx)$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test:/\.css$/i,
        use:['style-loader',{
          loader:'css-loader',
          options:{
            modules:{
              mode:'local',
              localIdentName:'[hash:base64:5]'
            }
          }
        }]
        // css-loader 解决import './style.css'语法，不然会报错
        // style-loader的作用是将css内容插入到html的style标签内
        // css-module
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template:'./public/index.html',
      filename:'index.html'
    }),
    new BundleAnalyzerPlugin(),
    new CopyPlugin({
      patterns: [
        { from: './public/url.jpg', to: './' }
      ],
    }),

  ]


}

module.exports = config