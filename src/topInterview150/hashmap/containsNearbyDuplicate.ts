export function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const map: Record<number, [number, number]> = {}

  for (let i = 0; i < nums.length; i++) {
    if (!map[nums[i]]) map[nums[i]] = [i, Infinity]
    else {
      const minW = Math.min(map[nums[i]][1], i - map[nums[i]][0])

      if (minW <= k) return true

      map[nums[i]][0] = i
      map[nums[i]][1] = minW
    }
  }

  return false
}
