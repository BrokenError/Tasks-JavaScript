function digPow(n, p){
  let arr = []; let num = 0;
  for (let i = 0; i < String(n).length; i++)
  {
    num += Math.pow(parseInt(String(n)[i]), p);
    p++;
  }
  return num%n==0?num/n:-1;
}