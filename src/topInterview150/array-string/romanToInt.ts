export function romanToInt(s: string): number {
  const map: Record<string, number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
  }

  const map1 = ['IV', 'IX', 'XL', 'XC', 'CD', 'CM']
  const map2 = ['I', 'V', 'X', 'L', 'D', 'C', 'M']

  const temp: number[] = []

  let i

  for (i = s.length - 1; i >= 0; ) {
    const n = `${s[i - 1]}${s[i]}`

    if (map1.includes(n)) {
      temp.unshift(map[n])
      i -= 2
    } else if (map2.includes(s[i])) {
      temp.unshift(map[s[i]])
      i--
    }
  }

  return temp.reduce((a, c) => a + c)
}
