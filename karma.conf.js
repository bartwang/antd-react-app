const path = require('path');

const SINGLEBROWSER = process.env.TEST_ENV === 'singleBrowser';

const browsers = SINGLEBROWSER ? ['Chrome'] : [];

const detectBrowsers = {
  enabled: !SINGLEBROWSER,
  usePhantomJS: !SINGLEBROWSER,
};

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: './',


    // how long will Karma wait for a message from a browser before disconnecting from it (in ms)
    browserNoActivityTimeout: 60000,


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai', 'sinon', 'detectBrowsers', 'intl-shim'],


    // list of files / patterns to load in the browser
    files: [
      'node_modules/babel-polyfill/dist/polyfill.js',
      'test/**/*.js'
    ],


    // list of files to exclude
    exclude: [],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'src/examples/index.js': ['webpack'],
      'test/**/*.js': ['webpack', 'sourcemap']
    },

    webpack: {
      devtool: 'inline-source-map',
      externals: {
        'react/addons': true,
        'react-addons-test-utils': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true
      },
      module: {
        rules: [{
          test: /\.(js|jsx)$/,
          loaders: 'babel-loader',
          exclude: path.resolve(__dirname, 'node_modules'),
          query: {
            presets: [
              ["es2015", { "modules": false }],
              "stage-3",
              "react"
            ],
            plugins: [
              "transform-runtime",
              "transform-class-properties"
            ]
          }
        }]
      }
    },

    webpackServer: {
      stats: 'errors-only',
      noInfo: true
    },

    // test results reporter to use
    // possible values: 'dots', 'progress', 'spec', 'junit', 'tape'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['spec', 'junit'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    // Populated via detectBrowsers plugin
    browsers: browsers,
    detectBrowsers: detectBrowsers,


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,


    // List of plugins to load
    plugins: [
      'karma-webpack',
      'karma-sourcemap-loader',
      'karma-intl-shim',
      'karma-mocha',
      'karma-chai',
      'karma-sinon',
      'karma-detect-browsers',
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-ie-launcher',
      'karma-opera-launcher',
      'karma-phantomjs-launcher',
      'karma-safari-launcher',
      'karma-spec-reporter',
      'karma-junit-reporter',
      'karma-tape-reporter',
      'karma-babel-preprocessor'
    ]
  })
};
