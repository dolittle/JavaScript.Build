"use strict";
const fs = require("fs");
let webpackConfig = require('./webpack.specs.config');
module.exports = (config) => {
  config.set({
    basePath: './Features',
    frameworks: ['mocha', 'chai', 'chai-as-promised'],
    files: [
      '**/for_*/*.js',
      '**/when_*/*.js'
    ],
    exclude: [
    ],
    preprocessors: {
      '**/*.js': ['webpack']
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      stats: 'errors-only'
    },
    reporters: ['progress'],
    coverageIstanbulReporter: {
      reports: [ 'text-summary' ],
      fixWebpackSourcePaths: true
    },    
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false,
    concurrency: Infinity
  })
};
// , 'coverage-istanbul'