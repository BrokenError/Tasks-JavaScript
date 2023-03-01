// https://www.codewars.com/kata/54da5a58ea159efa38000836

function findOdd(A) {
  const counts = {};

  for (const num of A) {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }
  
  for (let i = 0; i < A.length; i++)
    {
      if (counts[A[i]] % 2 == 1)
        return A[i];
    }
}