export default function firstUniqChar(s: string): number {
  const len = s.length

  if (len < 1 || len > Math.pow(10, 5)) return -1
  if (len === 1) return 0

  const m: string[] = []
  let result = -1

  for (let i = 1; i < len; i++) {
    const temp = s[i - 1]
    if (s.substring(i).includes(temp) && !m.includes(temp)) m.push(temp)
  }

  result = [...s].findIndex(el => !m.includes(el))

  return result
}
