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
			styles: 'www/css/styles.css',
			src: 'md/index.md',
			dest: 'www/index.html',
			theme: 'themes/bright'
		}
	});


	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.config('connect', {
		options: {
	    port: 3000,
	    hostname: 'localhost'
	  }
	});

	grunt.registerTask('default', ['shower']);

};