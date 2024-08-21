// constrains:
// 1 <= nums1.length, nums2.length <= 1000
// 0 <= nums1[i], nums2[i] <= 1000

export default function intersectTwoArrays(nums1: number[], nums2: number[]): number[] {
  const len1 = nums1.length,
    len2 = nums2.length

  if (len1 < 1 || len1 > 1000) return []
  if (len2 < 1 || len2 > 1000) return []
  if (nums1.some(el => el < 0 || el > 1000)) return []
  if (nums2.some(el => el < 0 || el > 1000)) return []

  const result: number[] = []

  function intersect(arr1: number[], arr2: number[]) {
    const map = new Map()

    for (const n of arr1) {
      if (map.has(n)) {
        map.set(n, map.get(n) + 1)
      } else {
        map.set(n, 1)
      }
    }

    for (const n of arr2) {
      if (map.has(n) && map.get(n) > 0) {
        result.push(n)
        map.set(n, map.get(n) - 1)
      }
    }
  }

  intersect(nums1, nums2)

  return result
}
