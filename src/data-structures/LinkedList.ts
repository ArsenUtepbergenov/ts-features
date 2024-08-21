/**
 * The pointer for node of linked list
 */
type Pointer<Type> = LinkNode<Type> | null
/**
 * The auxiliary node for a linked list structure
 */
class LinkNode<Type> {
  public next: Pointer<Type> = null
  public prev: Pointer<Type> = null
  public value: Type
  constructor(value: Type) {
    this.value = value
  }
}
/**
 * The Linked list structure type
 */
class LinkedList<Type> {
  private _head: Pointer<Type> = null
  private _tail: Pointer<Type> = null
  private _size = 0
  // getters
  get size(): number {
    return this._size
  }
  get isEmpty(): boolean {
    return !this.size
  }
  get front(): Type {
    if (this.isEmpty) throw new Error('The list is empty')
    return this._head.value
  }
  get back(): Type {
    if (this.isEmpty) throw new Error('The list is empty')
    return this._tail.value
  }
  // insertion methods
  public push_front(value: Type): void {
    const node = new LinkNode(value)
    if (this.isEmpty) {
      this._head = this._tail = node
    } else {
      this._head.prev = node
      node.next = this._head
      this._head = node
    }
    this._size++
  }
  public push_back(value: Type): void {
    const node = new LinkNode(value)
    if (this.isEmpty) {
      this._head = this._tail = node
    } else {
      this._tail.next = node
      node.prev = this._tail
      this._tail = node
    }
    this._size++
  }
  public insert(index: number, value: Type): void {
    if (index === 0) {
      this.push_front(value)
      return
    }
    if (index === this.size - 1) {
      this.push_back(value)
      return
    }
    if (index < 0 || index >= this.size) throw new Error('The index is out of range')
    let current = this._head
    for (let j = 0; (j = index - 1); j++) {
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
    const value = this._head.value
    if (this._head.next) {
      this._head.next.prev = null
      this._head = this._head.next
      this._size--
    } else {
      this._head = this._tail = null
      this._size = 0
    }
    return value
  }
  public pop_back(): Type {
    if (this.isEmpty) throw new Error('The list is empty')
    const value = this._tail.value
    if (this._tail.prev) {
      this._tail.prev.next = null
      this._tail = this._tail.prev
      this._size--
    } else {
      this._head = this._tail = null
      this._size = 0
    }
    return value
  }
  public erase(index: number): Type {
    if (index === 0) {
      this.pop_front()
      return
    }
    if (index === this.size - 1) {
      this.pop_back()
      return
    }
    if (index < 0 || index >= this.size) throw new Error('The index is out of range')
    let j = 0
    let current = this._head
    while (j < index) {
      current = current.next
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
    let current = this._head
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
