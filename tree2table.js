/**
 * @name 对象扁平化
 * @description 将一个嵌套的对象转成一个扁平化的对象，旧对象所有的深层递归的值都会转为.或者[]的路径作为新对象的 key
 * @example
{ a: { b: c: { d:1 } }, e: [1, 10] } => { 'a.b.c.d': 1, 'e[0]': 1, 'e[1]': 10 }
 */

const data1 = {
  a: 1,
  b: [1],
  c: false,
}

const data2 = {
  a: {
    a: 1,
    b: 'b',
    c: false,
  },
  b: 'b',
  c: false,
}

const data3 = {
  a: {
    b: {
      c: 1,
      d: 'ddd',
    },
  },
  e: 2,
  f: [false, 1],
}

const data4 = {
  a: {
    b: {
      c: 1,
      d: 'ddd',
    },
  },
  e: 2,
  f: [
    {
      fa: 1,
      fb: 2,
      fd: {
        fd1: 'd1',
      },
    },
    false,
    1,
  ],
}

const data5 = {
  a: {
    b: {
      c: 1,
      d: 'ddd',
    },
  },
  e: 2,
  f: {
    0: {
      fa: 1,
      fb: 2,
      fd: {
        fd1: 'd1',
      },
    },
    1: false,
    2: 1,
  },
}

const test1 = {
  a: 1,
  b: 1,
  c: false,
}
function test(tree, lastkey = '') {
  const isArr = Array.isArray(tree)
  const keys = Object.keys(tree)
  return keys.reduce((acc, key) => {
    return (acc[key] = tree[key])
  }, {})
}

function tree2table(tree, path = '') {
  const isArr = Array.isArray(tree)
  return Object.keys(tree).reduce((acc, key) => {
    const nextKey = path ? (isArr ? `${path}[${key}]` : `${path}.${key}`) : key
    if (tree[key] && typeof tree[key] === 'object') {
      acc = {
        ...acc,
        ...Object.entries(tree2table(tree[key], nextKey)).reduce((o, [k, v]) => {
          o[k] = v
          return o
        }, {}),
      }
    } else {
      acc[nextKey] = tree[key]
    }
    return acc
  }, {})
}
tree2table(data4)
