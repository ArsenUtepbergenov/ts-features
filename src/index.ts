// import { BinaryTree } from "./data-structures"

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

export const areArraysEqual = <Type>(
  arrayOne: Type[],
  arrayTwo: Type[]
): boolean => {
  return (
    Array.isArray(arrayOne) &&
    Array.isArray(arrayTwo) &&
    arrayOne.length === arrayTwo.length &&
    arrayOne.every((val, index) => val === arrayTwo[index])
  )
}

function main() {
  const p = new TreeNode(1)
  p.left = new TreeNode(2)

  console.log(p)

  const q = new TreeNode(1)
  q.right = new TreeNode(2)

  console.log(q)

  function inOrderTraverse(node: TreeNode | null, result: number[]): void {
    if (node !== null) {
      inOrderTraverse(node.left, result)
      result.push(node.val)
      console.log(node)
      inOrderTraverse(node.right, result)
    }
  }

  function isSameTree(p: TreeNode | null = null, q: TreeNode | null) {
    // const result1: number[] = []
    const result2: number[] = []
    // inOrderTraverse(p, result1)
    inOrderTraverse(q, result2)
    // console.log(result1)
    console.log(result2)
    // return areArraysEqual(result1, result2)
  }

  console.log(isSameTree(p, q))
}

main()
