/*jshint node:true*/
'use strict';

var meow = require('meow');
var title = require('../');

var cli = meow({
    pkg: '../package.json',
    help: 'Usage\n  title <window title>'
});

if (!cli.input.length) {
    cli.showHelp();
} else {
    title(cli.input, cli.flags.window);
}
