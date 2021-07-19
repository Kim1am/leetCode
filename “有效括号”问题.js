// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 注意空字符串可被认为是有效字符串。

// 示例 1:
// 输入: "()"
// 输出: true

// 示例 2:
// 输入: "()[]{}"
// 输出: true

// 示例 3:
// 输入: "(]"
// 输出: false

// 示例 4:
// 输入: "([)]"
// 输出: false

// 示例 5:
// 输入: "{[]}"
// 输出: true

// 对称性---栈
// 用一个 map 来维护左括号和右括号的对应关系
const leftToRight = {
  '(': ')',
  '[': ']',
  '{': '}',
}
function isVaild(string) {
  if (!string) {
    return true
  }
  const stack = []
  const len = string.length
  for (let i = 0; i < len; i++) {
    const element = string[i]
    if (element === '(' || element === '[' || element === '{') {
      stack.push(leftToRight[element])
    } else {
      if (!stack.length || stack.pop() !== element) {
        return false
      }
    }
  }
  // 必须空栈才代表完全对称
  return !stack.length
}
