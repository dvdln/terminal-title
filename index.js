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
  var cmd = [
    'printf',           // Parses command to set title
    '"\\e]%d;%s\\a"',   // ANSI escape sequence to set title
    win ? 2 : 1,        // Set tab (1) or window (2)
    '"' + input + '"'   // Use rest of arguments as title string
  ];

  var log = [
    '%s Seting %s title: %s\n',
    chalk.green('>'),
    win ? 'window' : 'tab',
    chalk.cyan(input)
  ];

  console.log.apply(this, log);

  exec(cmd.join(' ')).stdout.pipe(process.stdout);
}
