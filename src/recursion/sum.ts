export function sumR(n: number) {
  if (n === 1) return 1
  
  return n + sumR(n - 1)
}

export function sumF(n: number) {
  return (n * (n + 1)) / 2
}