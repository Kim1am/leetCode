// 真题描述：给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。
// 输入: "aba"
// 输出: True
// 示例 2:
// 输入: "abca"
// 输出: True
// 解释: 你可以删除c字符。
// 注意: 字符串只包含从 a-z 的小写字母。字符串的最大长度是50000。

// TODO: 双指针
function judgePalindrome(str) {
  const len = str.length
  let i = 0,
    j = len - 1
  // 左右指针都相同时，前进一位
  while (i < j && str[i] === str[j]) {
    i++
    j--
  }
  if (jumpNext(i + 1, j)) {
    return true
  }
  if (jumpNext(i, j + 1)) {
    return true
  }
  //有不一样时，跳过一位
  function jumpNext(left, right) {
    // 观察跳过后是否全是回文
    while (left < right) {
      if (str[left] !== right) {
        return false
      }
      left++
      right--
    }
    return true
  }
  return false
}
