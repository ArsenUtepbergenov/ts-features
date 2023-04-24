export function includes<Item>(arr: readonly Item[], item: unknown): item is Item {
  return arr.includes(item as Item)
}

type Falsy = false | 0 | '' | null | undefined | 0n

export function isTruthy<T>(value: T): value is Exclude<T, Falsy> {
  return Boolean(value)
}
