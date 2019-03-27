
// 解法一 
// 原理：创建一个map,用于存储数组中每个数字出现的次数,遍历一遍数组，数字没出现一次，计数器加一
// 时间复杂度： O(n)
// 空间复杂度： O(n)
const singleNumber = (nums) => {
  let sum = {}
  for (let i = 0; i < nums.length; i++) {
    if (!sum[nums[i]]) {
      sum[nums[i]] = 0
    }
    sum[nums[i]]++
  }
  let del = Object.keys(sum)
  for (let i = 0; i < del.length; i++) {
    if (sum[del[i]] === 1) {
      return del[i]
    }
  }
}

// 解法二 
// 原理：两个值相同，异或结果为0 (1010 ^1010=0000)
// 时间复杂度：O(n)
// 空间复杂度：O(1)
const singleNumber2 = (nums) => {
  for (let i = 1; i < nums.length; i++) {
    nums[0] ^= nums[i]
  }
  return nums[0]
}