var Writable = require('stream').Writable;
var util = require('util');

util.inherits(CountSteam, Writable);

function CountSteam(matchText, options) {
  Writable.call(this, options);
  this.count = 0;
  this.matcher = new RegExp(matchText, 'ig');
}

CountSteam.prototype._write = function(chunk, encoding, cb) {
  var matches = chunk.toString().match(this.matcher);
  if (matches) {
    this.count += matches.length;
  }
  cb();
}

CountSteam.prototype.end = function() {
  this.emit('total', this.count);
}

module.exports = CountSteam;