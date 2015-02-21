module.exports = function(grunt) {

	grunt.initConfig({
		srcFolder: 'src',
		baseFolder: 'www',
		pkg: grunt.file.readJSON('package.json')
	});

	/* shower */
	grunt.loadNpmTasks('grunt-shower-markdown');
	grunt.config('shower', {
		index: {
			destFolder: 'www',
			dest: 'index.html',
			title: 'Test presentation',
			styles: [
				'http://fonts.googleapis.com/css?family=Lato',
				'css/styles.css'
			],
			src: '<%= srcFolder %>/md/index.md',
			theme: 'themes/bright'
		}
	});


	// compass
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.config('compass', {
		dev : {
			options: {
				sassDir: '<%= srcFolder %>/scss',
				cssDir: '<%= baseFolder %>/css',
				outputStyle : 'nested',
				environment: 'development'
			}
		}
	});

	/* watch */
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.config('watch', {
		options: {
			livereload: '<%= connect.options.livereload %>',
		},
		all : {
			files: ['<%= srcFolder %>/**/*', 'Gruntfile.js', 'node_modules/grunt-shower-markdown/**/*'],
			tasks: ['shower','compass']
		}
	});

	/* connect */
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.config('connect', {
		options: {
			port: 8080,
			livereload: 35729,
			hostname: 'localhost'
		},
		livereload: {
			options: {
				open: true,
				base: '<%= baseFolder %>'
			}
		}
	});

	/* tasks  */
	grunt.loadNpmTasks('grunt-available-tasks');
	grunt.config('availabletasks', {
		tasks: {
			options: {
				showTasks: ['user'],
				sort: true
			}
		}
	});

	grunt.registerTask('serve', ['connect:livereload','watch:all']);
	grunt.registerTask('tasks', ['availabletasks']);
	grunt.registerTask('default', ['shower']);

};