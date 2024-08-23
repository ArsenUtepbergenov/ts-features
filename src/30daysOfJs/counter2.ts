type Counter = {
  increment: () => number
  decrement: () => number
  reset: () => number
}

export function createCounter(init: number): Counter {
  const original = init
  let count = init

  const increment = function (): number {
    return ++count
  }

  const decrement = function (): number {
    return --count
  }

  const reset = function (): number {
    count = original
    return original
  }

  return {
    increment,
    decrement,
    reset,
  }
}

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
