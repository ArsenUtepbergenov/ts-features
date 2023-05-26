type Tree = {
  children?: Tree[]
  value?: number
}

export function getValues(tree: Tree) {
  const result = []
  const stack = [tree]

  while (stack.length > 0) {
    const node = stack.pop()

    if (node.value) {
      result.push(node.value)
    }

    if (node.children?.length) {
      stack.push(...node.children)
    }
  }

  return result
}

export const inorderTraversal = function* (arr: any): any {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      yield* inorderTraversal(arr[i])
    } else {
      yield arr[i]
    }
  }
}
