module.exports = function(grunt) {

    grunt.initConfig({
        karma: {
            unit: {
                background: true,
                options: {
                    basePath: '',

                    frameworks: ['jasmine'],
                    browsers: ['Chrome'],

                    //background : true,
                    customLaunchers: {
                        Chrome_without_security: {
                            base: 'Chrome',
                            flags: ['--disable-web-security']
                        }
                    },
                    files: [
                        "bower_components/jquery/dist/jquery.js",
                        "bower_components/bootstrap/dist/bootstrap.js",
                        "bower_components/angular/angular.js",
                        "bower_components/angular-route/angular-route.js",
                        "bower_components/angular-mocks/angular-mocks.js",
                        "src/**/*.tpl.html",
                        "src/**/modules.*.js",
                        "src/**/controller.*.js",
                        "src/app.js",
                        "src/**/*-spec.js"
                    ],
                    exclude: [],

                    coverageReporter: {
                        type: 'html',
                        dir: 'coverage/'
                    },

                    // test results reporter to use
                    // possible values: 'dots', 'progress'
                    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
                    reporters: ['progress' ],

                    colors: true,
                    singlerun: false,
                    autoWatch: false,
                    logLevel: 'ERROR',

                    plugins: [
                        'karma-jasmine',
                        'karma-chrome-launcher',
                    ],

                }
            },
        },


        jshint: {
            files: ['gruntfile.js', 'src/**/*.js'],
            options: {
                globals: {
                    jQuery: true
                }
            }
        },
        watch: {
            files: ['<%= jshint.files %>'],
            tasks: ['jshint', 'karma:unit:run']
        }
    });

    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['karma:unit', 'watch']);

};
