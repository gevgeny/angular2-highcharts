module.exports = function(config) {
    var configuration = {
        basePath: '.',
        frameworks: ['jasmine'],
        files: [
            // Polyfills.
            'node_modules/es6-shim/es6-shim.js',

            'node_modules/reflect-metadata/Reflect.js',

            // System.js for module loading
            'node_modules/systemjs/dist/system-polyfills.js',
            'node_modules/systemjs/dist/system.src.js',

            // Zone.js dependencies
            'node_modules/zone.js/dist/zone.js',
            'node_modules/zone.js/dist/jasmine-patch.js',
            'node_modules/zone.js/dist/async-test.js',
            'node_modules/zone.js/dist/fake-async-test.js',

            // RxJs.
            { pattern: 'node_modules/rxjs/**/*.js', included: false, watched: false },
            { pattern: 'node_modules/rxjs/**/*.js.map', included: false, watched: false },

            // paths loaded via module imports
            // Angular itself
            { pattern: 'node_modules/@angular/**/*.js', included: false, watched: true },

            // paths loaded via module imports
            {pattern: 'dist/**/*.js', included: false, watched: true},

            { pattern: 'node_modules/systemjs/dist/system-polyfills.js', included: false, watched: false }, // PhantomJS2 (and possibly others) might require it

            // paths to support debugging with source maps in dev tools
            {pattern: 'src/**/*.ts', included: false, watched: false},
            {pattern: 'dist/**/*.js.map', included: false, watched: false},
            'karma-test-shim.js'
        ],
        // proxied base paths
        proxies: {
            // required for component assests fetched by Angular's compiler
            '/src/': '/base/src/'
        },
        port: 9876,
        logLevel: config.LOG_INFO,
        colors: true,
        autoWatch: true,
        browsers: ['Chrome'],
        // Karma plugins loaded
        plugins: [
            'karma-jasmine',
            //'karma-coverage',
            'karma-chrome-launcher'
        ],

        // Coverage reporter generates the coverage
        reporters: ['progress'],
        customLaunchers: {
            Chrome_travis_ci: {
                base: 'Chrome',
                flags: ['--no-sandbox']
            }
        },
        //reporters: ['progress', 'dots', 'coverage'],

        // Source files that you wanna generate coverage for.
        // Do not include tests or libraries (these files will be instrumented by Istanbul)
        //preprocessors: {
        //    'dist/**/!(*spec).js': ['coverage']
        //},
        //
        //coverageReporter: {
        //    reporters:[
        //        {type: 'json', subdir: '.', file: 'coverage-final.json'}
        //    ]
        //},

        singleRun: true
    };

    if (process.env.TRAVIS) {
        configuration.browsers = ['Chrome_travis_ci'];
    }
    config.set(configuration);
};
