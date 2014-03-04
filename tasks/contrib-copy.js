module.exports = function(grunt) {

  grunt.config('copy', {
    // Configure the copy task to move files from the development to generated folders
      processResources: {
        files: [
          {expand: true, cwd: '<%= files.src.javascriptDir %>', src: ['main.js'], dest: '<%= files.build.javascript %>'},
          {expand: true, cwd: '<%= files.resources.externalDir %>', src: ['**/*.js'], dest: '<%= files.build.javascript %>'},
        ]
      }
    }
  );

};

