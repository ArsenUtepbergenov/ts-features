export function isValid(s: string): boolean {
  const open = ['(', '{', '[']
  if (!open.includes(s[0])) return false
  if (s.length <= 1) return false

  const map: Record<string, string> = {
    ')': '(',
    '}': '{',
    ']': '[',
  }

  const stack = []

  for (const c of s) {
    if (open.includes(c)) {
      stack.push(c)
      continue
    }

    if (stack.pop() !== map[c]) {
      return false
    }
  }

  return !stack.length
}
