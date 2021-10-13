const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CopyPlugin = require("copy-webpack-plugin");

const jsRule = {
    test: /\.js$/,
    loader: 'babel-loader',
    options: { 
      presets: [ 
        ['@babel/preset-react', { runtime: 'automatic'}]
      ]
    }
  }

const cssRule = {
    test: /\.css$/,
    use: ['style-loader', 'css-loader','postcss-loader']
  }

const assetRule = {
  test: /\.png$/,
  type: 'asset'      
}

const rules = [jsRule, cssRule, assetRule]
module.exports = (env, argv) => {
  const {mode} = argv;
  const isProduction = mode === 'production';
  return {
    // entry: './src/index.js',
    output : {
      filename : isProduction ? '[name].[contenthash].js' : 'main.js',
      path: path.resolve(__dirname, 'docs'),
      clean: true,
    },
    plugins: [
      new HtmlWebpackPlugin({template: 'public/index.html'}),
      // new CopyPlugin({
      //   patterns: [
      //     { from: "src/public/", to: "./public/" },
      //   ],
      // }),
    ],
    module : {
      rules
    },
    devServer: {
      open: true,
      port: 3000,
      compress: true,
      // devMiddleware: {
      //   writeToDisk: true,
      // },
    }
  }
}