function jsonStringify(object: unknown) {
  if (typeof object === 'boolean') return `${object}`
  if (typeof object === 'number' || typeof object === 'string') return String(object)
  if (object === null) return 'null'

  if (Array.isArray(object)) {
    const items = object.map(item => jsonStringify(item)).join(',')
    return '[' + items + ']'
  }
  if (typeof object === 'object') {
    const keys = Object.keys(object)
    const items = keys.map(key => '"' + key + '":' + jsonStringify(object[key]))
    return '{' + items.join(',') + '}'
  }
}
