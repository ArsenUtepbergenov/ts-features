class Node {
  constructor(data, left = null, right = null) {
    this.data = data
    this.left = left
    this.right = right
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  isEmpty() {
    return this.root == null ? true : false
  }

  add(data) {
    const node = this.root
    if (this.isEmpty()) {
      this.root = new Node(data)
      return
    } else {
      const _add = node => {
        if (data < node.data) {
          if (node.left == null) {
            node.left = new Node(data)
            return
          } else if (node.left != null) {
            return _add(node.left)
          }
        } else if (data > node.data) {
          if (node.right == null) {
            node.right = new Node(data)
            return
          } else if (node.right != null) {
            return _add(node.right)
          }
        } else {
          return null
        }
      }
      return _add(node)
    }
  }

  findMin() {
    let current = this.root
    while (current.left != null) current = current.left
    return current.data
  }

  findMax() {
    let current = this.root
    while (current.right != null) current = current.right
    return current.data
  }

  has(data) {
    let current = this.root
    while (current) {
      if (data == current.data) return true
      if (data < current.data) current = current.left
      else current = current.right
    }
    return false
  }

  remove(data) {
    const _remove = (node, data) => {
      if (node == null) return null
      if (node.data == data) {
        if (node.left == null && node.right == null) return null
        if (node.left == null) return node.right
        if (node.right == null) return node.left

        let tempNode = node.right

        while (tempNode.left != null) tempNode = tempNode.left

        node.data = tempNode.data
        node.right = _remove(node.right, tempNode.data)
        return node
      } else if (node.data > data) {
        node.left = _remove(node.left, data)
        return node
      } else {
        node.right = _remove(node.right, data)
        return node
      }
    }
    this.root = _remove(this.root, data)
  }
}
