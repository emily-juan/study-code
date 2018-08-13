// 标准I/O流的读写
process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function(text) {
  process.stdout.write(text.toUpperCase());
})
