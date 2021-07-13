// 真题描述：给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。
// 说明: 初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。 你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。
// 输入:
// nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6], n = 3
// 输出: [1,2,2,3,5,6]
//  TODO: 原地修改nums1
function mergeNums(nums1, m, nums2, n) {
  let i = m - 1,
    k = n - 1,
    maxlen = m + n - 1 //M,N都是数量，对应下标应该-1
  while (i >= 0 && k >= 0) {
    if (nums1[i] >= nums2[k]) {
      nums1[maxlen] = nums1[i]
      i--
      maxlen--
    } else {
      nums1[maxlen] = nums2[k]
      k--
      maxlen--
    }
  }
  while (k >= 0) {
    nums1[maxlen] = nums2[k]
    k--
    maxlen--
  }
  return nums1
}
console.log(mergeNums([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3))
