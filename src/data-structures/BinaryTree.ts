type Pointer<Type> = TreeNode<Type> | null
type Handler<Type> = (data: Type) => void

class TreeNode<Type> {
  public left: Pointer<Type> = null
  public right: Pointer<Type> = null
  public data: Type

  constructor(data: Type) {
    this.data = data
  }
}

class BinaryTree<Type> {
  private _root: Pointer<Type> = null

  public constructor() {}

  public maxDepth(node: Pointer<Type> = this._root): number {
    if (node === null) return 0
    let leftDepth = this.maxDepth(node.left)
    let rightDepth = this.maxDepth(node.right)

    return leftDepth > rightDepth ? leftDepth + 1 : rightDepth + 1
  }

  public minDepth(node: Pointer<Type> = this._root): number {
    if (node === null) return 0

    const queue = [node]
    let level = 0

    while (queue.length > 0) {
      let length = queue.length

      for (let i = 0; i < length; i++) {
        const temp = queue.shift()
        if (!temp.left && !temp.right) return level + 1
        temp.left && queue.push(temp.left)
        temp.right && queue.push(temp.right)
      }

      level++
    }

    return level
  }

  public search(node: Pointer<Type> = this._root, data: Type): Pointer<Type> {
    if (node === null) {
      return null
    } else if (node.data > data) {
      return this.search(node.left, data)
    } else if (node.data < data) {
      return this.search(node.right, data)
    } else {
      return node
    }
  }

  public minNode(node: Pointer<Type> = this._root): Pointer<Type> {
    if (node === null) return null
    return node.left === null ? node : this.minNode(node.left)
  }

  public maxNode(node: Pointer<Type> = this._root): Pointer<Type> {
    if (node === null) return null
    return node.right === null ? node : this.maxNode(node.right)
  }

  public inOrderTraverse(
    node: Pointer<Type> = this._root,
    handler?: Handler<Type>
  ): void {
    if (node !== null) {
      this.inOrderTraverse(node.left, handler)
      handler && handler(node.data)
      this.inOrderTraverse(node.right, handler)
    }
  }

  public preOrderTraverse(
    node: Pointer<Type> = this._root,
    handler?: Handler<Type>
  ): void {
    if (node !== null) {
      handler && handler(node.data)
      this.preOrderTraverse(node.left, handler)
      this.preOrderTraverse(node.right, handler)
    }
  }

  public postOrderTraverse(
    node: Pointer<Type> = this._root,
    handler?: Handler<Type>
  ): void {
    if (node !== null) {
      this.postOrderTraverse(node.left, handler)
      this.postOrderTraverse(node.right, handler)
      handler && handler(node.data)
    }
  }

  public insert(data: Type): void {
    const node = new TreeNode(data)

    this._root === null
      ? (this._root = node)
      : this._insertNode(this._root, node)
  }

  public remove(data: Type): void {
    this._root = this._removeNode(this._root, data)
  }

  private _removeNode(node: Pointer<Type>, data: Type): Pointer<Type> {
    if (node === null) {
      return null
    } else if (data < node.data) {
      node.left = this._removeNode(node.left, data)
      return node
    } else if (data > node.data) {
      node.right = this._removeNode(node.right, data)
      return node
    } else {
      // deleting a leaf
      if (this._isLeaf(node)) {
        node = null
        return node
      }
      // deleting with one child
      if (node.left === null) {
        node = node.right
        return node
      } else if (node.right === null) {
        node = node.left
        return node
      }
      // deleting with two children
      const newNode = this.minNode(node.right)
      node.data = newNode.data
      node.right = this._removeNode(node.right, newNode.data)
      return node
    }
  }

  private _isLeaf(node: TreeNode<Type>): boolean {
    return node.left === null && node.right === null
  }

  private _insertNode(node: TreeNode<Type>, newNode: TreeNode<Type>): void {
    if (node.data > newNode.data) {
      node.left === null
        ? (node.left = newNode)
        : this._insertNode(node.left, newNode)
    } else {
      node.right === null
        ? (node.right = newNode)
        : this._insertNode(node.right, newNode)
    }
  }
}

export default BinaryTree
