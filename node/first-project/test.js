var assert = require('assert');
var CountStream = require('./countsteam');
var countStream = new CountStream('example');

var fs = require('fs');
var passed = 0;

countStream.on('total', function(count) {
  assert.equal(count, 1);
  passed++;
});
// 会报错 ？ fs.createReadSteam is not a function
fs.createReadSteam('sample.txt').pipe(countSteam);

read();

process.on('exit', function() {
  console.log('Assertions passed:', passed);
})