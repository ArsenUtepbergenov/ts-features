export function isIsomorphic(s: string, t: string): boolean {
  const sToT = new Map()
  const tToS = new Map()

  for (let i = 0; i < s.length; i++) {
    const charS = s[i]
    const charT = t[i]

    if (sToT.has(charS)) {
      if (sToT.get(charS) !== charT) return false
    } else {
      sToT.set(charS, charT)
    }

    if (tToS.has(charT)) {
      if (tToS.get(charT) !== charS) return false
    } else {
      tToS.set(charT, charS)
    }
  }

  return true
}
