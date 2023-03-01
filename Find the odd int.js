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