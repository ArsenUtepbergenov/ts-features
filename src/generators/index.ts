export const iterator = {
  [Symbol.iterator](n = 10) {
    let i = 0
    return {
      next() {
        if (i < n) {
          return { value: ++i, done: false }
        }
        return { value: undefined, done: true }
      },
    }
  },
}
