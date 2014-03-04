module.exports = function(grunt) {

  grunt.config('htmlmin', {                                     // Task
      processResources: {                                      // Target
        options: {                                 // Target options
          removeComments: true,
          collapseWhitespace: true
        },
        files: {                                   // Dictionary of files
          '<%= files.build.base %>/index.html': '<%= files.src.webapp %>/index.html', 
        }
      }
    }
  );

};

