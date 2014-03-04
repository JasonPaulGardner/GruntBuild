module.exports = function(grunt) {

  grunt.config('jshint', {
      processSource: ['<%= files.src.javascript %>'],
      processSpecs: ['<%= files.test.unit.specs %>']
    }
  );

};

