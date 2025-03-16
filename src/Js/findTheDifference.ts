export function findTheDifference(s: string, t: string): string {
  let sum = 0

  for (const char of t) {
    sum += char.charCodeAt(0)
  }

  for (const char of s) {
    sum -= char.charCodeAt(0)
  }

  return String.fromCharCode(sum)
}
