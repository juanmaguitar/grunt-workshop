# Getting started with Grunt

by [JuanMa Garrido](#trainer)

<!-- ######################## COVER ######################## --> 

!SLIDE #Cover

![Grunt Logo](img/grunt-logo.png)
![Ironhak Logo](img/grunt-logo.png)

## Getting started with GRUNT

<!-- ######################## TEACHER ######################## --> 

!SLIDE no-bullet-list

##Teacher: JuanMa Garrido
 
<ul>
<li><a class="icon-envelope" href="mailto:JuanMa.Garrido@gmail.com" target="_blank">JuanMa.Garrido@gmail.com</a></li>
<li><a class="icon-twitter" href="https://twitter.com/juanmaguitar" target="_blank">@juanmaguitar</a></li>
<li><a class="icon-linkedin" href="http://www.linkedin.com/in/juanmagarrido" target="_blank">http://www.linkedin.com/in/juanmagarrido</a></li>
<li><a class="icon-github"href="https://github.com/juanmaguitar" target="_blank">https://github.com/juanmaguitar</a></li>
</ul>

<!-- ######################## CONTENTS ######################## --> 

!SLIDE #contents

##Contents

1. What is Grunt?
1. Clear Ideas about Grunt
1. Using Grunt
1. First tasks w/ Grunt

<!-- ######################## WHAT IS GRUNT ######################## --> 

!SLIDE what

> Grunt is a @@Task Runner@@ 

!SLIDE what

> Grunt is a @@Build Tool@@ 

!SLIDE what3

> Grunt is a (@@Javascript@@) @@Tasks Runner@@. Some of these tasks @@Build@@ stuff (transcompiling, deploy...)

!SLIDE what2

[Originally described](http://bocoup.com/weblog/introducing-grunt/) as:

> Grunt is a @@task-based@@ @@command line@@ @@build tool@@ for @@JavaScript@@ projects.

<!-- ######################## CLEAR IDEAS ######################## --> 

!SLIDE clear-ideas small no-bullet-list

## Clear Ideas

- ?<span class="icon-building"></span>Grunt and Grunt-plugins are installed and managed via [npm](https://npmjs.org/), the [Node.js](http://nodejs.org/) package manager.
- ?<span class="icon-terminal"></span>To use Grunt from comand line we have to install (globally) the [Grunt's CLI](http://gruntjs.com/using-the-cli) → `npm install -g grunt-cli`
- ?<span class="icon-terminal"></span>Inside the project we install Grunt and Grunt-plugins as node modules → `npm install --save-dev grunt`
- ?<span class="icon-terminal"></span>To install dependencies of an existing project we use → `npm install`

!SLIDE clear-ideas no-bullet-list

## Clear Ideas

- ?<span class="icon-cogs"></span>The grunt command line (globally) runs the grunt package at `node_modules` (locally)
- ?<span class="icon-file"></span>The tasks are coded (loaded and configured) in Javascript in the file `@@@Gruntfile.js@@@`
- ?<span class="icon-file"></span>The "plugins" used in the `Gruntfile.js` are set as project-dependencies in the file `@@@package.json@@@` →  `npm install`


!SLIDE clear-ideas no-bullet-list

## Clear Ideas

- ?<span class="icon-briefcase"></span>**Productivity** →  with Grunt we can @@automate@@ everything in the client side: minify, concatenate, uglify, transcompile, deploy...
- ?<span class="icon-globe"></span>**Community** →  more than [11000 grunt plugins](https://www.npmjs.com/search?q=grunt) available  at NPM
- ?<span class="icon-code"></span>**Transcompilation** →  Ease the source-to-source compilation (Haml, Jade, Sass, LESS, Stylus, CoffeeScript, Dart, TypeScript, and more.)

!SLIDE clear-ideas no-bullet-list

## Clear Ideas

- ?<span class="icon-calendar"></span>[Released in @@March 2012@@](http://bocoup.com/weblog/introducing-grunt/) by [Ben Allman ](http://twitter.com/cowboy)

<!-- ######################## USING GRUNT ######################## --> 

!SLIDE smallcode

## Using Grunt

```
$ git --version
$ node -v
$ npm -v
$ git clone https://github.com/juanmaguitar/grunt-workshop.git
$ cd grunt-workshop
$ npm install
$ grunt --version
$ grunt -h
$ grunt tasks
$ grunt compass
$ grunt shower
$ grunt serve

```

!SLIDE first-tasks smallcode

## Using Grunt

[[+]](http://showterm.io/5dbd18bd9b0a2c10caf7c)

<iframe src="http://showterm.io/5dbd18bd9b0a2c10caf7c" width="700" height="380"></iframe>

<!-- ######################## FIRST TASKS ######################## --> 

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

!SLIDE first-tasks smallcode

## First tasks w/ Grunt (1)

[[+]](http://showterm.io/a177bf1bdcc8033709a69)

<iframe src="http://showterm.io/a177bf1bdcc8033709a69" width="700" height="380"></iframe>

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

!SLIDE first-tasks smallcode

## First tasks w/ Grunt (2)

[[+]](http://showterm.io/7a31032086f0cc49f3cec)

<iframe src="http://showterm.io/7a31032086f0cc49f3cec" width="700" height="380"></iframe>

<!-- ######################## MORE INFO ######################## --> 

!SLIDE

##More info

- [Grunt | Official Site](http://gruntjs.com/)
- [Introducing Grunt | Boucup](http://bocoup.com/weblog/introducing-grunt/)
- [Get Up And Running With Grunt | Smashing Magazine](http://www.smashingmagazine.com/2013/10/29/get-up-running-grunt/)
- [Meet Grunt: The Build Tool for JavaScript | tutsplus](http://code.tutsplus.com/tutorials/meet-grunt-the-build-tool-for-javascript--net-24856)
- [JS Task Runners Comparison: Grunt vs Cake vs Gulp vs Broccoli](http://blog.cozycloud.cc/technic/2014/06/18/task-runners-comparison/)

