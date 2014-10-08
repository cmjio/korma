'use strict';

var slice = Array.prototype.slice;

module.exports = function korma(func) {
  var args = slice.call(arguments, 1);

  return function() {
    return func.apply(this, args.concat(slice.call(arguments, 0)));
  }
};
