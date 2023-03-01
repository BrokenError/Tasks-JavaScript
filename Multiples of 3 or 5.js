function solution(number){
  if (number < 0) return 0
  let count = 0;
  for (let i = 0; i < number; i++)
  {
    i % 3 == 0 || i % 5 == 0 ? count+= i:0;
  }
  return count;
}