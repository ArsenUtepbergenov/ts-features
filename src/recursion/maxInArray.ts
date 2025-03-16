export default function maxInArray(arr: Array<number>, i: number = arr.length - 1, max: number = -Infinity): number {
  if (i < 0) return max;

  return maxInArray(arr, i - 1, Math.max(max, arr[i]));
}
