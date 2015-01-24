module.exports = function(grunt) {

    // load time-grunt and all grunt plugins found in the package.json
    require( 'load-grunt-tasks' )( grunt );

    grunt.initConfig({
        // Sass
        sass: {
            dist: {
                files: {
                    'css/default.css': 'css/default.scss',
                    'css/grid.css': 'css/grid.scss'
                }
            }
        },

        // Watch
        watch: {
            css: {
                files: '**/*.scss',
                tasks: ['sass'],
                options: {
                    interrupt: false,
                    atBegin: true
                }
            }
        }
    });

    grunt.registerTask('default', ['watch']);
};
