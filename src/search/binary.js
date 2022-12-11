// binary search
function binarySearch(array, value) {
  if (array.length == 0)
    return -1;

  let first = 0
  let last = array.length - 1;
  let mid = 0;

  if (value == array[first])
    return first;
  if (value == array[last])
    return last;

  if (first > last)
    return -1;

  while (first < last) {
    mid = first + Math.floor((last - first) / 2);

    if (array[mid] >= value)
      last = mid;
    else
      first = ++mid;
  }

  if (array[last] == value)
    return last;
  else
    return -1;
}
// test binary search
const array = [-23, -33, -1, 5, 6, 7, 45, 55, 109, 1007, 5654];

console.log(binarySearch(array, 25));
console.log(binarySearch(array, -1));
console.log(binarySearch(array, -23));
console.log(binarySearch(array, 2));
