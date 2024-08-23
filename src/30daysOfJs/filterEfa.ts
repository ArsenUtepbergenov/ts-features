/* eslint-disable  @typescript-eslint/no-explicit-any */

type Fn = (n: number, i: number) => any

export function filterEfa(arr: number[], fn: Fn): number[] {
  const result: number[] = []

  for (const [i, val] of arr.entries()) {
    if (fn(val, i)) result.push(val)
  }

  return result
}

/*
Constraints:

  1) 0 <= arr.length <= 1000
  2) -10^9 <= arr[i] <= 10^9

*/
