function filter_list(l) {
  let arr = [];
  for (let i = 0; i < l.length; i++)
  {
    if (l[i].toFixed)
      arr.push(l[i]);
  }
  return arr;
}