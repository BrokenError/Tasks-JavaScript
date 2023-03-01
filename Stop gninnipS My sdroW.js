function spinWords(string){
  let res = string.split(' ')
  
  for (let i = 0; i < res.length; i++)
    {
      if (res[i].length > 4)
      {
        res[i] = res[i].split('').reverse().join("")
      }
    }
  return res.join(' ')
}