// 1 <= n <= 8

export default function generateParenthesis(n: number): string[] {
  if (n < 1 || n > 8) return []

  const result: string[] = []

  const generate = (l: number, r: number, s: string) => {
    if (l > r) return

    if (l === 0 && r === 0) {
      result.push(s)
      return
    }

    if (l > 0) generate(l - 1, r, s + '(')
    if (r > 0) generate(l, r - 1, s + ')')
  }

  generate(n, n, '')

  return result
}

// n = 1, ()
// n = 2, ()() (())
// n = 3, ((())) (()()) (())() ()(()) ()()()
