type Fn = (a: number, curr: number) => number

export function aReduceT(nums: number[], fn: Fn, init: number): number {
  if (!nums.length) return init

  let result = init

  for (const element of nums) {
    result = fn(result, element)
  }

  return result
}

/*
Constraints:

  1) 0 <= nums.length <= 1000
  2) 0 <= nums[i] <= 1000
  3) 0 <= init <= 1000

*/
