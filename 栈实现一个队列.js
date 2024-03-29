// 使用栈实现队列的下列操作：

// push(x) -- 将一个元素放入队列的尾部。
// pop() -- 从队列首部移除元素。
// peek() -- 返回队列首部的元素。
// empty() -- 返回队列是否为空。

// 示例:
// MyQueue queue = new MyQueue();
// queue.push(1);
// queue.push(2);
// queue.peek(); // 返回 1
// queue.pop(); // 返回 1
// queue.empty(); // 返回 false

// push(x) -- 将一个元素放入队列的尾部。
// pop() -- 从队列首部移除元素。
// peek() -- 返回队列首部的元素。
// empty() -- 返回队列是否为空。
// 说明:
// 你只能使用标准的栈操作 -- 也就是只有 push to top, peek/pop from top, size, 和 is empty 操作是合法的。
// 你所使用的语言也许不支持栈。你可以使用 list 或者 deque（双端队列）来模拟一个栈，只要是标准的栈操作即可。
// 假设所有操作都是有效的 （例如，一个空的队列不会调用 pop 或者 peek 操作）。

class MyQueue {
  constructor() {
    this.stack1 = []
    this.stack2 = []
  }
  push(item) {
    this.stack1.push(item)
  }
  pop() {
    /* 把stack1翻转到stack2 */
    if (this.stack2.length <= 0) {
      while (this.stack1.length !== 0) {
        // 将 stack1 出栈的元素推入 stack2
        this.stack2.push(this.stack1.pop())
      }
    }
    return this.stack2.pop()
  }
  peek() {
    /* 把stack1翻转到stack2 */
    if (this.stack2.length <= 0) {
      while (this.stack1.length !== 0) {
        // 将 stack1 出栈的元素推入 stack2
        this.stack2.push(this.stack1.pop())
      }
    }
    const len = this.stack2.length
    return this.stack2[len - 1]
  }
  empty() {
    return !this.stack1.length && !this.stack2.length
  }
}
