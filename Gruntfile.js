module.exports = function (grunt) {
	'use strict';
	grunt.initConfig({
		pkg: require('./package.json'),
    files: {
       target: 'target',
       resources: {
          imagesDir: 'src/main/resources/images',
          cssDir: 'src/main/resources/css',
          externalDir: 'src/main/resources/external',
          index: 'resources/**',
       },
       src: {
          javascriptDir: 'src/main/javascript',
          javascript: 'src/main/javascript/**/*.js',
          webapp: 'src/main/webapp',
          index: 'src/main/**',
       },
       test: {
          unit: {
            config: 'config/karma.conf.js',
            specs: 'src/test/specs/**/*.js',
            index: 'src/test/**',
          },
          integration: {
            specs: 'src/features',
            stepDef: 'src/features/step_definitions',
            index: 'src/features/**',
          }
       },
       build: {
	     index: '<%= files.target %>/<%= pkg.name %>/**',
         base: '<%= files.target %>/<%= pkg.name %>',
         javascript: '<%= files.target %>/<%= pkg.name %>/js',
         css: '<%= files.target %>/<%= pkg.name %>/css',
         images: '<%= files.target %>/<%= pkg.name %>/images',
       },
    }
	});
  
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  
  grunt.loadTasks('tasks');

//	grunt.registerTask('coverage', ['connect:coverage', 'karma:coverage']);
//	grunt.registerTask('testPhantom', ['karma:phantom']);

  grunt.registerTask('default', ['jshint', 'karma:unit', 'htmlmin', 'imagemin', 'requirejs', 'copy', 'less', 'connect:server', 'watch:main']);
  grunt.registerTask('e2e', ['cucumberjs']);
};
