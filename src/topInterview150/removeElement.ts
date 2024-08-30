export function removeElement(nums: number[], val: number): number {
  let i = 0
  let n = nums.length

  while (i < n) {
    if (nums[i] == val) {
      nums[i] = nums[n - 1]
      n--
    } else {
      i++
    }
  }

  return n
}
