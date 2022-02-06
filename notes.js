const os = require('os');
const path = require('path');

const {readFileSync, writeFileSync} = require('fs');

// console.log(os.userInfo());
// console.log(`System uptime: ${os.uptime()} seconds`)

// console.log(path.sep);
// console.log(path.join('/test', 'a', 'b'));
// console.log(path.basename('/test/a/b'));
// console.log(path.resolve(__dirname, 'app.js'));

const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');

console.log(first);
console.log(second);

writeFileSync('./content/concat.txt', `${first}\n${second}\n`, {flag: 'a'});