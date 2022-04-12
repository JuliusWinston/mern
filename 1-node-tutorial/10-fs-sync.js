const {readFileSync, writeFileSync} = require('fs');
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

writeFileSync('./content/result-sync.txt', `The result is: ${first}, ${second}`, {flag: 'a'}); // {flag: a} to append instead of writing over