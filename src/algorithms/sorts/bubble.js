export default class BubbleSort {
  static sort(array) {
    for (const element of array) {
      for (let j = 0; j < array.length - 1; j++) {
        if (array[j] > array[j + 1]) {
          ;[array[j], array[j + 1]] = [array[j + 1], array[j]]
        }
      }
    }
  }
}
