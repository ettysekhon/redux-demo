var path = require('path');
var webpack = require('webpack');

var webpackConf = require('./webpack.config.test.js');

module.exports = function(config) {
    config.set({

        browsers: [ 'Chrome' ],

        singleRun: false,

        frameworks: [ 'mocha' ],

        plugins: [
          require('karma-webpack'),
          require('karma-mocha'),
          require('karma-mocha-reporter'),
          require('karma-chrome-launcher'),
          require('karma-sourcemap-loader')
        ],

        reporters: [ 'mocha' ],

        files: [
          './src/**/*.spec.js'
        ],

        client: {
          mocha: {
            timeout : 3000
          }
        },

        preprocessors: {
          './src/**/*.spec.js': [ 'webpack' ]
        },

        webpack: webpackConf,

        webpackMiddleware: {
          noInfo: true
        }

    });
};
