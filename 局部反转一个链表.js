// 反转从位置 m 到 n 的链表。请使用一趟扫描完成反转。
// 说明:

// 1 ≤ m ≤ n ≤ 链表长度。

// 示例:

// 输入: 1->2->3->4->5->NULL, m = 2, n = 4
// 输出: 1->4->3->2->5->NULL
function reverseBetween(head, m, n) {
  let newNode = new ListNode()
  newNode.next = head
  let before_m = newNode //第M位的上一个节点
  // 寻找第N位前的节点
  for (let i = 0; i < m - 1; i++) {
    before_m = before_m.next
  }
  // 第M位的节点
  let m_Node = before_m.next
  let pre = m_Node
  let cur = m_Node.next
  for (let i = m; i < n; i++) {
    let next = cur.next //保存原有的下一个节点
    cur.next = pre //当当前前节点指向上一节点 ，下一节点指向当前节点  = 翻转
    pre = cur //每次只更换cur的指向
    cur = next
  }
  before_m.next = pre
  m_Node.next = cur
  return newNode.next
}

/* 
TODO: 解析：  
1、确定被反转前一位的链接点，用于 反转完成后把第一位与它连接
2、三指针翻转区域后，链接首尾链表
 */
