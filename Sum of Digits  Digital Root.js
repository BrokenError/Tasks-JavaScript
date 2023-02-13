function digitalRoot(n) {
  while (String(n).length > 1)
   {
     n = Array.from(String(n), n => Number(n)).reduce((partialSum, a) => partialSum + a, 0);;
   }
  return n;
}