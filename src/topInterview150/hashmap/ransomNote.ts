interface MapM {
  [key: string]: number
}

export function canConstruct(ransomNote: string, magazine: string): boolean {
  const mapM: MapM = {}

  for (const s of magazine) {
    if (mapM[s]) {
      mapM[s] = mapM[s] + 1
    } else {
      mapM[s] = 1
    }
  }

  console.log(mapM)

  for (const s of ransomNote) {
    if (mapM[s] > 0) {
      mapM[s] = mapM[s] - 1
    } else {
      return false
    }
  }

  return true
}
