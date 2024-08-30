export function summaryRanges(nums: number[]): string[] {
  const result: string[] = []
  const ranges = []

  let i = 0
  let f = 0,
    s = 1

  while (i < nums.length) {
    while (nums[s] - nums[f] <= 1) {
      f++
      s++
    }

    ranges.push([nums[i], nums[f]])

    f = s
    i = s
    s = s + 1
  }

  ranges.forEach(r => result.push(r[0] === r[1] ? `${r[0]}` : `${r[0]}->${r[1]}`))

  return result
}
