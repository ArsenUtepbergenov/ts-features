export function search(array: number[], target: number): number {
  for (let i = 0; i < array.length; i++) {
    if (target === array[i]) return i
  }

  return -1
}

export function binarySearch(array: number[], target: number): number {
  let begin = 0
  let end = array.length - 1

  if (target < array[begin] || target > array[end]) return -1

  while (true) {
    if (target === array[begin]) return begin
    if (target === array[end]) return end
    if (end - begin <= 1) return -1

    const mid = Math.floor((begin + end) / 2)

    if (target > array[mid]) begin = mid + 1
    else if (target < array[mid]) end = mid - 1
    else return mid
  }
}
