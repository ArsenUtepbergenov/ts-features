export function getRandomChar(): string {
  const uppers = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const all = uppers + uppers.toLowerCase()

  const index = getRandomInt(0, all.length - 1)

  return all.charAt(index)
}

export function getRandomFloat(min: number, max: number): number {
  return Number.parseFloat((Math.random() * (max - min + 1) + min).toFixed(2))
}

export function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}
