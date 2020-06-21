export function shakerSort<Type>(array: Type[]) {
  if (!array.length)
    return array

  let left = 0
  let right = array.length - 1
  let optimum = 0
  while (left < right) {
    for (let i = 0; i < right; i++) {
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]]
        optimum = i
      }
    }
    right = optimum
    for (let i = right; i > left; i--) {
      if (array[i - 1] > array[i]) {
        [array[i - 1], array[i]] = [array[i], array[i - 1]]
        optimum = i
      }
    }
    left = optimum
  }
  return array
}