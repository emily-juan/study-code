var CountStream = require('./countsteam');
var countSteam = new CountStream('buffer');
var http = require('https');

http.get('https://nodejs.org/api/buffer.html', function(res) {
  res.pipe(countSteam);
});

countSteam.on('total', function(count) {
  console.log('Total matches:', count);
})