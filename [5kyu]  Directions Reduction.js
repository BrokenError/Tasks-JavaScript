// https://www.codewars.com/kata/550f22f4d758534c1100025a

function dirReduc(arr){
  let mas = {"NORTH": "SOUTH", "SOUTH": "NORTH", "EAST": "WEST", "WEST": "EAST"}
  for (let i = 0; i < arr.length-1; i++)
    {
      if (mas[arr[i]] == arr[i+1])
      {
        arr.splice(i, 2);
        return dirReduc(arr)
      }
    }
   return arr
}