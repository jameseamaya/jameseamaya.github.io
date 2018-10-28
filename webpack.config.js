var path = require("path");

module.exports = {
  entry: {
    app: ['./src/main.js']
  },
  output: {
    path: path.join(__dirname, 'bin'),
    filename: 'bundle.js',
    publicPath: '/bin/'
  },
  devServer: {
    compress: true,
    publicPath: '/bin/',
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['.js', '.jsx']
  }
};