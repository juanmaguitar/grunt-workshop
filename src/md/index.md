# Getting started with Grunt

by [JuanMa Garrido](#slide-showterm)

<!-- slide 1 --> 

!SLIDE #Cover

![Grunt Logo](img/grunt-logo.png)
![Ironhak Logo](img/grunt-logo.png)

## Getting started with GRUNT

<!-- slide 2 --> 

!SLIDE #SlideID class1 class2

## What is Grunt?

> Grunt is a @@task-based@@ @@command line@@ @@build tool@@ for @@JavaScript@@ projects.

1. ?A Javascript Task Runner
1. ?A Build Tool
1. ?A Command Line (console)
1. ?Writen in Javascript


<!-- slide 3 --> 

!SLIDE #slide-showterm

<iframe src="http://showterm.io/7b5f8d42ba021511e627e" width="775" height="500"></iframe>

<!-- slide 4 --> 

!SLIDE #slide-code smallcode

## Code

```javascript
module.exports = function(grunt) {
	@@@grunt.initConfig@@@({
		concat: {
			main: {
				src: 'src/*.js',
				dest: 'build/scripts.js'
			}
		},
		min: {
			main: {
				src: '<config:concat.main.dest>',
				dest: 'build/scripts.min.js'
			}
		}
	});
	grunt.registerTask('default', 'concat min');
};
```

!SLIDE

## Code example

```
@@concat@@: {
    main: {
        text: @@@'Hello world'@@@
    }
}
```