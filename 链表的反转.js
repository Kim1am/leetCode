// 真题描述：定义一个函数，输入一个链表的头结点，反转该链表并输出反转后链表的头结点。
// 示例:

// 输入: 1->2->3->4->5->NULL
// 输出: 5->4->3->2->1->NULL

// TODO:三个指针，它们分别指向目标结点（cur）、目标结点的前驱结点（pre）、目标结点的后继结点（next）
function reverseList(head) {
  let pre = null //前
  let cur = head //当前
  while (cur != null) {
    let next = cur.next
    cur.next = pre
    pre = cur
    cur = next
  }
  return head
}
