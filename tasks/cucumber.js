module.exports = function(grunt) {

  grunt.config('cucumberjs', {
      files: '<%= files.test.integration.specs %>',
      options: {
        steps: '<%= files.test.integration.stepDef %>',
        format: 'pretty'
      }
    }
  );

};

