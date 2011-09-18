# Jurassic Park Status Board/Screen

This is something I decided to create because well... Jurassic Park is awesome ;P


## So what is it?

This is designed to be a full screen dashboard or status screen designed around the computer systems 
of Jurassic Park. To be used on a large display run by a browser in full-screen mode.

This is currently a very much work in progress, and is mainly just a design task right now. 

The idea is the get the screens right for use, then provide some functionality to plug it into Nagios.

## Prerequisites

* Ruby 1.9.2
* Bundler
* Firefox


## Installation/Running

``` ruby
bundle install
shotgun server.rb
```

## Screenshots

[![Ok](http://files.limi.co.uk/screenshots/jp-ok-thumb.png)] (http://files.limi.co.uk/screenshots/jp-ok.png)
[![Fail](http://files.limi.co.uk/screenshots/jp-bad-thumb.png)] (http://files.limi.co.uk/screenshots/jp-bad.png)


## Things to know

To cause the interface to fail, uncomment the line in the `application.coffee` script `break_stuff()`