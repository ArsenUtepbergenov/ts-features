/* eslint-disable @typescript-eslint/no-non-null-assertion */

export function bfs(
  adjacencyList: Record<number, number[]>,
  target: number,
  start = 0,
): boolean {
  const queue = [start]
  const visited = new Set()

  while (queue.length > 0) {
    const v = queue.shift()

    const vs = adjacencyList[v!]

    for (const v of vs) {
      if (v === target) return true

      if (!visited.has(v)) {
        visited.add(v)
        queue.push(v)
      }
    }
  }

  return false
}
