# Getting started with Grunt

by [JuanMa Garrido](#trainer)

<!-- ######################## COVER ######################## --> 

!SLIDE #Cover

![Grunt Logo](img/grunt-logo.png)
![Ironhak Logo](img/grunt-logo.png)

## Getting started with GRUNT

<!-- ######################## TEACHER ######################## --> 

!SLIDE #trainer no-bullet-list

##Teacher: JuanMa Garrido
 
<ul>
<li><a class="icon-envelope" href="mailto:JuanMa.Garrido@gmail.com" target="_blank">JuanMa.Garrido@gmail.com</a></li>
<li><a class="icon-twitter" href="https://twitter.com/juanmaguitar" target="_blank">@juanmaguitar</a></li>
<li><a class="icon-linkedin" href="http://www.linkedin.com/in/juanmagarrido" target="_blank">http://www.linkedin.com/in/juanmagarrido</a></li>
<li><a class="icon-github" href="https://github.com/juanmaguitar" target="_blank">https://github.com/juanmaguitar</a></li>
</ul>

<!-- ######################## CONTENTS ######################## --> 

!SLIDE #contents

##Contents

1. What is Grunt? _(5m)_
1. Clear Ideas about Grunt _(10m)_
1. <span class="icon-keyboard"></span> Using Grunt in an existing project _(10m)_
1. <span class="icon-keyboard"></span> Creating my first Grunt project _(10m)_
1. <span class="icon-keyboard"></span> Loading Grunt plugins _(10m)_
1. Clear Ideas about Gruntfile.js _(10m)_
1. <span class="icon-keyboard"></span> Fully functional Grunt project _(...)_

<!-- ######################## WHAT IS GRUNT ######################## --> 

!SLIDE what

> Grunt is a @@Task Runner@@ 

!SLIDE what

> Grunt is a @@Build Tool@@ 

!SLIDE what3

> Grunt is a (@@Javascript@@) @@Task Runner@@. Some of these tasks @@Build@@ stuff (transcompiling, deploy...)

!SLIDE what2

[Originally described](http://bocoup.com/weblog/introducing-grunt/) as:

> Grunt is a @@task-based@@ @@command line@@ @@build tool@@ for @@JavaScript@@ projects.

!SLIDE what2

and for Ruby developers...

> Grunt is like a javascript version of Ruby's [Rake](https://github.com/ruby/rake) and [Capistrano](http://capistranorb.com/)

<!-- ######################## CLEAR IDEAS ######################## --> 

!SLIDE clear-ideas small no-bullet-list

## Clear Ideas about Grunt

- ?<span class="icon-building"></span>Grunt and Grunt-plugins are installed and managed via [npm](https://npmjs.org/), the [Node.js](http://nodejs.org/) package manager.
- ?<span class="icon-terminal"></span>To use Grunt from comand line we have to install (globally) the [Grunt's CLI](http://gruntjs.com/using-the-cli) → `npm install -g grunt-cli`
- ?<span class="icon-terminal"></span>Inside the project we install Grunt and Grunt-plugins as node modules → `npm install --save-dev grunt grunt-contrib-jshint`
- ?<span class="icon-terminal"></span>To install Grunt and Grunt-plugins of an existing project we use → `npm install`

!SLIDE clear-ideas no-bullet-list

## Clear Ideas about Grunt

<!-- 
- ?<span class="icon-cogs"></span>The _grunt command line_ (globally) runs the grunt 'package' at `node_modules` (locally)
-->

- Main Files:
	- ?<span class="icon-file"></span>`@@@package.json@@@`: The Grunt runner and Grunt plugins used in the _Gruntfile.js_ are set as project dependencies in this file
	- ?<span class="icon-file"></span>`@@@Gruntfile.js@@@`: The tasks are defined/configured and grunt plugins are loaded in this file 
	
!SLIDE clear-ideas no-bullet-list smallcode

## Clear Ideas about Grunt

- <span class="icon-code"></span> [sample](http://browsenpm.org/package.json) [`package.json`](https://docs.npmjs.com/files/package.json):

```
{
  "name": "my-project-name",
  "version": "0.1.0",
  "@@devDependencies@@": {
    "grunt": "~0.4.5",
    "grunt-contrib-jshint": "~0.10.0",
    "grunt-contrib-nodeunit": "~0.4.1",
    "grunt-contrib-uglify": "~0.5.0"
  }
}
```

!SLIDE clear-ideas no-bullet-list smallcode smaller

## Clear Ideas about Grunt

- <span class="icon-code"></span> [sample](http://gruntjs.com/sample-gruntfile) `Gruntfile.js`:

```
module.exports = function(grunt) {
  grunt.@@initConfig@@({
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    }
  });
  grunt.@@loadNpmTasks@@('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.@@registerTask@@('default', ['jshint']);
};
```

!SLIDE clear-ideas no-bullet-list

## Clear Ideas about Grunt

- ?<span class="icon-briefcase"></span>**Productivity** →  with Grunt we can @@automate@@ everything in the client side: minify, checking, testing, concatenate, uglify, transcompile, deploy...
- ?<span class="icon-globe"></span>**Community** →  more than [4000 grunt plugins](http://gruntjs.com/plugins) available  at NPM
- ?<span class="icon-code"></span>**Transcompilation** →  Ease the source-to-source compilation (Haml, Jade, Sass, LESS, Stylus, CoffeeScript, Dart, TypeScript, and more.) 

!SLIDE clear-ideas no-bullet-list not-alone

## Clear Ideas about Grunt

- Grunt is not alone in the task-manager/build-tools world:
	- ?<span class="devicons devicons-javascript_badge"></span> [grunt](http://gruntjs.com/), [cake](http://coffeescript.org/documentation/docs/cake.html), [broccoli](https://github.com/broccolijs/broccoli), [gulp](http://gulpjs.com/) and [more](https://gist.github.com/callumacrae/9231589)
	- ?<span class="devicons devicons-ruby"></span> [rake](https://github.com/ruby/rake), [capistrano](http://capistranorb.com/)
    - ?<span class="devicons devicons-python"></span> [paver](http://paver.github.io/paver/), [pynt](https://github.com/rags/pynt)
    - ?<span class="devicons devicons-java"></span> [ant](http://ant.apache.org/)
    - ?<span class="devicons devicons-php"></span> [phing](https://www.phing.info/) 

!SLIDE clear-ideas no-bullet-list

## Clear Ideas about Grunt

- ?<span class="icon-calendar"></span>[Released in @@March 2012@@](http://bocoup.com/weblog/introducing-grunt/) by [Ben Allman ](http://twitter.com/cowboy)

<!-- ######################## USING GRUNT ######################## --> 

!SLIDE smallcode no-bullet-list

## <span class="icon-keyboard"></span> Using Grunt in an existing project

- @@Steps@@:

	1. Change to the project's root directory.
	1. Install project dependencies with `npm install`
	1. Run Grunt with `grunt`

!SLIDE smallcode

## <span class="icon-keyboard"></span> Using Grunt in an existing project

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

!SLIDE first-tasks smallcode showterm

## <span class="icon-keyboard"></span> Using Grunt in an existing project

[[+]](http://showterm.io/5dbd18bd9b0a2c10caf7c)

<iframe src="http://showterm.io/5dbd18bd9b0a2c10caf7c" width="700" height="380"></iframe>

<!-- ######################## FIRST TASKS ######################## --> 

!SLIDE smallcode no-bullet-list

## <span class="icon-keyboard"></span> Creating my first Grunt project

- @@Steps@@:

    1. Create a _project_ folder (and _src_ subfolder)
    1. Create a `package.json` interactively with `npm init`
    1. Create a simple `Gruntfile.js` (simple task, no plugin loading)
    1. Launch the task w/ Grunt

!SLIDE first-tasks smallcode

## <span class="icon-keyboard"></span> Creating my first Grunt project

	.
	├── Gruntfile.js
	├── package.json

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

!SLIDE first-tasks smallcode showterm

## <span class="icon-keyboard"></span> Creating my first Grunt project 

[[+]](http://showterm.io/a177bf1bdcc8033709a69)

<iframe src="http://showterm.io/a177bf1bdcc8033709a69" width="700" height="380"></iframe>

!SLIDE smallcode no-bullet-list

## <span class="icon-keyboard"></span> Loading Grunt plugins

- @@Steps@@:

    1. Create a _project_ folder and _src_ subfolder
    1. Create a `package.json` interactively with `npm init`
    1. Create a `Gruntfile.js` (as defined [here](#gruntfile1))
    1. Launch the default task w/ Grunt

!SLIDE first-tasks smallcode

## <span class="icon-keyboard"></span> Loading Grunt plugins

	.
	├── Gruntfile.js
	├── package.json
	└── src
	    └── foo.js

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

!SLIDE #gruntfile1 first-tasks smallcode

## <span class="icon-keyboard"></span> Loading Grunt plugins

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

!SLIDE first-tasks smallcode showterm

## <span class="icon-keyboard"></span> Loading Grunt plugins

[[+]](http://showterm.io/7a31032086f0cc49f3cec)

<iframe src="http://showterm.io/7a31032086f0cc49f3cec" width="700" height="380"></iframe>

<!-- ######################## CLEAR IDEAS GRUNTFILE.JS ######################## --> 

!SLIDE clear-ideas-gruntfile no-bullet-list smallcode

## Clear Ideas about Gruntfile.js

- <span class="icon-code"></span> [`grunt.initConfig({...})`](http://gruntjs.com/api/grunt.config#grunt.config.init) → [Configuration object](http://gruntjs.com/sample-gruntfile)
```
grunt.initConfig({
    pkg: grunt.file.readJSON('package.json')
    @@uglify@@: {
        @@options@@: {
            // the banner is inserted at the top of the output
            banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
        },
        @@dist@@: {
            @@files@@: {
                'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
            }
        }
    }
});
```

!SLIDE clear-ideas-gruntfile no-bullet-list smallcode

## Clear Ideas about Gruntfile.js

- <span class="icon-code"></span> Tasks are configured via `initConfig` using @@task-named properties@@ as key of a configuration object that has:
	- @@[_targets_](http://gruntjs.com/configuring-tasks#task-configuration-and-targets)@@ →  sets of files & options grouped (`dist`) →  `grunt uglify:dist`
	- @@[`options`](http://gruntjs.com/configuring-tasks#options)@@ →  object overrides general settings (also _target_ devel)
	- @@[`files`](http://gruntjs.com/configuring-tasks#files)@@ →  src & dest files



!SLIDE clear-ideas-gruntfile no-bullet-list smallcode

## Clear Ideas about Gruntfile.js

- <span class="icon-code"></span>[`grunt.loadNpmTasks(...);`](http://gruntjs.com/api/grunt.task#grunt.task.loadnpmtasks) → Load the Grunt plugins.
	- `grunt.@@loadNpmTasks@@("grunt-contrib-uglify");`
<br/><br/>
- <span class="icon-code"></span>[`grunt.registerTask(...);`](http://gruntjs.com/api/grunt.task#grunt.task.registertask) → Create "alias" for already loaded/created tasks
    - `grunt.@@registerTask@@('default', ['jshint', 'qunit', 'concat', 'uglify']);`

<!-- ######################## MORE INFO ######################## --> 

!SLIDE

##More info

- [Grunt | Official Site](http://gruntjs.com/)
- [Introducing Grunt | Boucup](http://bocoup.com/weblog/introducing-grunt/)
- [Get Up And Running With Grunt | Smashing Magazine](http://www.smashingmagazine.com/2013/10/29/get-up-running-grunt/)
- [Meet Grunt: The Build Tool for JavaScript | tutsplus](http://code.tutsplus.com/tutorials/meet-grunt-the-build-tool-for-javascript--net-24856)
- [JS Task Runners Comparison: Grunt vs Cake vs Gulp vs Broccoli](http://blog.cozycloud.cc/technic/2014/06/18/task-runners-comparison/)

