const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },

    plugins: [

    /*
      TODO:

      We need to configure some plugins for Wepack to use. They 
      have already been required in above.

      Note that the plugins property on line 18 is an array. The 
      standard way to config a plugin is to instantiate one plugin
      for each item in this array. So if we have three plugins to 
      configure, the plugins array should have three sets of objects 
      being instantiated.

      Instantiating a plugin looks like this:

      new PLUGIN_NAME_HERE({
        // object keys and values go here
      }),

      So, below, we will be configuring HtmlWebpackPlugin, InjectManifest, 
      and WebpackPwaManifest.

      For HtmlWebpackPlugin, we want to specify the template as './index.html' 
      and the title as 'J.A.T.E'

      For InjectManifest plugin, the swSrc should be './src-sw.js' and the 
      swDest should be 'src-sw.js'

      For WebpackPwaManifest, we'll need the following values set in the config 
      object:

      fingerprints should be false
      inject should be true
      name should be 'Just Another Text Editor'
      short_name should be 'J.A.T.E'
      description can be anything you like. This is an app that creates a text editor, so write something suitable.
      background_color and theme_color should be '#225ca3'
      start_url and publicPath should be  '/'
      icons should be:
          [
            {
              src: path.resolve('src/images/logo.png'),
              sizes: [96, 128, 192, 256, 384, 512],
              destination: path.join('assets', 'icons'),
            },
          ]

      When all three plugins are configured this work is done.
    */


    ],

    module: {
      rules: [

        /*
          TODO: In this array, we need to configure the rules 
          for when Webpack should "bundle-ize" our files. Each rule 
          is an object. We will be setting up two rules. 
          
          You will find both rules in the solution for the mini 
          project. 

          When you copy and paste them below, you'll be done here.
        */

      ],
    },
  };
};
