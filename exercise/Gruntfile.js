module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jasmine :  {
      files: ['src/vendor/*.js','src/js/*.js'],
      options : {
        specs: 'test/*Spec.js',
      }
    },
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['src/vendor/*.js','src/js/*.js'],
        dest: 'dist/<%= pkg.name %>.js'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },
    jshint: {
      files: ['Gruntfile.js', 'src/js/**/*.js', 'test/**/*.js'],
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },
    compass:  {
      dev : {
        options: {
          sassDir: 'src/scss',
          cssDir: 'dist',
          outputStyle : 'nested'
        }
      }
    },
    watch: {
      files: ['Gruntfile.js','src/**/*'],
      tasks: ['default']
    },
    connect :  {
      server: {
        options: {
          port: 8081,
          hostname: 'localhost',
          base: './'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-jasmine');


  grunt.registerTask('default', ['jshint','jasmine', 'concat', 'uglify', 'compass']);
  grunt.registerTask('serve', ['default','connect::keepalive'] );

};