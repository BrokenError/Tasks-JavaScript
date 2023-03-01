// https://www.codewars.com/kata/53dbd5315a3c69eed20002dd

function filter_list(l) {
  let arr = [];
  for (let i = 0; i < l.length; i++)
  {
    if (l[i].toFixed)
      arr.push(l[i]);
  }
  return arr;
}