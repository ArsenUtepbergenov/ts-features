function lengthOfLongestSubstring(s: string) {
  const temp: string[] = []
  const l = s.length
  let i = 0
  let pMax = 0

  while (i < l) {
    if (!temp.includes(s[i])) {
      temp.push(s[i])
      if (pMax < temp.length) pMax = temp.length
      i++
    } else {
      if (temp?.length) temp.shift()
    }
  }

  return pMax
}
