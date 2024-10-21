const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['.mjs', '.js', '.svelte', '.ts'],
    mainFields: ['svelte', 'browser', 'module', 'main'],
    conditionNames: ['svelte', 'browser'],
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: ['svg-inline-loader'],
      },
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, 'src'),
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        // Svelte 5+:
        test: /\.(svelte|svelte\.js)$/,
        use: 'svelte-loader',
      },
      {
        test: /(?<!\.svelte)\.ts$/,
        use: ['ts-loader'],
      },
      {
        // required to prevent errors from Svelte on Webpack 5+, omit on Webpack 4
        test: /node_modules\/svelte\/.*\.mjs$/,
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-env',
            {
              plugins: ['@babel/plugin-proposal-class-properties'],
            },
          ],
        },
      },
    ],
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'public'),
    },
    port: 3000,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
};
