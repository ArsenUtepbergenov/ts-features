export default function powR(n: number, e: number): number {
  if (e === 0) return 1;

  if (e < 0) return 1 / powR(n, -e);

  if (e % 2 === 0) {
    const half = powR(n, e / 2);
    return half * half;
  }

  return n * powR(n, e - 1);
}
