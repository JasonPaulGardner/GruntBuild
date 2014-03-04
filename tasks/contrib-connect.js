module.exports = function(grunt) {

  grunt.config('connect', {
			coverage: {
				options: {
					port: 9877,
					base: 'coverage'
				}
			},
      server: {
        options: {
          port: 9001,
          base: '<%= files.build.base %>',
          livereload: true
        }
      },
	  integrationTest: {
        options: {
          port: 9002,
          base: '<%= files.build.base %>'
        }
      }
    }
  );
};

