// https://www.codewars.com/kata/5266876b8f4bf2da9b000362

function likes(names) {
  let len_names = names.length
  if (len_names == 0)
    {
      return 'no one likes this'
    }
  else if (len_names == 1)
    {
      return names[0] +' likes this'
    }
  else if (len_names == 2)
    {
      return names[0] + " and " + names[1] +' like this'
    }
  else if (len_names == 3)
    {
      return names[0] + ", " + names[1] + " and " + names[2] +' like this'
    }
  else
    {
      return names[0] + ", " + names[1] + " and " + (len_names-2) +' others like this'
    }
}