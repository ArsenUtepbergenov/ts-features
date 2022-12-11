export default class SelectionSort {
  static sort (array) {
    for (let i = 0; i < array.length; i++) {
      for (let j = i; j < array.length; j++) {
        if (array[i] > array[j + 1]) {
          [array[j + 1], array[i]] = [array[i], array[j + 1]]
        }
      }
    }
  }
}