const webpack = require('webpack');
// Config pour le devServer
const host = 'localhost';
const port = 3000;

module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
          }
        ]
      },
      resolve: {
        extensions: ['*', '.js', '.jsx']
      },
    output: {
      path: __dirname + '/dist',
      publicPath: '/',
      filename: 'bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
      ],
    devServer: {
      contentBase: './dist',
      host: host,
      port: port,
      hot: true
    }
  };