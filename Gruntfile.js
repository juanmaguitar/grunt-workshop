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
			styles: 'css/styles.css',
			src: 'md/index.md',
			dest: 'index.html',
			theme: 'themes/bright'
		}
	});

	/* shower */
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.config('connect', {
		connect: {
			server: {
				options: {
					port: 9001,
					base: {
						options: {
							index: 'index.html',
							maxAge: 300000
						}
					}
				}
			}
		}
	});

	grunt.registerTask('default', ['shower']);

};