const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const path = require('path');
const outputPath = path.resolve(__dirname, 'dist');
const stylesHandler = 'style-loader';

module.exports = {
  entry: './src/index',
  cache: false,

  mode: 'development',
  devtool: 'source-map',

  optimization: {
    minimize: false,
  },

  output: {
    publicPath: 'http://localhost:3000/',
  },

  resolve: {
    extensions: ['.jsx', '.js', '.json', '.ts', '.tsx'],
  },

  devServer: {
    static: outputPath,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.ts[x]?$/,
        loader: require.resolve('babel-loader'),
        options: {
          presets: [require.resolve('@babel/preset-typescript')],
        },
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: 'asset',
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: 'home',
      library: { type: 'var', name: 'home' },
      filename: 'remoteEntry.js',
      remotes: {
        'home-nav': 'navigation',
        'home-body': 'body',
        'home-about': 'about',
      },
      exposes: {},
      shared: {
        react: {
          singleton: true,
          strictVersion: true,
          requiredVersion: '17.0.2',
        },
        'react-dom': { singleton: true },
        'single-spa-react': { singleton: true },
        tailwindcss: { singleton: true },
        'postcss-loader': { singleton: true },
        postcss: { singleton: true },
        autoprefixer: { singleton: true },
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
