module.exports = function(grunt) {

  grunt.config('requirejs', {
      compileApp: {
        options: {
          name: 'App',
          baseUrl: '<%= files.src.javascriptDir %>',
		  paths:{
			'jquery':"empty:",
			'jqueryui':"empty:",
			'json':"empty:",
			'isJson':"empty:",
			'jsonPath':"empty:",
			'knockout':"empty:",
			'knockout.validation':"empty:",
			'moment':"empty:",
			'numeral':"empty:",
			'underscore':"empty:",
			'i18n':"empty:"
			},
		  optimize:"uglify2",
		  generateSourceMaps:true,
		  preserveLicenseComments:false,
          out: "<%= files.build.javascript %>/App.js"
        }
      }
    }
  );

};

