/*jshint node:true*/
'use strict';

var exec = require('child_process').exec;
var colors = require('colors');

module.exports = title;

/**
 * Sets title to current CLI tab or window.
 *
 * @param {strint} input - Title to set
 * @param {Boolean} win - Add title to window instead of tab
 */
function title(input, win) {
    var cmd = [
        'printf',
        '"\\e]%d;%s\\a"',
        win ? 2 : 1,
        '"' + input + '"'
    ].join(' ');

    console.log(
        '%s Changing %s title: %s',
        colors.green('>'),
        win ? 'window' : 'tab',
        colors.cyan(input)
    );

    exec(cmd).stdout.pipe(process.stdout);
}
