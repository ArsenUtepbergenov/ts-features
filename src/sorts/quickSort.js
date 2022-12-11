// quick sort
function quickSort(array, begin, end) {
  if (array.length == 0 || begin >= end)
    return -1;

  let pivot = 0;

  if (array.length > 1) {
    pivot = partition(array, begin, end);
    if (begin < pivot - 1)
      quickSort(array, begin, pivot - 1);
    if (pivot < end)
      quickSort(array, pivot, end);
  }
}

function partition(array, begin, end) {
  let left = begin;
  let right = end;
  let mid = array[Math.floor((right + left) / 2)];
  
  do {
    while (array[left] < mid) left++;
    while (array[right] > mid) right--;

    if (left <= right) {
      [array[left], array[right]] = [array[right], array[left]];
      left++;
      right--;
    }
  } while (left <= right);
  return left;
}

// test quick sort
const array = [6, -7, 45, 55, 109, 1007, 7, 7, 7.3, -23, -33.5, -1, 5];

quickSort(array, 0, array.length - 1);

console.log(array);
