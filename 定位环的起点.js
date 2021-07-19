// 真题描述：给定一个链表，返回链表开始入环的第一个结点。 如果链表无环，则返回 null。

// 示例 1：
// 输入：head = [3,2,0,-4]（如下图） 输出：tail connects to node index 1 解释：链表中有一个环，其尾部连接到第二个结点。

// 示例 2：
// 输入：head = [1,2]（如下图）
// 输出：tail connects to node index 0

// 示例 3：
// 输入：head = [1]（如下图）
// 输出：no cycle
// 解释：链表中没有环。

function returnFirstNode(list) {
  while (list) {
    if (list.flag) {
      return list
    } else {
      list.flag = true
      list = list.next
    }
  }
  return null
}

// 快慢指针-----终会相撞
function isCycle(list) {
  let fast = list
  let slow = list
  if (fast && fast.next) {
    fast = fast.next.next
    slow = slow.next
    if (fast == slow) {
      return slow
    }
  }
  return null
}

function findCycleNode(list) {
  let slow = isCycle(list)
  if (!slow) return null
  let fast = list
  while (fast != slow) {
    fast = fast.next
    slow = slow.next
  }
  return fast
}
