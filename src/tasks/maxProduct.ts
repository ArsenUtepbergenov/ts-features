const maxProduct = function (nums: number[]) {
  const l = nums.length
  if (l < 1) return 0
  let max = Math.max(...nums)
  let temp = 1

  if (l === 1) return nums[0]
  if (l === 2) {
    const t = nums[0] * nums[1]
    if (t > nums[0] && t > nums[1]) return t
    else return Math.max(nums[0], nums[1])
  }

  for (let i = 0; i < l - 1; i++) {
    temp = nums[i]
    for (let j = i + 1; j < l; j++) {
      temp *= nums[j]
      if (max < temp) max = temp
    }
    temp = 1
  }

  return max
}
