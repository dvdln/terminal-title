/*jshint node:true*/
'use strict';

var exec = require('child_process').exec;
var chalk = require('chalk');

module.exports = title;

/**
 * Sets title to current CLI tab or window.
 *
 * @param {string} input - Title to set
 * @param {Boolean} win - Add title to window instead of tab
 */
function title(input, win) {
    var cmd = [];

    cmd.push('printf');             // Parses command to set title
    cmd.push('"\\e]%d;%s\\a"');     // ANSI escape sequence to set title
    cmd.push(win ? 2 : 1);          // First %s: set tab (1) or window (2)
    cmd.push('"' + input + '"');    // Use rest of arguments as title string

    var log = [];

    log.push('%s Seting %s title: %s\n');
    log.push(chalk.green('>'));
    log.push(win ? 'window' : 'tab');
    log.push(chalk.cyan(input));

    console.log.apply(this, log);

    exec(cmd.join(' ')).stdout.pipe(process.stdout);
}
