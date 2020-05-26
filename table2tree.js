/**
 * @name 还原扁平化对象
 * @description 和对象扁平化相反，将一个扁平化对象转为一个层层嵌套的对象
 * @example
{ 'a.b.c.d': 1, 'e[0]': 1, 'e[1]': 10 } => { a: { b: c: { d:1 } }, e: [1, 10] }
 */

const table1 = {
  a: 1,
  'b.c': 2,
  'b.d': '3',
  'b.e.f': false,
};

const table2 = {
  a: 1,
  'b.c': 2,
  'b.d': '3',
  'd[0]': 1,
  'd[1].f': 'f',
};

// 'a.b.c' = 1

// {
//   a: {
//     b: {
//       c: 1
//     }
//   }
// }

// b不是undefined，就赋值
// b是undefined，就先给一个{}

// '[1]'的效果，如果遍历先找到[，还再找一个]

// /\[\d+\]/.test()

// a.b[1]=>['a', 'b', '[1]']

// /([0-9a-zA-Z]|\[\d+\])/g

// if [1], 1

function isIndex(path) {
  return /\[(\d+)\]/.test(path);
}

// js，命名是包括$_
// lodash.get/lodash.set，get一次到底，set倒数第二个留一手: 如 a.b.c = 1 => 先来到a.b，最后赋值
function table2tree(table) {
  return Object.keys(table).reduce((acc, key) => {
    // 匹配a.b.c[1]，输出['a', 'b', 'c', '[1]']
    const paths = key.match(/([0-9a-zA-Z$_]|\[\d+\])/g);
    let current = acc;
    paths.forEach((path, i) => {
      //  RegExp.$1获得上次捕获组的第1个
      const next = isIndex(path) ? RegExp.$1 : path;
      if (i < paths.length - 1) {
        // 提前知道下一步是一个普通对象还是数组
        current[next] = current[next] || (current[next] = isIndex(paths[i + 1]) ? [] : {});
        current = current[next];
      }
    });
    const last = paths.pop();
    const lastKey = isIndex(last) ? RegExp.$1 : last;
    current[lastKey] = table[key];
    return acc;
  }, {});
}

// 一见面先reduce，把模版写出来
// 如果需要递归，通常是需要把一个参数/对象从头带到尾
// get一次到底，set倒数第二个留一手
// 递归太多爆栈
// 面试的时候，不会为难你，你知道有这回事即可
// 环引用，我们这些代码出问题，所以如果真的有，缓存一下如set, const cache = new Set(); if cache.has(xxx) return
// 一般这种数据结构，不会很多
// 如果真的有很深的层级需要这样做，console.time看看哪个快(先处理/读取的时候再遍历)
