const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const path = require('path');
const outputPath = path.resolve(__dirname, 'dist');

module.exports = {
  entry: './src/index',
  cache: false,

  mode: 'development',
  devtool: 'source-map',

  optimization: {
    minimize: false,
  },

  output: {
    publicPath: 'http://localhost:3001/',
  },

  resolve: {
    extensions: ['.jsx', '.js', '.json', '.ts', '.tsx'],
  },

  devServer: {
    static: outputPath,
  },

  module: {
    rules: [
      {
        test: /\.ts[x]?$/,
        loader: require.resolve('babel-loader'),
        options: {
          presets: [
            [
              require.resolve('@babel/preset-react'),
              {
                runtime: 'automatic',
              },
            ],
            require.resolve('@babel/preset-typescript'),
          ],
        },
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          'postcss-loader',
        ],
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: 'navigation',
      library: { type: 'var', name: 'navigation' },
      filename: 'remoteEntry.js',
      remotes: {},
      exposes: {
        './Header': './src/Header',
        './Footer': './src/Footer',
        './Navigator': './src/Nav',
      },
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
  ],
};
