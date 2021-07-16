// 真题描述：给定一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
// 示例：

// 给定一个链表: 1->2->3->4->5, 和 n = 2.
// 当删除了倒数第二个结点后，链表变为 1->2->3->5.

// 说明：
// 给定的 n 保证是有效的。

// TODO：快慢指针
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
function removeNthFromEnd(head, n) {
  let newNode = new ListNode()
  newNode.next = head
  let fast = newNode
  let slow = newNode
  // 快指针先走N步
  while (n != 0) {
    fast = fast.next
    n--
  }
  // 快指针去到最后一个节点
  while (fast.next != null) {
    slow = slow.next
    fast = fast.next
  }
  // 慢指针删除自己的后继结点
  slow.next = slow.next.next
  return newNode.next
}
