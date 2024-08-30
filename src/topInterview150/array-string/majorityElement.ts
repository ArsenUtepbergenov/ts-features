export function majorityElement(nums: number[]): number {
  let m = 0,
    c = 0

  for (let i = 0; i < nums.length; i++) {
    if (c === 0) {
      m = nums[i]
      c = 1
    } else if (m === nums[i]) {
      c++
    } else {
      c--
    }
  }

  return m
}
