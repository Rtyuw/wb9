const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.[contenthash].js',
        path: path.resolve(__dirname, 'build')
    },
    plugins: [
        new HTMLWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
        }),
        new HTMLWebpackPlugin({
          filename: 'page1.html',
          template: './src/components/page1/page1.html',
        }),
        new HTMLWebpackPlugin({
          filename: 'page2.html',
          template: './src/components/page2/page2.html',
        }),
        new HTMLWebpackPlugin({
          filename: 'page3.html',
          template: './src/components/page3/page3.html',
        }),
        new HTMLWebpackPlugin({
          filename: 'page4.html',
          template: './src/components/page4/page4.html',
        })
    ],
    module: {
        rules: [
          {
            test: /\.html$/,
            use: [ 'html-loader' ]
          },
          {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
          },
          {
            test: /\.(png|jpg|jpeg|gif|svg)$/,
            use: [ 'file-loader' ]
          }
        ]
      },
    devServer: {
        port: 5000
    }
}