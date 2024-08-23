function checkConstraints(n: number) {
  return -1000 <= n && n <= 1000
}

export function createCounter(n: number): () => number {
  if (!checkConstraints(n)) throw new Error(`Invalid ${n}, must be -1000 <= n <= 1000`)

  let count = n

  return function () {
    return count++
  }
}

/*
Constraints:

  1) -1000 <= n <= 1000
  2) 0 <= calls.length <= 1000
  3) calls[i] === "call"

*/
