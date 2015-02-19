# Presentation Title

[Author](http://apuntesjs.com) and any other content to show above slides.

<!-- slide 1 --> 

!SLIDE #Cover shout cover

## Title
### Subtitle

![Image](pictures/cover.jpg)

<!-- slide 2 --> 

!SLIDE #SlideID class1 class2

## Slide Title

<p class="note">Some HTML</p>

- List item one
-? Two (delayed)
-? Three (delayed)

<!-- slide 2 --> 

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