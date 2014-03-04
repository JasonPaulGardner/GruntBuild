module.exports = function(grunt) {

  grunt.config('less', {
      compile: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2
        },
        files: {
          '<%= files.build.css %>/style.css': '<%= files.resources.cssDir %>/style.less'
        }
      },
    }
  );

};

