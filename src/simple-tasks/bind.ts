function bind(context, fn) {
  return (...args) => {
    return fn.apply(context, args)
  }
}

export default bind
