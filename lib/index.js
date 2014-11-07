/*jshint node:true*/
'use strict';

var exec = require('child_process').exec;
var colors = require('colors');

module.exports = title;

/**
 * Sets title to current CLI tab or window.
 *
 * @param {Array} input - Array of strings to concat to title
 * @param {Boolean} win - Add title to window instead of tab
 */
function title(input, win) {
    var str = input.join(' ');

    var cmd = [
        'printf',
        '"\\e]%d;%s\\a"',
        win ? 2 : 1,
        '"' + str + '"'
    ].join(' ');

    console.log(
        '%s Changing %s title: %s',
        colors.green('>'),
        win ? 'window' : 'tab',
        colors.cyan(str)
    );

    exec(cmd).stdout.pipe(process.stdin);
}
