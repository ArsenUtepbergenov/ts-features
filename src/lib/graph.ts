import { getRandomInt } from './random'

/**
 * Generates a random undirected integer graph as an adjacency list
 * @param numberNodes The nodes's number in the graph
 * @returns The adjacency list as { v: [a, b, c] }, where:
 *
 * v - the vertex, [a, b, c] - adjacency vertices
 */
export function getAdjacencyList(numberNodes = 0): Record<number, number[]> {
  const result: Record<number, Set<number>> = {}

  if (numberNodes <= 0) return {}
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

  return parseToArray(result)
}

function parseToArray(data: Record<number, Set<number>>): Record<number, number[]> {
  const result: Record<number, number[]> = {}

  for (const key in data) {
    result[key] = Array.from(data[key]).sort()
  }

  return result
}
