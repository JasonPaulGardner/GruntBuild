
module.exports = function(config) {
	'use strict';
	config.set({
		basePath: '../src/',
		frameworks: [
			'jasmine',
			'requirejs'
		],
		files: [
			'test/devMain.js',
			// all the sources, tests
			{pattern: 'main/**/*.js', included: false},
			{pattern: 'test/specs/**/*.js', included: false},
		],
		exclude: [],
		preprocessors: {
			'src/**/*.js': 'coverage'
		},
		reporters: ['progress'],
		singleRun: false,
		captureTimeout: 60000,
		browsers: [],
		autoWatch: true,
		logLevel: config.LOG_INFO,
		colors: true,
		port: 9876

	});
};

