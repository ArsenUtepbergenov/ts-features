function isUnique(str: string = ''): boolean {
  // const length = str.length

  // 1:
  // for (let i = 0; i < length; i++) {
  //   const current = str[i]

  //   if (str.lastIndexOf(current) !== i) return false
  // }

  // 2:
  // const set = new Set()

  // for (let i = 0; i < length; i++) {
  //   const current = str[i]

  //   if (set.has(current)) return false

  //   set.add(current)
  // }

  // return true

  // 3:
  return new Set(str).size === str.length
}

export default isUnique