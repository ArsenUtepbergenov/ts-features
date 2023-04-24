class TreeStore {
  constructor(items) {
    this.items = {}
    this.cache = {}

    for (const item of items) {
      this.items[item.id] = item
    }
  }

  getAll() {
    return Object.values(this.items)
  }

  getItem(id) {
    return this.items[id]
  }

  getChildren(id) {
    if (this.cache[id]?.children) {
      return this.cache[id].children
    }

    const children = []
    const items = this.getAll()

    for (const item of items) {
      if (item.parent === id) children.push(item)
    }

    this.cache[id] = { children }

    return children
  }

  getAllChildren(id) {
    if (this.cache[id]?.allChildren) {
      return this.cache[id].allChildren
    }

    const allChildren = []

    const traverse = id => {
      const children = this.getChildren(id)

      for (const child of children) {
        allChildren.push(child)
        traverse(child.id)
      }
    }

    traverse(id)

    this.cache[id] = { allChildren }

    return allChildren
  }

  getAllParents(id) {
    if (this.cache[id]?.parents) {
      return this.cache[id].parents
    }

    const parents = []

    let parent = this.getItem(id)
    parent = this.getItem(parent.parent)

    while (parent) {
      parents.push(parent)
      parent = this.getItem(parent.parent)
    }

    this.cache[id] = { parents }

    return parents
  }
}
