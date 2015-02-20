# Getting started with Grunt

by [JuanMa Garrido](#slide-showterm)

<!-- slide 1 --> 

!SLIDE #Cover shout cover

## Title
### Subtitle

<!-- slide 2 --> 

!SLIDE #SlideID class1 class2

## Slide Title

<p class="note">Some HTML</p>

- List item one
-? Two (delayed)
-? Three (delayed)

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