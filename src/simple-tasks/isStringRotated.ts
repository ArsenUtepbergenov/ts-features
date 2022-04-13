function isStringRotated(source: string, test: string): boolean {
  if (source.length !== test.length) return false

  for (let i = 0; i < source.length; i++) {
    const rotated = source.slice(i, test.length) + source.slice(0, i)

    if (rotated === test) return true
  }

  return false
}

export default isStringRotated
