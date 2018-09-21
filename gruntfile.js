module.exports = function(grunt) {
 
    grunt.initConfig({


        pkg: grunt.file.readJSON('package.json'),

        //css minify
        cssmin: {
            combine: {
                files: {
                    'main.css': ['style.css']
                }
            }
        },

        //grunt watch
        watch: {
            scripts: {
              files: ['*.css'],
              tasks: ['cssmin'],
              options: {
                spawn: false,
              },
            },
          },

    });

    // Load plug-ins
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Run the task
    grunt.registerTask('default', ['cssmin', 'watch']);

}