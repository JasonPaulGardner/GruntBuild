module.exports = function(grunt) {

  grunt.config('watch', {
      main: {
        files: ['<%= files.src.index %>', '<%= files.test.unit.index %>'],
        tasks: ['jshint', 'karma:unit:run', 'htmlmin', 'imagemin', 'requirejs', 'copy', 'less'],
        options: {
          livereload: true,
        },
      },
	  integration: {
        files: ['<%= files.build.index %>', '<%= files.test.integration.index %>'],
        tasks: ['cucumberjs'],
      },
    }
  );

};

