// 真题描述：给定一个链表，判断链表中是否有环。
// 示例 1：

// 输入：[3,2,0,4]（链表结构如下图） 输出：true
// 解释：链表中存在一个环

function hasCycle(list) {
  while (list) {
    if (list.flag) {
      return true
    } else {
      list.flag = true
      list = list.next
    }
  }
  return false
}

// 快慢指针
function isCycle(list) {
  let fast = list
  let slow = list
  if (fast && fast.next) {
    fast = fast.next.next
    slow = slow.next
    if (fast == slow) {
      return true
    }
  }
  return false
}
