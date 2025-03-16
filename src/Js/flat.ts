export function flat(arr, n) {
  const result: unknown[] = []

  function flatten(currentArr, depth) {
    for (let i = 0; i < currentArr.length; i++) {
      if (Array.isArray(currentArr[i]) && depth > 0) {
        flatten(currentArr[i], depth - 1)
      } else {
        result.push(currentArr[i])
      }
    }
  }

  flatten(arr, n)
  return result
}
