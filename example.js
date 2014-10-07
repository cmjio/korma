var korma = require("./");

var seq5 = korma(function sequence(start, end){
  var result = [];
  for(var i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
}, 1);
var res1 = seq5(8);
console.log(res1);

var seeya = korma(function(str1, str2){
  return str1.concat(' ').concat(str2);
}, 'Thats all folks.');

var res2 = seeya('See you next time');
console.log(res2)