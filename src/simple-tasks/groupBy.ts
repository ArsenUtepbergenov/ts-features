function groupBy<T, U extends keyof T>(array: T[], fn: U | Function) {
  // 1:
  // const result = {}

  // for (const i of array) {
  //   const key = typeof fn === 'function' ? fn(i) : i[fn]

  //   if (!result[key]) result[key] = []
  //   result[key].push(i)
  // }

  // return result

  // 2:
  return array.reduce((result, current) => {
    const key = typeof fn === 'function' ? fn(current) : current[fn]
    if (!result[key]) result[key] = []
    result[key].push(current)

    return result
  }, {})
}

export default groupBy
