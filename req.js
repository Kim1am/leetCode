/**
 * @name 实现一个请求缓存的函数cachedRequest
 * @description 希望输入同样的请求 url 返回同样的结果，不发请求，达到优化的目的。只需考虑 get 请求。
 * @example
比如 request('/a')，第二次以后再遇到'/a'则不发请求，取之前的结果
 */

function request(url) {
  const t = Math.random() * 3000;
  return new Promise(r => {
    setTimeout(() => {
      r(`${url}-response: ${t}ms`);
    }, t);
  });
}

Promise.all([cachedRequest('a'), cachedRequest('aa'), cachedRequest('b'), cachedRequest('c'), cachedRequest('a')]).then(
  console.log
);

const map = {};
// 当第一个出去，还没后来，第二个需要等一下第一个
const pendingList = {};
async function cachedRequest(url) {
  if (map[url]) {
    return map[url];
  }
  // 还没回来的，直接复用第一个重复的请求
  if (pendingList[url]) {
    return pendingList[url].then(res => {
      delete pendingList[url];
      return res;
    });
  }
  const ret = request(url).then(res => (map[url] = res));
  pendingList[url] = ret;
  return ret;
}

// 没什么要求的，接口不怎么变的，map不用管他
// 用户整天不关页面，map按时清除
// 缓存策略

// 怎么知道过期：1.定时去轮询 2. 用到的时候顺便看看
const map0 = {
  '/a': {
    res: 'a的结果',
    expire: Date.now() + 20000,
  },
  '/b': 'b的结果',
  '/a?data=1': 'jieguo',
  '/a@肯定不重复@"{ "a": 1, "b": 2 }"': 'post的结果',
};

// post? body { a: 1, b: 2 }
