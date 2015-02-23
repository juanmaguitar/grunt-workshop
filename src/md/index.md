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

<!-- ****** SLIDE 6 ****** --> 

!SLIDE clear-ideas

## Clear Ideas

- ?Grunt is a [@@command line@@ command](http://gruntjs.com/using-the-cli) that allow us to execute @@tasks written in Javascript@@
- ?**Productivity**: with Grunt we can @@automate@@ everything in the client side: minify, concatenate, uglify, transcompile, deploy...
- ?**Community**: more than [11000 grunt plugins](https://www.npmjs.com/search?q=grunt) available  at NPM
- ?**Transcompilation**: Ease the source-to-source compilation (Haml, Jade, Sass, LESS, Stylus, CoffeeScript, Dart, TypeScript, and more.)

<!-- ****** SLIDE 7 ****** --> 

!SLIDE clear-ideas

## Clear Ideas

- ?[Started in @@2012@@](http://bocoup.com/weblog/introducing-grunt/) by [Ben Allman ](http://twitter.com/cowboy)from [Boucup](http://bocoup.com/) (Boston)
- ?First commit to the project: [Sep 2011](https://github.com/gruntjs/grunt/tree/0493335ea6fe2e17cbe236b253139a06eabcbbdd)

<!-- ****** SLIDE 8 ****** --> 

!SLIDE first-tasks smallcode

## First tasks w/ Grunt (1)

```
$ mkdir project
$ cd project/
$ mkdir src
$ npm init
$ npm install @@--save-dev@@ grunt
$ vi Gruntfile.js
	module.exports = function(grunt) {
		@@@grunt.registerTask@@@('foo', function() {
		       grunt.log.writeln('foo is running...');
		});
	};
$ grunt foo
```

<!-- ****** SLIDE 9 ****** --> 

!SLIDE first-tasks smallcode

## First tasks w/ Grunt (1)

[[+]](http://showterm.io/a177bf1bdcc8033709a69)

<iframe src="http://showterm.io/a177bf1bdcc8033709a69" width="700" height="380"></iframe>

<!-- ****** SLIDE 10 ****** --> 

!SLIDE first-tasks smallcode

## First tasks w/ Grunt (2)

```
$ mkdir project2
$ cd project2/
$ mkdir src
$ npm config set init.author.name "JuanMa Garrido"
$ npm config set init.author.email JuanMa.Garrido@gmail.com
$ npm config set init.author.url http://apuntesjs.com
$ npm config set init.license MIT
$ npm init
$ npm install --save-dev @@grunt grunt-contrib-jshint@@
```

<!-- ****** SLIDE 11 ****** --> 

!SLIDE first-tasks smallcode

## First tasks w/ Grunt (2)

```
$ vi Gruntfile.js
	module.exports = function(grunt) {
	  @@@grunt.loadNpmTasks('grunt-contrib-jshint');@@@
	  grunt.initConfig({
	    @@@jshint@@@: {
	      options: {
	        curly: true,
	        eqeqeq: true
	      },
	      target1: ['Gruntfile.js', 'src/**/*.js']
	    }
	  });
	  @@@grunt.registerTask('default', ['jshint']);@@@
	};
$ grunt
```


<!-- ****** SLIDE 11 ****** --> 

!SLIDE first-tasks smallcode

## First tasks w/ Grunt (2)

[[+]](http://showterm.io/7a31032086f0cc49f3cec)

<iframe src="http://showterm.io/7a31032086f0cc49f3cec" width="700" height="380"></iframe>






!SLIDE

##More info

- [Introducing Grunt | Boucup](http://bocoup.com/weblog/introducing-grunt/)
- [Get Up And Running With Grunt | Smashing Magazine](http://www.smashingmagazine.com/2013/10/29/get-up-running-grunt/)
- [Meet Grunt: The Build Tool for JavaScript | tutsplus](http://code.tutsplus.com/tutorials/meet-grunt-the-build-tool-for-javascript--net-24856)
- [JS Task Runners Comparison: Grunt vs Cake vs Gulp vs Broccoli](http://blog.cozycloud.cc/technic/2014/06/18/task-runners-comparison/)