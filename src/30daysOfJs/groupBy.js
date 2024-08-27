/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-unused-vars */

/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function (fn) {
  return this.reduce((a, c, ci, arr) => {
    const key = fn(c)

    if (!(key in a)) {
      a[key] = []
    }

    a[key].push(c)

    return a
  }, {})
}

const array = [{ id: '1' }, { id: '1' }, { id: '2' }]
// const array = [1, 2, 3].groupBy(String)

const fn = function (item) {
  return item.id
}

const result = array.groupBy(fn)

console.log(result)

/*
Constraints:

  1) 0 <= array.length <= 10^5
  2) fn returns a string

*/
