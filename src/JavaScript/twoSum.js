
// 解法一  暴力解法
// 原理：暴力法很简单，遍历每个元素 x，并查找是否存在一个值与 target - x相等的目标元素
// 时间复杂度： O(n2)
// 空间复杂度： O(1)

const twoSum = (target, nums) => {
  let result = []
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
        if (nums[j] == target - nums[i]) {
          result.push({
            i, j
          })
        }
    }
  }
  return result
}

// 解法二 
// 原理：两个值相同，异或结果为0 (1010 ^1010=0000)
// 时间复杂度：O(n)
// 空间复杂度：O(1)
const twoSum = (nums) => {
  
}