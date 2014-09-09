module.exports = function(grunt) {

    // load grunt config
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json')
    });

    // measures the time each task takes
    require('time-grunt')(grunt);

    // define grunt tasks
    grunt.registerTask('default', []);

};
