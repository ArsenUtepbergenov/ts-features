type Fn = (...params: number[]) => number

export let callCount = 0

export function memoize(fn: Fn): Fn {
  const cache = new Map<string | number, number>()

  return function (...args) {
    const key = JSON.stringify(args)

    if (cache.has(key)) return cache.get(key) as number

    const result = fn(...args)

    cache.set(key, result)

    callCount++

    return result
  }
}

// const sum = (a: number, b: number): number => a + b
// const factorial = (n: number): number => (n <= 1 ? 1 : n * factorial(n - 1))
// const fib = (n: number): number => (n <= 1 ? 1 : fib(n - 1) + fib(n - 2))

/*
Constraints:

  1) 0 <= a, b <= 10^5
  2) 1 <= n <= 10
  3) 0 <= actions.length <= 10^5
  4) actions.length === values.length
  5) actions[i] is one of "call" and "getCallCount"
  6) fnName is one of "sum", "factorial" and "fib"
  
*/
