/*jshint node:true*/
'use strict';

var exec = require('child_process').exec;
var colors = require('colors');

function title(input, win) {
    var str = input.join(' ');

    var cmd = [
        'printf',
        '"\\e]%d;%s\\a"',
        win ? 2 : 1,
        '"' + str + '"'
    ].join(' ');

    console.log(
        '%s Changing %s title to %s',
        colors.green('>'),
        win ? 'window' : 'tab',
        colors.cyan(str)
    );

    exec(cmd).stdout.pipe(process.stdin);
}
