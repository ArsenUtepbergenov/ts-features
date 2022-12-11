export default class Utilities {
  // default result container
  static container = document.getElementById('container');
  static defaultItemStyle = 'color: #8BC34A; padding: 7px;'
  // static methods
  static printArray (array) {
    const item = document.createElement('span');
    for (const element of array) {
      item.style.cssText = this.defaultItemStyle;
      item.innerHTML += `${element}, `;
    }
    container.appendChild(item);
  }
  static print (element) {
    const item = document.createElement('span');
    item.style.cssText = this.defaultItemStyle;
    item.innerHTML = `${element}`;
    container.appendChild(item);
  }
}