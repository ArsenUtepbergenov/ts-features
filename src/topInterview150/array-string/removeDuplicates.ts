export function removeDuplicates(nums: number[]): number {
  let f = 0,
    s = 0
  let t = 1

  while (f < nums.length) {
    while (nums[f] === nums[f + t]) {
      s++
      t++
    }

    nums.splice(f, s)

    f++
    s = 0
    t = 1
  }

  return nums.length
}
