const memo: { [key: number]: number } = {};

export default function fibonacci(n: number): number {
  if (n === 0) return 0;
  if (n === 1) return 1;

  if (memo[n] !== undefined) return memo[n];

  memo[n] = fibonacci(n - 1) + fibonacci(n - 2);
  return memo[n];
}