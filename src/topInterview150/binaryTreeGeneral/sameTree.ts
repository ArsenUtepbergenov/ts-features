class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

export function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  const rP = bfs(p)
  const rQ = bfs(q)

  if (rP.length !== rQ.length) return false

  for (let i = 0; i < rP.length; i++) {
    if (rP[i] !== rQ[i]) return false
  }

  return true
}

function bfs(r: TreeNode | null): (number | null)[] {
  if (r === null) return [null]

  const result: (number | null)[] = []
  const queue: (TreeNode | null)[] = [r]

  while (queue.length > 0) {
    const c = queue.shift()!

    if (c === null) {
      result.push(null)
      continue
    }

    result.push(c.val)

    if (c.left) queue.push(c.left)
    else queue.push(null)

    if (c.right) queue.push(c.right)
    else queue.push(null)
  }

  return result
}
