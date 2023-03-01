// https://www.codewars.com/kata/525f50e3b73515a6db000b83

function createPhoneNumber(numbers){
  let result = "("; 
  for (let i =0; i < numbers.length; i++)
    {
      if (i == 3)
        {
          result += ') ' + numbers[i];
        }
      else if (i == 6)
        {
          result += '-' + numbers[i];
        }
      else
        {
          result += numbers[i];
        }
    }
  return result;
}