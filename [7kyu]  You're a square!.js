// https://www.codewars.com/kata/54c27a33fb7da0db0100040e

var isSquare = function(n){
  return n < 0?false:Number.isInteger(Math.sqrt(n))?true:false; 
}