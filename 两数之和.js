// 真题描述： 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
// 给定 nums = [2, 7, 11, 15], target = 9
// 因为 nums[0] + nums[1] = 2 + 7 = 9 所以返回 [0, 1]
function findSum(nums, targetNum) {
  const map = {} //
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i]
    if (map[targetNum - element] != undefined) {
      return [i, map[targetNum - element]]
    }
    map[element] = i
  }
}
console.log(findSum([2, 7, 11, 15], 9))
// TODO: 两数之和 思路是求差
