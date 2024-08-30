export function searchInsert(nums: number[], target: number): number {
  let f = 0,
    l = nums.length,
    mid = 0

  while (f < l) {
    mid = Math.floor(f + (l - f) / 2)

    if (nums[mid] === target) return mid
    if (nums[mid] > target) l = mid
    if (nums[mid] < target) f = mid + 1
  }

  return f
}
