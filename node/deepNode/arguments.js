// 技巧7 基准测试  console.time() 和 console.timeEnd().
var args = {
  '-h': displayHelp,
  '-r': readFile
};

function displayHelp() {
  console.log('Argument processor:', args);
}

function readFile(file) {
  if (file && file.length) {
    console.log('Reading:', file);
    console.time('read');
    var stream = require('fs').createReadStream(file);
    stream.on('end', function() {
      console.timeEnd('read');
    })
    stream.pipe(process.stdout);
  } else {
    console.error('A file must be provied with the -r option');
    process.exit(1);
    // echo $? 来显示退出码
  }
}

// process.argv 可以取到命令行的参数。
if (process.argv.length > 0) {
  process.argv.forEach(function(arg, index) {
    if (args[arg]) {
      console.log(args[arg], process.argv.slice(index + 1))
      args[arg].apply(this, process.argv.slice(index + 1));
    }
  });
}

// node arguments.js -r file.txt
// node arguments.js -h