module.exports = function(grunt) {

  grunt.config('karma', {
			unit: {
				configFile: '<%= files.test.unit.config %>',
				reporters: ['progress'],
        browsers: ['Chrome'],
				background: true
			},
			phantom: {
				configFile: '<%= files.test.unit.config %>',
				reporters: ['progress'],
				browsers: ['PhantomJS'],
				autoWatch: true,
				keepalive: true
			},
			coverage: {
				configFile: '<%= files.test.unit.config %>',
				coverageReporter: {
					type : 'html',
					dir : 'coverage/'
				},
				reporters: ['coverage', 'progress']
			}
		}
  );

};

