/**
 * @name 输出目录加载结果
 * @description 每一个依赖被加载后都会被立刻执行，那么如果要争取加载一个依赖，则其子依赖都应该优先被加载
   每一个依赖不希望多出现冗余的情况，若依赖出现多版本的情况，则默认使用更新的版本。
 * @example
- a@0.1.0
    - d@0.2.0
    - c@0.1.0
- b@0.1.1
    - e@0.1.2
    - c@0.1.2
- c@0.2.0

则其中一种输出的依赖优先级排序为：
['d@0.2.0', 'c@0.2.0', 'a@0.1.0', 'e@0.1.2', 'b@0.1.1’]
 */

// plugin/loader，比如想知道一个包的依赖，而且他们最新的版本是什么。比如你知道一个包某个版本有问题，那么它有没有包括那个有问题的在里面
// 依赖图表

const data = [
  {
    name: 'a@0.1.0',
    deps: [
      {
        name: 'd@0.2.0',
      },
      {
        name: 'c@0.1.0',
      },
    ],
  },
  {
    name: 'b@0.1.1',
    deps: [
      {
        name: 'e@0.1.2',
      },
      {
        name: 'c@0.1.2',
      },
    ],
  },
  {
    name: 'c@0.2.0',
  },
];

const map0 = {
  a: '0.1',
  b: '0.2', // 如果没有更新就这个
  c: '0.1.0', // '0.1.2' => '0.2.0'
};

// require.context简化import，比如import一个文件夹里面所有的图片，你不想写一句句import可以这样

// '0.1.2'
function getBigger(v1, v2) {
  const v2Arr = v2.split('.');
  return v1.split('.').reduce((acc, cur, i) => {
    if (acc) {
      // 已经找到了，不用找了
      return acc;
    }
    if (cur === v2Arr[i]) {
      return false;
    }
    if (cur > v2Arr[i]) {
      return v1;
    }
    return v2;
  }, false);
}
// a@0.1.0
// { a: 'a@0.1.0' }
function getLoadOrder(deps = [], map = {}) {
  deps.forEach(({ name, deps: subDeps }) => {
    if (subDeps) {
      getLoadOrder(subDeps, map);
    }
    const [depName, version] = name.split('@');
    if (map[depName]) {
      // 如果一个模块已经在map，那就对比一下谁新
      map[depName] = `${depName}@${getBigger(version, map[depName].split('@')[1])}`;
    } else {
      // 如果一个模块不在map，那就直接赋值
      map[depName] = name;
    }
    // map[depName] = map[depName] ?  `${depName}@${getBigger(version, map[depName].split('@')[1])}` : name
  });
  return Object.values(map);
}

// 点：引用类型的灵活使用，map从头带到尾，一直复用
