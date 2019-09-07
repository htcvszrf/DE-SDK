/*
 * @Author: Caven
 * @Date: 2019-03-28 12:44:36
 * @Last Modified by: Caven
 * @Last Modified time: 2019-09-08 00:07:26
 */
const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const CopywebpackPlugin = require('copy-webpack-plugin')
const cesiumBuild = './libs/cesium/Build/Cesium'
const cesiumSource = './libs/cesium/Source'

let cesiumCopyPlugin = [
  new CopywebpackPlugin([{ from: path.join(cesiumBuild, 'Workers'), to: 'Workers' }]),
  new CopywebpackPlugin([{ from: path.join(cesiumBuild, 'Assets'), to: 'Assets' }]),
  new CopywebpackPlugin([{ from: path.join(cesiumBuild, 'Widgets'), to: 'Widgets' }]),
  new CopywebpackPlugin([{ from: path.join(cesiumBuild, 'ThirdParty'), to: 'ThirdParty' }])
]

function resolve(dir) {
  return path.join(__dirname, '.', dir)
}

module.exports = env => {
  const IS_PROD = (env && env.production) || false
  const publicPath = IS_PROD ? '/' : '/'
  let plugins = [
    ...cesiumCopyPlugin,
    new MiniCssExtractPlugin({
      filename: IS_PROD ? '[name].min.css' : '[name].css',
      allChunks: true
    }),
    new webpack.DefinePlugin({
      CESIUM_BASE_URL: JSON.stringify('./DE-SDK/')
    })
  ]
  if (IS_PROD) {
    plugins.push(new OptimizeCssAssetsPlugin())
    plugins.push(new webpack.NoEmitOnErrorsPlugin())
  }
  return {
    entry: {
      'DE.SDK': ['entry', 'theme']
    },
    devtool: IS_PROD ? false : 'cheap-module-eval-source-map',
    output: {
      filename: IS_PROD ? '[name].min.js' : '[name].js',
      path: path.resolve(__dirname, 'dist/DE-SDK'),
      publicPath: publicPath,
      sourcePrefix: ''
    },
    amd: {
      toUrlUndefinded: true
    },
    node: {
      fs: 'empty'
    },
    module: {
      unknownContextCritical: false,
      rules: [
        {
          test: /\.js$/,
          enforce: 'pre',
          include: path.resolve(__dirname, cesiumSource),
          use: [
            {
              loader: 'strip-pragma-loader',
              options: {
                pragmas: {
                  debug: false
                }
              }
            }
          ]
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            presets: ['@babel/preset-env'],
            compact: false,
            ignore: ['checkTree']
          }
        },
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader'
            },
            {
              loader: 'sass-loader'
            }
          ]
        },
        {
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader'
            },
            {
              loader: 'sass-loader'
            }
          ]
        },
        {
          test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
          loader: 'url-loader',
          options: {
            limit: 20000
          }
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.json', '.css'],
      alias: {
        '@': resolve('src'),
        entry: './src/DE.js',
        theme: './src/theme/theme.js',
        cesium: path.resolve(__dirname, cesiumSource)
      }
    },
    plugins
  }
}
