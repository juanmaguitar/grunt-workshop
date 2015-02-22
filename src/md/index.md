# Getting started with Grunt

by [JuanMa Garrido](#trainer)

<!-- ****** SLIDE 1 ****** --> 

!SLIDE #Cover

![Grunt Logo](img/grunt-logo.png)
![Ironhak Logo](img/grunt-logo.png)

## Getting started with GRUNT

<!-- ****** SLIDE 2 ****** --> 

!SLIDE #trainer

##Teacher: JuanMa Garrido
 
<ul>
<li><a class="icon-envelope" href="mailto:JuanMa.Garrido@gmail.com" target="_blank">JuanMa.Garrido@gmail.com</a></li>
<li><a class="icon-twitter" href="https://twitter.com/juanmaguitar" target="_blank">@juanmaguitar</a></li>
<li><a class="icon-linkedin" href="http://www.linkedin.com/in/juanmagarrido" target="_blank">http://www.linkedin.com/in/juanmagarrido</a></li>
<li><a class="icon-github"href="https://github.com/juanmaguitar" target="_blank">https://github.com/juanmaguitar</a></li>
</ul>

<!-- ****** SLIDE 3 ****** --> 

!SLIDE #contents

##Contents

1. What is Grunt?
1. Clear Ideas about Grunt
1. Using Grunt
1. First tasks w/ Grunt

<!-- ****** SLIDE 4 ****** --> 

!SLIDE #what

> Grunt is a (Javascript) Task Runner 

<!-- ****** SLIDE 5 ****** --> 

!SLIDE #what2

> Grunt is a @@task-based@@ @@command line@@ @@build tool@@ for @@JavaScript@@ projects.


!SLIDE #clear-ideas class1 class2

## Clear Ideas

- ?Grunt is a [command line command](http://gruntjs.com/using-the-cli) that allow us to execute tasks written in Javascript
- ?With Grunt we can AUTOMATE A LOT: minify, concatenate, uglify, compile (sass, coffeescript), deploy...
- ?[Started in 2012](http://bocoup.com/weblog/introducing-grunt/) by [Ben Allman ](http://twitter.com/cowboy)from [Boucup](http://bocoup.com/) (Boston)
- ?First commit to the project: [Sep 2011](https://github.com/gruntjs/grunt/tree/0493335ea6fe2e17cbe236b253139a06eabcbbdd)


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

!SLIDE

##More info

- [Introducing Grunt | Boucup](http://bocoup.com/weblog/introducing-grunt/)
- [Get Up And Running With Grunt | Smashing Magazine](http://www.smashingmagazine.com/2013/10/29/get-up-running-grunt/)
- [Meet Grunt: The Build Tool for JavaScript | tutsplus](http://code.tutsplus.com/tutorials/meet-grunt-the-build-tool-for-javascript--net-24856)
- [JS Task Runners Comparison: Grunt vs Cake vs Gulp vs Broccoli](http://blog.cozycloud.cc/technic/2014/06/18/task-runners-comparison/)