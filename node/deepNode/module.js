var myClass = require('./myClass');
var module2 = require('./module-2');

console.log(myClass.method());
console.log(module2.method());
console.log(module2.method2());

console.log('myClass', require.resolve('./myClass'));
console.log('modules', require.resolve('./module-2'));