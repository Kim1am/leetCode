// 真题描述：给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。
// 注意：答案中不可以包含重复的三元组。
// 给定数组 nums = [-1, 0, 1, 2, -1, -4]， 满足要求的三元组集合为： [ [-1, 0, 1], [-1, -1, 2] ]

function findThreeSum(nums) {
  // 用于存放结果数组
  let res = []
  // 给 nums 排序
  nums = nums.sort((a, b) => {
    return a - b
  })
  const len = nums.length
  for (let i = 0; i < len - 2; i++) {
    const element = nums[i]
    let j = i + 1
    let k = len - 1
    // 重复数据跳过，因为经过排序，只要当前位和下一位比较即可
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue
    }
    while (j < k) {
      // 小于0 则左指针右移
      if (element + nums[j] + nums[k] < 0) {
        j++
        // 如果重复就再往前移动
        if (j < k && nums[j] === nums[j - 1]) {
          j++
        }
      } else if (element + nums[j] + nums[k] > 0) {
        k--
        // 如果重复就再往后移动
        if (j < k && nums[k] === nums[k + 1]) {
          k--
        }
      } else {
        res.push([element, nums[j], nums[k]])
        j++
        k--
        // 若左指针元素重复，跳过
        while (j < k && nums[j] === nums[j - 1]) {
          j++
        }

        // 若右指针元素重复，跳过
        while (j < k && nums[k] === nums[k + 1]) {
          k--
        }
      }
    }
  }
  return res
}
findThreeSum([-1, 0, 1, 2, -1, -4])
