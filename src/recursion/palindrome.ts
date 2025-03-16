export default function palindrome(str: string, i: number = 0): boolean {
  const j = str.length - 1 - i;

  if (i >= j) return true;

  if (str[i] !== str[j]) return false;

  return palindrome(str, i + 1);
}
