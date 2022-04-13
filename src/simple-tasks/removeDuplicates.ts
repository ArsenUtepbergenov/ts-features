function removeDuplicates(str: string): string {
  // 1:
  // let result = ''
  // const temp = {}

  // for (const symbol of str) {
  //   if (!temp[symbol]) {
  //     temp[symbol] = true
  //     result += symbol
  //   }
  // }

  // return result

  // 2:
  return Array.from(new Set(str)).join('')
}

export default removeDuplicates
