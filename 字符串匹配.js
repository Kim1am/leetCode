// 真题描述： 设计一个支持以下两种操作的数据结构：
// void addWord(word)
// bool search(word)
// search(word) 可以搜索文字或正则表达式字符串，字符串只包含字母 . 或 a-z 。
// . 可以表示任何一个字母。
// 示例:

// addWord("bad")
// addWord("dad")
// addWord("mad")
// search("pad") -> false
// search("bad") -> true
// search(".ad") -> true
// search("b..") -> true
// 说明:
// 你可以假设所有单词都是由小写字母 a-z 组成的。

class StringJudege {
  constructor() {
    this.words = {}
  }

  //添加
  addWord(str) {
    // 若该字符串对应长度的数组已经存在，则只做添加
    if (this.words[str.length]) {
      this.words[str.length].push(str)
    } else {
      // 若该字符串对应长度的数组还不存在，则先创建
      this.words[str.length] = [str]
    }
  }

  //检查
  search(str) {
    const len = str.length
    // 若该字符串长度在 Map 中对应的数组根本不存在，则可判断该字符串不存在
    if (!this.words[len]) {
      return false
    }

    // 没有.则不是正则判断，是完全匹配判断
    if (str.indexOf('.') === -1) {
      return this.words[len].some(item => item === str)
    }

    // 其余情况则为正则
    const reg = new RegExp(str)
    // 只要数组中有一个匹配正则表达式的字符串，就返回true
    return this.words[len].some(item => {
      return reg.test(item)
    })
  }
}
