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

type Tree = {
  children?: Tree[]
  value?: number
}
