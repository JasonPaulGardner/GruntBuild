module.exports = function(grunt) {

  grunt.config('imagemin', {
      processResources: {   
        files: [{
          expand: true,   
          cwd: '<%= files.resources.imagesDir %>/',  
          src: ['**/*.{png,jpg,jpeg,gif}'], 
          dest: '<%= files.build.images %>'
        }]
      }
    }
  );

};

