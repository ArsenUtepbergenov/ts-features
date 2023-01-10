/* eslint-disable @typescript-eslint/no-non-null-assertion */
export default class Dom {
  public static container = document.createElement('div')

  public static printArray<Type>(array: Type[]) {
    const item = document.createElement('span')
    array.forEach(i => (item.innerHTML += `${i}, `))
    Dom.container.appendChild(item)
  }

  public static print(element: HTMLElement) {
    const item = document.createElement('span')
    item.innerHTML = `${element}`
    Dom.container.appendChild(item)
  }

  public static printInBody(str?: string | number) {
    const body = document.querySelector('body')!
    body.innerHTML = `${str}`
  }
}
