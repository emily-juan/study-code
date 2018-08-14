// 响应其它进程了发出的信号
process.stdin.resume();
process.on('SIGNUP', function() {
  console.log('Reloading configuration...');
})

console.log('PID', process.pid);