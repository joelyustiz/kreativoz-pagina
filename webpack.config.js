const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")

module.exports = (env) => {
  if (env.NODE_ENV === 'production') {
    var  pathsToClean = [
      'dist'
    ]
    
    var cleanOptions = {
      root: __dirname,
      exclude:  ['shared.js'],
      verbose:  true,
      dry:      false
    }
     
    
  }
  

  return {
    entry: {
      home: path.resolve(__dirname, 'src/entries/home.js')
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'js/[name].[hash].js',
      publicPath: path.resolve(__dirname, 'dist')+"/",
      chunkFilename: 'js/[id].[chunkhash].js',
    },
    devServer: {
      port: 9000,
    },
    mode: 'production',
    module: {
      rules: [
        {
          // test: que tipo de archivo quiero reconocer,
          // use: que loader se va a encargar del archivo
          test: /\.(js|jsx)$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            }
          },
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                // you can specify a publicPath here
                // by default it use publicPath in webpackOptions.output
                // name: 'css/[name].[ext]'
              }
            },
            "css-loader"
          ]
        },
        {
          test: /\.(jpg|png|gif|svg)$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 50000,
              fallback: 'file-loader',
              name: 'images/[name].[ext]',
            }
          }
        },
        {
          test: /\.(ttf|eot|woff|woff2)$/,
            use: {
              loader: "file-loader",
              options: {
                limit:50000,
                name: "fonts/[name].[ext]",
              },
            },
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: "[name].css",
        chunkFilename: "[id].css"
      }),
      new CleanWebpackPlugin(pathsToClean, cleanOptions)
    ],
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          cache: true,
          parallel: true,
          sourceMap: true // set to true if you want JS source maps
        }),
        new OptimizeCSSAssetsPlugin({})
      ]
    }
  }
}
