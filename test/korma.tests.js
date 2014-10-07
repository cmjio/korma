var korma = require('../');
var assert = require('assert');
var should = require('should');

describe('korma', function() {

  it('should return the result of the function once it has been executed', function() {

    // Example 1
    var addition = korma(function(a, b){
      return a + b;
    }, 1);

    addition(1).should.equal(2);

    // Example 2
    var pushToArray = korma(function(start, end){
      var arr = [];
      for(var i = start; i <= end; i++){
        arr.push(i);
      }
      return arr;
    }, 1);

    pushToArray(10).should.be.an.Array;
  
  });

});