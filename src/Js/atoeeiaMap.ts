export function atoeeiaMap(
  arr: number[],
  fn: (n: number, i: number) => number,
): number[] {
  for (let k = 0; k < arr.length; k++) {
    arr[k] = fn(arr[k], k)
  }

  return arr
}

/*
Constraints:

  1) 0 <= arr.length <= 1000
  2) -10^9 <= arr[i] <= 10^9
  3) fn returns a number

*/
