function highestFrequency(array: string[]): string {
  let result = ''
  let maxFrequency = 0
  const temp = {}

  for (const str of array) {
    if (temp[str])
      temp[str]++
    else
      temp[str] = 1
      
    if (temp[str] > maxFrequency) {
      maxFrequency = temp[str]
      result = str
    }
  }

  return result
}

export default highestFrequency