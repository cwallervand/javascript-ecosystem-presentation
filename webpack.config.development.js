var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
  //Defines entry points and bundles in the aplication
  entry: {
    app: './src/Index.jsx', //The entry point of the application
    vendor: ['react', 'react-dom'] //Defining another bundle with vendor scripts
  },
  //Defines the output of the webpack build
  output: {
    filename: '[name].bundle.js', //Specifies a bundle for each entry in the `entry` config
    path: __dirname + '/www', //Defines the location for the output files
    publicPath: '/www', //Specifies the public URl for the assets when referenced in a browser
  },
  //Configuration for the modules in the application
  module: {
    //Preloaders used by the build, these are run before any other src code is modified by loaders
    preLoaders: [
      {
        loader: 'eslint',
        test: /\.jsx?$/,
        exclude: /nodes_modules/,
      }
    ],
    //loaders to be used by the build
    loaders: [
      {
        loader: 'babel', //The name of the loader (babel-loader)
        test: /\.jsx?$/, //A RegEx to tell the loader which files to consider
        exclude: /nodes_modules/, //A RegEx to tell the loader which files to exclude
      },

    ]
  },
  plugins: [
    // Configuring an instance of the html webpack plugin
    new HtmlWebpackPlugin({
      title: 'Topics of the day',
      template: 'index_template.html',
      filename: 'index.html',
      inject: false,
    }),
    //Optimize vendor chunk. This removes alle the modules
    //This will remove all modules in the vendor chunk from the app chunk. The bundle.js will now contain just your app code, without any of its dependencies. These are in vendor.bundle.js.
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      fileName: 'vendor.bundle.js',
    })
  ],
  //Tell webpack how to resolve files
  resolve: {
    //Resolve file with these extensions
    extensions: ['', '.js', '.jsx'],
  },
};

module.exports = config;
