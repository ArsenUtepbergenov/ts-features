export default class InsertSort {
  static sort (array) {
    for (let i = 1; i < array.length; i++) {
      let insertElement = array[i];
      let insertPosition = i;
      for (let j = insertPosition - 1; j >= 0; j--) {
        if (insertElement < array[j]) {
          array[j + 1] = array[j];
          insertPosition--;
        }
      } 
      array[insertPosition] = insertElement;
    }
  }
}