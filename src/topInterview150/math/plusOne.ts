export function plusOne(digits: number[]): number[] {
  let r = 0

  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] !== 9) {
      digits[i] = digits[i] + 1
      return digits
    }

    if (digits[i] === 9) {
      digits[i] = 0
      r = 1
      if (i === 0) {
        digits.unshift(1)
        return digits
      }
    } else {
      if (r) {
        digits[i] = digits[i] + 1
        return digits
      }
    }
  }

  return []
}
