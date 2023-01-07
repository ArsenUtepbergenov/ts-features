export function binarySearch(array: number[], target: number): number {
  if (!array.length) return -1

  let start = 0
  let end = array.length - 1

  while (start <= end) {
    const mid = Math.floor((start + end) / 2)

    if (array[mid] === target && (mid === 0 || array[mid - 1] < target)) return mid
    else if (target <= array[mid]) end = mid - 1
    else start = mid + 1
  }

  return -1
}
