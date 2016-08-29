#!/usr/bin/env node

var pkg = require('../package.json');
var program = require('commander');
var title = require('../index');

program
    .version(pkg.version)
    .usage('<title> [--window]')
    .option('-w, --window', 'add title to window instead of tab')
    .parse(process.argv);

if (!program.args.length) {
    program.help();
} else {
    title(program.args.join(' '), program.window);
}
