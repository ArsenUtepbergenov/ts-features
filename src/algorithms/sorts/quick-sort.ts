export function quickSort<Type>(array: Type[], begin = 0, end: number = array.length - 1) {
  if (array.length < 2 || end < begin) return array

  const pivot = partition(array, begin, end)
  if (begin < pivot - 1) quickSort(array, begin, pivot - 1)
  if (pivot < end) quickSort(array, pivot, end)

  return array
}

function partition<Type>(array: Type[], begin: number, end: number) {
  const mid = array[Math.floor((end + begin) / 2)]

  do {
    while (array[begin] < mid) begin++
    while (array[end] > mid) end--

    if (begin <= end) {
      ;[array[begin], array[end]] = [array[end], array[begin]]
      begin++
      end--
    }
  } while (begin <= end)

  return begin
}
