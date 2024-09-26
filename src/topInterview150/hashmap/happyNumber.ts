export function isHappy(n) {
  function sumOfSquaresOfDigits(num) {
    let totalSum = 0
    while (num > 0) {
      const digit = num % 10
      totalSum += digit * digit
      num = Math.floor(num / 10)
    }
    return totalSum
  }

  const seen = new Set()

  while (n !== 1) {
    if (seen.has(n)) {
      return false
    }
    seen.add(n)
    n = sumOfSquaresOfDigits(n)
  }

  return true
}
