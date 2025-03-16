export default function numberDigits(n: number): number {
  if (n === 0) return 0;

  return 1 + numberDigits(Math.floor(n / 10));
}
