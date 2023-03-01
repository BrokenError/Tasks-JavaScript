// https://www.codewars.com/kata/526571aae218b8ee490006f4

var countBits = function(n) {
  return n==0?0:n.toString(2).match(/1/g).length;
};