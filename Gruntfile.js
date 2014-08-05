/*
Available commands

"Concatenate all the JS file"
- grunt concat:js
    -> this would make /vagrant/application/build/scripts/assetconcat-js.sh absolete

"Compile all the LESS files to 1 CSS file"
- grunt less:development
    -> this would make the following files obsolete
        -> /vagrant/application/less/compile_less.sh
        -> /vagrant/application/less/watch_less.sh
            ^ didn't work anyway, so be gone

"Automate all the things :)"

    "Watch for LESS file changes and issue target less:development if needed"
    - grunt watch:less
    "Watch for JS file changes and issue target concat:js if needed"
    - grunt watch:js
    "Perform both watches"
    - grunt watch:all
    
*/

module.exports = function(grunt) {
    "use strict";

    grunt.initConfig({
        "less": {
            "development": {
                files: {
                    "../application/public/css/style.css": "../application/less/style.less"
                }
            }
        },
        "watch": {
            "all": {
                files : ["../application/less/**/*.less", "../application/js/**/*.js"],
                tasks : ["jshint:all", "concat:js", "less:development", "bless"]
            },
            "less": {
                files : ["../application/less/**/*.less"],
                tasks : ["less:development", "bless"]
            },
            "jshint": {
                files : ["../application/js/**/*.js"],
                tasks : ["jshint:all"]
            },
            "js": {
                files : ["../application/js/**/*.js"],
                tasks : ["jshint:all", "concat:js"]
            }
        },
        "jshint": {
            "options": {
                "jshintrc": true
            },
            "all": [
                "../application/js/**/*.js"
            ]
        },
        "lesslint": {
            "ziggo": ['../application/less/**/*.less']
        },
        "concat": {
            "js": {
                files :[{
                    // src : "js/**/*.js",
                    src : "../application/js/**/*.js",
                    dest: "../application/public/js/source.js"
                }]
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks('grunt-lesslint')
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks('grunt-contrib-concat');
    // grunt.loadNpmTasks('grunt-bless');

    // the default task can be run just by typing "grunt" on the command line
    // for now we only have specific tasks
    // grunt.registerTask("default", ["watch:less"]);
    grunt.registerTask("default", []);

    // grunt.registerTask('build', ['jshint', 'concat', 'less', 'bless']);
    grunt.registerTask('build', ['jshint', 'concat', 'less']);
    grunt.registerTask('js', ['jshint', 'concat']);
};
