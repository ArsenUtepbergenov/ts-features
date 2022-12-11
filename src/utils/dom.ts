export default class Dom {
  public static container = document.createElement('div')

  public static printArray<Type>(array: Type[]) {
    const item = document.createElement('span')
    for (const element of array) {
      item.innerHTML += `${element}, `
    }
    Dom.container.appendChild(item)
  }

  public static print(element: HTMLElement) {
    const item = document.createElement('span')
    item.innerHTML = `${element}`
    Dom.container.appendChild(item)
  }
}
