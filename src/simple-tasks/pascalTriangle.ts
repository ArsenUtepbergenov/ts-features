export default function pascalTriangle(numRows: number) {
  if (numRows < 1 || numRows > 30) return

  const output: number[][] = [[1]]

  if (numRows === 1) return output

  output.push([1, 1])

  if (numRows === 2) {
    return output
  }

  for (let i = 1; i < numRows - 1; i++) {
    const currRow = output[i]
    const temp = [1]

    let j = 0

    while (j < currRow.length - 1) {
      const tempNum = currRow[j] + currRow[j + 1]
      temp.push(tempNum)
      j++
    }

    temp.push(1)
    output.push(temp)
  }

  return output
}
