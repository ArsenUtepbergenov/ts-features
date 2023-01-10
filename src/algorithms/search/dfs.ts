/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { AdjacencyList } from '../../models'

export function dfs(adjacencyList: AdjacencyList, start = 0) {
  const stack = [start]
  const visited = new Set()

  return function (target: number) {
    while (stack.length > 0) {
      const v = stack.pop()

      if (!visited.has(v)) {
        if (target === v) return true
        visited.add(v)

        for (const w of adjacencyList[v!]) {
          if (!visited.has(w)) stack.push(w)
        }
      }
    }

    return false
  }
}
