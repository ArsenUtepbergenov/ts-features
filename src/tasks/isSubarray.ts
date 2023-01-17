// 1:
// function calculateFrequency(array) {
//   const temp = {}

//   for (const i of array) temp[i] ? temp[i]++ : temp[i] = 1

//   return temp
// }

// const sum = array => array.reduce((a, b) => a + b, 0);

function isSubarray(array: number[], subarray: number[]): boolean {
  const length = array.length
  const subLength = subarray.length

  if (length < subLength) return false

  // 1:
  // if (sum(Object.values(calculateFrequency(Array.from(new Set(array))))) !==
  //     sum(Object.values(calculateFrequency(subarray))))
  //   return false

  // 2:
  for (let i = 0; i < subarray.length; i++) {
    const index = array.indexOf(subarray[i])
    if (index === -1) return false
    delete array[index]
  }

  return true
}

export default isSubarray
