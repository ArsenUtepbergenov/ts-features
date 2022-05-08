import { getRandomInt } from './'

/**
 * Generates a random undirected integer graph as an adjacency list
 * @param numberNodes The nodes's number in the graph
 * @returns The adjacency list as { v: [a, b, c] }, where:
 *
 * v - the vertex, [a, b, c] - adjacency vertices
 */
export function getAdjacencyList(numberNodes = 0): Record<number, number[]> {
  const result = {}

  if (numberNodes <= 0) return result
  const min = 0
  const max = numberNodes - 1

  for (let n = 0; n < numberNodes; n++) result[n] = new Set<number>()

  for (let key = 0; key < numberNodes; key++) {
    const countNewToNodes = getRandomInt(min, max)

    if (!countNewToNodes) continue

    for (let i = 0; i < countNewToNodes; i++) {
      const newNode = getRandomInt(min, max)

      if (newNode === key) continue

      result[key].add(newNode)
    }

    for (const to of result[key]) {
      result[to].add(key)
    }
  }

  for (const key in result) {
    result[key] = Array.from(result[key]).sort()
  }

  return result
}
