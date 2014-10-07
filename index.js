module.exports = function korma(func){
  var args = Array.prototype.slice.call(arguments, 1);

  return function() {
    return func.apply(this, args.concat(Array.prototype.slice.call(arguments, 0)));
  }
};