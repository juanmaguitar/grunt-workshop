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
			src: 'src/index.md',
			styles: 'src/styles.css'
			/*scripts: [
				'libs/highlight.js',
				'src/scripts.js'
			]*/
			}
	});

	/* shower */
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.config('connect', {
		connect: {
			server: {
				options: {
					port: 9001,
					base: 'www-root'
				}
			}
		}
	});

	grunt.registerTask('default', ['shower']);

};