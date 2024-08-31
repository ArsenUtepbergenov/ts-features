export function wordPattern(pattern: string, s: string): boolean {
  const pToS = new Map()
  const sToP = new Map()

  const words = s.split(' ')

  if (pattern.length !== words.length) return false

  for (let i = 0; i < pattern.length; i++) {
    const charP = pattern[i]
    const wordS = words[i]

    if (pToS.has(charP)) {
      if (wordS !== pToS.get(charP)) return false
    } else {
      pToS.set(charP, wordS)
    }

    if (sToP.has(wordS)) {
      if (charP !== sToP.get(wordS)) return false
    } else {
      sToP.set(wordS, charP)
    }
  }

  return true
}
