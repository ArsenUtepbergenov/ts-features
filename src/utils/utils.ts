export function debounce(func: (...args: unknown[]) => void, delay: number) {
  let timerId: number

  return function (...args: unknown[]) {
    if (timerId) {
      window.clearTimeout(timerId)
    }

    timerId = window.setTimeout(() => {
      func(...args)
    }, delay)
  }
}
