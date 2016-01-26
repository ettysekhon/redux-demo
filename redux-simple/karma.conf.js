var path = require('path');
var webpack = require('webpack');

var webpackConf = require('./webpack.config.dev.js');

module.exports = function(config) {
    config.set({
        browsers: [ 'Chrome' ],
        singleRun: false,
        frameworks: [ 'jasmine' ],

        plugins: [
            require('karma-chrome-launcher'),
            require('karma-jasmine'),
            require('karma-sourcemap-loader'),
            require('karma-webpack'),
            require('karma-jasmine-html-reporter')
        ],

        reporters: [ 'kjhtml' ],

        files: [
            // all files ending in ".test.js"
            'src/**/*.test.js',

        ],

        preprocessors: {
            // add webpack as preprocessor
            'src/**/*.test.js': ['webpack'],

        },

        webpack: webpackConf,

        webpackMiddleware: {
            // webpack-dev-middleware configuration
            // i. e.
            noInfo: true
        }

    });
};
