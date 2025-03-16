export function repeatedSubstringPattern(s: string) {
  if (s.length <= 1) return false

  for (let i = 1; i <= s.length / 2; i++) {
    if (s.length % i === 0) {
      const substring = s.substring(0, i)
      const constructedString = substring.repeat(s.length / i)
      if (constructedString === s) {
        return true
      }
    }
  }

  return false
}
