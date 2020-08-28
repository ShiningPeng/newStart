const HtmlWebpackPlugin = require('html-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
var ImageminPlugin = require('imagemin-webpack-plugin').default
const HappyPack = require('happypack');
const webpack = require('webpack')
// 1. 分离基础库（react，react-dom），可以缓存较长的时间
const config = {
  entry: './src/index.js',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  externals: {
    // 需要排除在外的依赖
    React: 'react'
  },
  // chunk
  // optimization: {
  //   splitChunks: {
  //     chunks: 'all',//所有的import //async 异步的import，sync 同步的import
  //     cacheGroups: {
  //       vendors: {
  //         test: /[\\/]node_modules[\\/]/,
  //       }
  //     }
  //   }
  // },
  devServer: {
    contentBase: './public',
    hot: true
  },
  module: {
    rules: [
      {
        test: /(.js|.jsx)$/,
        use: 'happypack/loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            modules: {
              mode: 'local',
              localIdentName: '[hash:base64:5]'//css类名采用base64取前五位
            }
          }
        }
        ],
        //css-loader css 这个模块
        //style-loader css内容 插到html 的 style标签之内
        // css-module
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html'
    }),
    new BundleAnalyzerPlugin(),
    new CopyPlugin({
      patterns: [
        { from: './public/ip6x2.png', to: './' },
      ],
    }),
    new MiniCssExtractPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: './public/ip6x2.png', to: './'
        }
      ]
    }
    ),
    new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i }),
    new HappyPack({
      // 3) re-add the loaders you replaced above in #1:
      loaders: ['babel-loader']
    }),
    // DLL xxx.dll动态链接库，提高打包速度，比如react依赖，不需要每次都打包，所以才可采用这样的方式
    // 当我们需要使用动态链接库时 首先会找到manifest文件 得到name值记录的全局变量名称 然后找到动态链接库文件 进行加载
    new webpack.DllReferencePlugin({
    //   /**
    //    * 在这里引入 manifest 文件
    //    */
      manifest: require('./dist/dll/vendor-manifest.json'),
    })

  ]
}
module.exports = config

// dist 存着 就是一个 最终打包的结果
// dist 最终上线的一个 文件夹

// happypack
// imagemin-webpack-plugin
// min-css-extract-plugin