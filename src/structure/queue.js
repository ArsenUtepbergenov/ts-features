class Queue {
  constructor() {
    this.collection = []
  }

  size() {
    return this.collection.length
  }

  isEmpty() {
    return this.size() <= 0 ? true : false
  }

  push(element) {
    this.collection.push(element)
  }

  pop() {
    try {
      if (this.isEmpty())
        throw new Error('Method pop() from class Queue. Queue is empty!')
      else this.collection.splice(0, 1)
    } catch (error) {
      console.error('Error:', error.message)
    }
  }

  front() {
    try {
      if (this.isEmpty())
        throw new Error('Method front() from class Queue. Queue is empty!')
      else return this.collection[0]
    } catch (error) {
      console.error('Error:', error.message)
    }
  }

  back() {
    try {
      if (this.isEmpty())
        throw new Error('Method back() from class Queue. Queue is empty!')
      else return this.collection[this.collection.length - 1]
    } catch (error) {
      console.error('Error:', error.message)
    }
  }
}

// test queue
let queue = new Queue()
console.log('size = ', queue.size())
console.log('isEmpty = ', queue.isEmpty())
queue.push(2)
queue.push(56)
queue.push(45)
queue.push(32)

console.log('size = ', queue.size())
console.log('isEmpty = ', queue.isEmpty())

console.log('first = ', queue.front())
console.log('last = ', queue.back())

queue.pop()

console.log('first = ', queue.front())
console.log('last = ', queue.back())

console.log(queue)
