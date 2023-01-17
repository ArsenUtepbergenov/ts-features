function flatten(array) {
  const result = []

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      const flat = flatten(array[i])
      for (let j = 0; j < flat.length; j++) {
        result.push(flat[j])
      }
    } else {
      result.push(array[i])
    }
  }

  return result
}

export default flatten
