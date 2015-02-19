module.exports = function(grunt) {
    grunt.initConfig({
        shower: {
            index: {
                title: 'Test presentation',
                src: 'src/index.md',
                styles: 'src/styles.css'
                /*scripts: [
                    'libs/highlight.js',
                    'src/scripts.js'
                ]*/
            }
        },
        watch: {
            shower: {
                files: 'src/*',
                tasks: 'shower'
            }
        }
    });

    grunt.loadNpmTasks('grunt-shower-markdown');

    grunt.registerTask('default', ['shower']);
};