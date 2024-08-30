export function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  if (m <= 0 && n <= 0) return
  if (m <= 0 && n > 0) {
    nums2.forEach((v, i) => (nums1[i] = v))
    return
  }

  const size = m + n
  const result = []

  let isI = false,
    isJ = false,
    i = 0,
    j = 0

  for (i = 0, j = 0; i + j < size; ) {
    if (i >= m) {
      isI = true
      break
    }

    if (j >= n) {
      isJ = true
      break
    }

    if (nums1[i] === nums2[j]) {
      result.push(nums1[i], nums2[j])
      i++
      j++
    } else if (nums1[i] > nums2[j]) {
      result.push(nums2[j])
      j++
    } else if (nums1[i] < nums2[j]) {
      result.push(nums1[i])
      i++
    }
  }

  if (isI) result.push(...nums2.slice(j, n))
  if (isJ) result.push(...nums1.slice(i, m))

  result.forEach((v, i) => (nums1[i] = v))
}
