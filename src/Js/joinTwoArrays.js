// const arr1 = [
//   { id: 1, x: 1 },
//   { id: 2, x: 9 },
// ]

// const arr2 = [{ id: 3, x: 5 }]

const arr3 = [
  { id: 1, x: 2, y: 3 },
  { id: 2, x: 3, y: 6 },
]
const arr4 = [
  { id: 2, x: 10, y: 20 },
  { id: 3, x: 0, y: 0 },
]

// const arr5 = [{ id: 1, b: { b: 94 }, v: [4, 3], y: 48 }]
// const arr6 = [{ id: 1, b: { c: 84 }, v: [1, 3] }]

const joinTwoArrs = function (arr1, arr2) {
  const ids1 = ids(arr1)
  const ids2 = ids(arr2)
  const uIds = guIds(ids1, ids2)
  const result = []

  for (let i = 0; i < uIds.length; i++) {
    result.push({
      id: uIds[i],
      ...getById(uIds[i], arr1, arr2),
    })
  }

  return result
}

function getById(id, arr1, arr2) {
  const fArr1 = arr1.find(i => i.id === id)
  const fArr2 = arr2.find(i => i.id === id)

  if (fArr1 && fArr2) {
    return {
      ...fArr1,
      ...fArr2,
    }
  } else if (fArr1 && !fArr2) {
    return {
      ...fArr1,
    }
  } else if (!fArr1 && fArr2) {
    return {
      ...fArr2,
    }
  }
}

function guIds(arr1, arr2) {
  return Array.from(new Set(arr1.concat(arr2)))
}

function ids(arr) {
  return arr.map(i => i.id)
}

// joinTwoArrs(arr1, arr2)
joinTwoArrs(arr3, arr4)
// joinTwoArrs(arr5, arr6)

/* 
const join = function(arr1, arr2) {
  const resultMap = new Map();

  const addToMap = (arr) => {
    for (const item of arr) {
      if (resultMap.has(item.id)) {
        resultMap.set(item.id, { ...resultMap.get(item.id), ...item });
      } else {
        resultMap.set(item.id, { ...item });
      }
    }
  };

  addToMap(arr1);
  addToMap(arr2);

  return Array.from(resultMap.values()).sort((a, b) => a.id - b.id);
};

*/
