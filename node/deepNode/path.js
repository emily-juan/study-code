const path = require('path');
console.log('__dirname:', __dirname);
console.log('__filename:', __filename);

var correctPath = path.join(__dirname, 'views', 'view.html');
console.log(correctPath);