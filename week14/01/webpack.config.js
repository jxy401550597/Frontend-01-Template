module.exports = {
  entry: './main.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [['@babel/plugin-transform-react-jsx', { pragma: 'createElement01' }]], // createElement01 与main.js里面 function createElement01(）对应
          },
        },
      },
    ],
  },
  mode: 'development',
  optimization: {
    minimize: false,
  },
}
