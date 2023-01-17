function add(a?, b?) {
  if (!a) return add
  if (!b) {
    return function sum(c) {
      if (!c) return sum
      return a + c
    }
  }
  return a + b
}

export default add
