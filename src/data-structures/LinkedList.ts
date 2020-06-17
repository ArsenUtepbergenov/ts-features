type Pointer<Type> = LinkNode<Type> | null

class LinkNode<Type> {
  public next: Pointer<Type> = null
  public prev: Pointer<Type> = null
  public value: Type
  constructor(value: Type) {
    this.value = value
  }
}

class LinkedList<Type> {
  public head: Pointer<Type> = null
  public tail: Pointer<Type> = null
  private _size: number = 0
  // getters
  get size(): number { return this._size }
  get isEmpty(): boolean { return !this.size }
  get front(): Type {
    if (this.isEmpty) throw new Error('The list is empty')
    return this.head.value
  }
  get back(): Type {
    if (this.isEmpty) throw new Error('The list is empty')
    return this.tail.value
  }
  // insertion methods
  public push_front(value: Type): void {
    const node = new LinkNode(value)
    if (this.isEmpty) {
      this.head = this.tail = node
    } else {
      this.head.prev = node
      node.next = this.head
      this.head = node
    }
    this._size++
  }
  public push_back(value: Type): void {
    const node = new LinkNode(value)
    if (this.isEmpty) {
      this.head = this.tail = node
    } else {
      this.tail.next = node
      node.prev = this.tail
      this.tail = node
    }
    this._size++
  }
  public insert(index: number, value: Type): void {
    if (index === 0) { this.push_front(value); return }
    if (index === this.size - 1) { this.push_back(value); return }
    if (index < 0 || index >= this.size) throw new Error('The index is out of range')
    let current = this.head
    for (let j = 0; j = index - 1; j++) {
      current = current.next!
    }
    const node = new LinkNode(value)
    // link next node
    current.next.prev = node
    node.next = current.next
    // link prev node
    node.prev = current
    current.next = node
    this._size++
  }
  // deletion methods
  public pop_front(): Type {
    if (this.isEmpty) throw new Error('The list is empty')
    const value = this.head.value
    if (this.head.next) {
      this.head.next.prev = null
      this.head = this.head.next
      this._size--
    } else {
      this.head = this.tail = null
      this._size = 0
    }
    return value
  }
  public pop_back(): Type {
    if (this.isEmpty) throw new Error('The list is empty')
    const value = this.tail.value
    if (this.tail.prev) {
      this.tail.prev.next = null
      this.tail = this.tail.prev
      this._size--
    } else {
      this.head = this.tail = null
      this._size = 0
    }
    return value
  }
  public erase(index: number): Type {
    if (index === 0) { this.pop_front(); return }
    if (index === this.size - 1) { this.pop_back(); return }
    if (index < 0 || index >= this.size) throw new Error('The index is out of range')
    let j = 0
    let current = this.head
    while (j < index) {
      current = current.next!
      j++
    }
    current.next.prev = current.prev
    current.prev.next = current.next
    this._size--
    return current.value
  }
  // searching methods
  public indexOf(value: Type): number {
    if (this.isEmpty) return -1
    let index = 0
    let current = this.head
    while (current) {
      if (current.value === value) {
        return index
      }
      current = current.next!
      index++
    }
    return -1
  }
  public contains(value: Type): boolean {
    const index = this.indexOf(value)
    return index !== -1
  }
}


export default LinkedList