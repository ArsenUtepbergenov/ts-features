type F = (x: number) => number

export function compose(functions: F[]): F {
  return x => functions.reduceRight((p, c: F) => c(p), x)
}

/*
Constraints:

  1) -1000 <= x <= 1000
  2) 0 <= functions.length <= 1000
  3) all functions accept and return a single integer

*/
