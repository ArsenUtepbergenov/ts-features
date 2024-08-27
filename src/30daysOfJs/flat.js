/* eslint-disable no-undef */

function flat(arr, n) {
  const result = []

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

console.log(flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 1))
console.log(flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 2))
