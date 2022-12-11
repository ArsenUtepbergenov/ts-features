const iterator = {
  [Symbol.iterator](n = 10) {
    let i = 0
    return {
      next() {
        if (i < n) {
          return { value: ++i, done: false }
        }
        return { value: undefined, done: true }
      }
    }
  }
}

function* iterator1(n = 10) {
  for (let i = 0; i < n; i++) {
    yield i
  }
}

for (const i of iterator) {
  console.log(i)
}

for (const i of iterator1(3)) {
  console.log(i)
}