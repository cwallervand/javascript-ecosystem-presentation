var webpack = require('webpack');

var config = {
  //Defines entry points and bundles in the aplication
  entry: {
    app: './src/Index.jsx', //The entry point of the application
    vendor: ['react', 'react-dom'] //Defining another bundle with vendor scripts
  },
  //Defines the output of the webpack build
  output: {
    filename: '[name].bundle.js', //Specifies a bundle for each entry in the `entry` config
    path: __dirname + '/www' //Defines the location for the output files
  },
  //Configuration for the modules in the application
  module: {
    //loaders to be used by the build
    loaders: [
      {
        loader: 'babel', //The name of the loader (babel-loader)
        test: /\.jsx?$/, //A RegEx to tell the loader which files to consider
        exclude: /nodes_modules/ //A RegEx to tell the loader which files to exclude
      }
    ]
  },
  //Optimize vendor chunk. This removes alle the modules
  //This will remove all modules in the vendor chunk from the app chunk. The bundle.js will now contain just your app code, without any of its dependencies. These are in vendor.bundle.js.
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      fileName: 'vendor.bundle.js',
    })
  ]
};

module.exports = config;
