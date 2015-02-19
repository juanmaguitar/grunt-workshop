module.exports = function(grunt) {

	/* watch */
	/*
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.config('watch', {
		shower: {
			files: 'src/*',
			tasks: 'shower'
		}
	});
*/

	/* shower */
	grunt.loadNpmTasks('grunt-shower-markdown');
	grunt.config('shower', {
		index: {
			title: 'Test presentation',
			src: 'md/index.md',
			dest: 'www/index.html'
			}
	});

	/* shower */
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.config('connect', {
		connect: {
			server: {
				options: {
					port: 9001,
					base: 'www'
				}
			}
		}
	});

	grunt.registerTask('default', ['shower']);

};