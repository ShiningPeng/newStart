const config = {
  entry: './src/index.js',
  devServer: {
    contentBase: "./dist",
    hot: true
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
      }
    ]
  }

}

module.exports = config