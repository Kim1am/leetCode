// 真题描述：给定一个排序链表，删除所有含有重复数字的结点，只保留原始链表中 没有重复出现的数字。

// 示例 1:
// 输入: 1->2->3->3->4->4->5
// 输出: 1->2->5
// 示例 2:
// 输入: 1->1->1->2->3
// 输出: 2->3
function removeDuplicates(head) {
  // 极端情况：0个或1个结点，则不会重复，直接返回
  if (!head || !head.next) {
    return head
  }
  let newList = new ListNode()
  newList.next = head
  cur = newList
  // 当后面有节点，并且有2个节点的时候
  while (cur.next && cur.next.next) {
    // 比较后续2个节点
    if (cur.next.value === cur.next.next.value) {
      // 记录重复值
      let dupValue = cur.next.value
      // 反复地排查后面的元素是否存在多次重复该值的情况
      while (cur.next && cur.next.value === dupValue) {
        // 若有，则删除
        cur.next = cur.next.next
      }
    } else {
      cur = cur.next
    }
  }
  return newList.next
}
