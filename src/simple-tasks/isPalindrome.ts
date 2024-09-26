// 1 <= s.length <= 2 * 10^5
// s consists only of printable ASCII characters.

export default function isPalindrome(s: string): boolean {
  const len = s.length

  if (len < 1 || len > 2 * Math.pow(10, 5)) return false

  const lowercase = s.toLocaleLowerCase()
  const parsed = lowercase.replace(/[^a-z0-9]/gi, '')
  const reversed = [...parsed].reverse().join('')

  return parsed === reversed
}

/*
function isPalindrome(s: string): boolean {
  const anS = s.replace(/[^a-z0-9]/gi, '').toLocaleLowerCase()

  if (anS === '') return true

  let b = 0,
    e = anS.length - 1

  while (b < e) {
    if (anS[b] !== anS[e]) return false
    b++
    e--
  }

  return true
}
*/
