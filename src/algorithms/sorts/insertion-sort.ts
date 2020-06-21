export function insertionSort<Type>(array: Type[]) {
  if (!array.length)
    return array

  const sortedArray: Type[] = []

  for (let i = 0; i < array.length; i++) {
    let k = i
    sortedArray.push(array[i])
    while (k > 0 && sortedArray[k] < sortedArray[k - 1]) {
      [sortedArray[k], sortedArray[k - 1]] = [sortedArray[k - 1], sortedArray[k]]
      k--
    }
  }

  return sortedArray
}