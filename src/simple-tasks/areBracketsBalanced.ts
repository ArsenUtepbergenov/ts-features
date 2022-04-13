function areBracketsBalanced(str: string): boolean {
  const begin = '({['
  const end = ']})'

  const brackets = {
    ')': '(',
    '}': '{',
    ']': '[',
  }

  const queue = []

  for (const symbol of str) {
    if (begin.includes(symbol))
      queue.push(symbol)
    else if (end.includes(symbol)) {
      const last = queue.pop()
      if (brackets[symbol] !== last) return false
    }
  }

  return !queue.length
}

export default areBracketsBalanced