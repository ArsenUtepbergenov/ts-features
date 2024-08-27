/* eslint-disable @typescript-eslint/no-explicit-any */

type Callback = (...args: any[]) => any
type Subscription = {
  unsubscribe: () => void
}

class EventEmitter {
  private _eventCallbacks = new Map<string, Array<Callback>>()

  public subscribe(eventName: string, callback: Callback): Subscription {
    const ecs = this._eventCallbacks

    if (ecs.has(eventName))
      ecs.set(eventName, [...(ecs.get(eventName) as Callback[]), callback])
    else ecs.set(eventName, [callback])

    return {
      unsubscribe: () => {
        if (!ecs.has(eventName)) return

        const eC = ecs.get(eventName)

        if (eC) {
          const i = eC.findIndex(c => c === callback)

          eC.splice(i, 1)

          ecs.set(eventName, [...eC])
        }
      },
    }
  }

  public emit(eventName: string, args: any[] = []): any[] {
    const ecs = this._eventCallbacks

    if (!ecs.has(eventName)) return []

    const result = []

    for (const fn of ecs.get(eventName) as Callback[]) {
      result.push(fn(...args))
    }

    return result
  }
}

// function onClickCallback() {
//   return 99
// }
// const sub = emitter.subscribe('onClick', onClickCallback)

// // emitter.emit('onClick') // [99]
// // sub.unsubscribe() // undefined
// // emitter.emit('onClick') // []

// console.log(emitter.emit('onClick'))
// console.log(sub.unsubscribe())
// console.log(emitter.emit('onClick'))

const emitter = new EventEmitter()
const sub1 = emitter.subscribe('firstEvent', x => x + 1)
// const sub2 = emitter.subscribe('firstEvent', x => x + 2)

console.log(sub1.unsubscribe())
console.log(emitter.emit('firstEvent', [5]))
