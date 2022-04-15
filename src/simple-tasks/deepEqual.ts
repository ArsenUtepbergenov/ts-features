function deepEqual(source?, test?): boolean {
  if (Number.isNaN(source) && Number.isNaN(test)) return true
  if (typeof source !== typeof test) return false
  if (typeof source !== 'object' || source === null || test === null) return source === test
  if (Object.keys(source).length !== Object.keys(test).length) return false

  for (const key of Object.keys(source)) {
    if (!deepEqual(source[key], test[key])) return false
  }

  return true
}

export default deepEqual
