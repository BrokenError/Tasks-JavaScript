// https://www.codewars.com/kata/57202aefe8d6c514300001fd

function saleHotdogs(n){
  if (n < 5) return n*100;
  else if (n < 10 && n >= 5) return n*95;
  else return n*90;
}