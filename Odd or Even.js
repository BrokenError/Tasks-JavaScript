function oddOrEven(array) {
   return array.length == 0?'even':array.reduce((a,b)=>a+b)%2==0?'even':'odd';
}