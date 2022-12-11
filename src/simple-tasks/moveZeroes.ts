export default function moveZeroes(nums: number[]): void {
  const arr: number[] = []
  let z = 0
  const len = nums.length

  for (let i = 0; i < len; i++) {
    if (nums[i]) {
      arr.push(nums[i])
    } else {
      z++
    }
  }
  nums.length = 0
  nums.push(...arr)
  nums.push(...new Array(z).fill(0))
}
