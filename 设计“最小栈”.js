// 设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。
// push(x) —— 将元素 x 推入栈中。
// pop() —— 删除栈顶的元素。
// top() —— 获取栈顶元素。
// getMin() —— 检索栈中的最小元素。
// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin(); --> 返回 -3.
// minStack.pop();
// minStack.top(); --> 返回 0.
// minStack.getMin(); --> 返回 -2.

class MinStack {
  constructor() {
    this.stack = []
    this.helpStack = [] //辅助栈，从大到小的栈
  }
  push(item) {
    this.stack.push(item)
    if (this.helpStack.length === 0 || item <= this.helpStack[this.helpStack.length - 1]) {
      this.helpStack.push(item)
    }
  }
  pop() {
    if (this.stack.pop() === this.helpStack[this.helpStack.length - 1]) {
      this.helpStack.pop()
    }
  }
  top() {
    return this.stack[this.stack.length - 1]
  }
  getMin() {
    return this.helpStack[this.helpStack.length - 1]
  }
}
