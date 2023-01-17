function areAnagrams(array: string[]): boolean {
  const sorted = array.map(str => Array.from(str).sort().join(''))

  const original = sorted[0]
  for (const i of sorted) {
    if (original !== i) return false
  }

  return true
}

export default areAnagrams
