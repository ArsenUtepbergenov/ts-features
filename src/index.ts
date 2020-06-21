// import { shakerSort } from './algorithms/sorts/shaker-sort'
// import { insertionSort } from './algorithms/sorts/insertion-sort'
// import { shellSort } from './algorithms/sorts/shell-sort'
import { quickSort } from './algorithms/sorts/quick-sort'

// test array
const unsortedArrayInt = [2, 33, 4, -1, 3, -21, 99, 54, 66, 4, -4]
// const unsortedArrayFloat = [9.54, 3.3, -7.66, 34.92, -4.2, -1.1]
// const unsortedArrayString = ['f', 'ar', 'a', 'o', 's', 'wa']

function main() {
  // console.log(shakerSort(unsortedArrayFloat))
  // console.log(insertionSort(unsortedArrayString))
  // console.log(shellSort(unsortedArrayInt))
  console.log(quickSort(unsortedArrayInt))
}

main()