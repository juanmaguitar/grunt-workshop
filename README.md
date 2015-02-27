[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)

# Workshop "Getting started w/ Grunt" (Ironhack 2015) #

## Description ##

This repository contains the materials used in the workshop "Getting started w/ Grunt" done for [Ironhack](http://www.ironhack.com/en/) on 26th February 2015 as part of their [Web Development Bootcamp](http://www.ironhack.com/en/)

## Training Goals ##

Know what [Grunt](http://gruntjs.com/) is, why it's useful and how to use it in our own projects

## Materials ##

You can access to the presentation used in the workshop from the URL : [http://juanmaguitar.github.io/grunt-workshop/](http://juanmaguitar.github.io/grunt-workshop/)

## Some tips for the workshop

- To [start using Grunt](http://gruntjs.com/getting-started) we should have installed in our machine Node.js (>= 0.8.0. ) and NPM
- Remember that **first thing to do to start using grunt** is installing the CLI package globally → `npm install -g grunt-cli`
- If you have issues when launching `npm install` in existing projects remember to check the writable permissions of that folder
- If you have issues w/ the [grunt-contrib-compass](https://github.com/gruntjs/grunt-contrib-compass) have a look at [these solutions](http://stackoverflow.com/questions/23042166/grunt-contrib-sass-not-working-with-compass)

## Extra tips

### Default values for package.json

We can set default values for our _package.json_ so they are automatically filled when we use  → `npm init`

    $ npm config set init.author.name "JuanMa Garrido"
    $ npm config set init.author.email JuanMa.Garrido@gmail.com
    $ npm config set init.author.url http://apuntesjs.com
    $ npm config set init.license MIT

### Project Scaffolding

Start quickly grunt projects w/ [project-scaffolding](http://gruntjs.com/project-scaffolding)

    npm install -g grunt-init
    git clone https://github.com/gruntjs/grunt-init-gruntfile.git ~/.grunt-init/gruntfile
    grunt-init gruntfile


## Using this material ##

You're free to use this material according to the [license](http://creativecommons.org/licenses/by-sa/3.0/deed.en). 
If you use this material for any training i would love to [know it](<mailto:JuanMa.Garrido@gmail.com>)

## Copyright & Licencia ##

This work by author is licensed under a [Creative Commons Attribution-ShareAlike 3.0 Unported License](http://creativecommons.org/licenses/by-sa/3.0/deed.en_US).

You can copy, distribute, publish and modify this material by attributing to _Juan Manuel Garrido_ the original authoring and referencing [this repository](https://github.com/juanmaguitar/grunt-workshop). If you modify or create something from this material, you can distribute the resulting work only under the same license or another compatible one. Some of this conditions may not be applied if you get permission from the author.  If you reuse or distribute this work, the license terms of the work must be shown clearly. The best way to do this is by showing a link to the license [Creative Commons Attribution-ShareAlike 3.0 Unported License](http://creativecommons.org/licenses/by-sa/3.0/deed.en_US). 

_Copyright &copy;2015 Juan Manuel Garrido _
