// https://www.codewars.com/kata/520b9d2ad5c005041100000f

function pigIt(str){
  str = str.split(' ')
  for (let i = 0; i < str.length; i++)
    {
      if (str[i] != '!' && str[i] != '?')
      {
        str[i] = str[i].substr(1) + str[i][0] + "ay"
      }
    }
  return str.join(' ')
}