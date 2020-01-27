const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const isDevelopment = process.env.NODE_ENV === 'development';
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
   entry: './src/main.js',
   output: {
      path: path.join(__dirname, '/bundle'),
      filename: 'index_bundle.js'
   },
   devServer: {
      inline: true,
      port: 8001
   },
   module: {
      rules: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
         },
         {
            test: /\.css$/,
            use: [
               // style-loader
               { loader: 'style-loader' },
               // css-loader
               {
                  loader: 'css-loader',
                  options: {
                  modules: true
                  }
               },
               // sass-loader
               { loader: 'sass-loader' }
            ]
         },
         {
            test: /\.s(a|c)ss$/,
            exclude: /\.module.(s(a|c)ss)$/,
            loader: [
               isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
               'css-loader',
               {
                  loader: 'sass-loader',
                  options: {
                     sourceMap: isDevelopment
                  }
               }
            ]
         }
      ]
   },
   resolve: {
      extensions: ['.js', '.jsx', '.scss', '.css']
   },
   plugins:[
         new HtmlWebpackPlugin({
            template: './src/index.html'
         }),
         new MiniCssExtractPlugin({
            filename: isDevelopment ? '[name].css' : '[name].[hash].css',
            chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css'
         })
      ]
}