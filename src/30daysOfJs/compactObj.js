/* eslint-disable no-undef */
/* eslint-disable no-extra-boolean-cast */

function compact(obj) {
  if (Array.isArray(obj)) {
    return obj
      .map(compact) // Recursively compact each element
      .filter(Boolean) // Filter out falsy values
  } else if (typeof obj === 'object' && obj !== null) {
    return Object.keys(obj).reduce((acc, key) => {
      const value = compact(obj[key])
      if (Boolean(value)) {
        acc[key] = value
      }
      return acc
    }, {})
  }
  return obj // Base case: return value if it's neither an object nor an array
}

console.log(compact([null, 0, false, 1]))
console.log(compact({ a: null, b: [false, 1] }))
console.log(compact([null, 0, 5, [0], [false, 16]]))
