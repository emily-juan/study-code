// 打印日志消息
var name = 'alex';
var user = { name: 'alex' };

console.log('Hello');
console.log('Hello %s', name); // 变量注入 %s string, %d number, %j JSON
console.log('Hello %j', user);
console.log('Hello：', name);
console.log('Hello：', user);

console.error('Error, bad user:', user);

//  node console.js 2> errors-file.log 
//  错误消息会被重定向到 errors-file.log
// 标准流有3个 stdin, stdout, stderr, 在终端中 0 代表输入流，1 代表输出流，2 代表错误
// 2> 就会重定向

// 堆栈追踪
// console.trace();
