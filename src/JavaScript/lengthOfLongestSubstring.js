
/*
解法一 暴力法
原理：逐个检查所有的子字符串，看它是否不含有重复的字符。
时间复杂度： O(n3)
空间复杂度： O(min(n,m))
思路: 
1. 为了枚举给定字符串的所有子字符串，我们需要枚举它们开始和结束的索引。假设开始和结束的索引分别为 ii 和 jj。那么我们有 0 \leq i \lt j \leq n0≤i<j≤n（这里的结束索引 jj 是按惯例排除的）。因此，使用 ii 从 0 到 n - 1n−1 以及 jj 从 i+1i+1 到 nn 这两个嵌套的循环，我们可以枚举出 s 的所有子字符串
2.要检查一个字符串是否有重复字符，我们可以使用集合。我们遍历字符串中的所有字符，并将它们逐个放入 set 中。在放置一个字符之前，我们检查该集合是否已经包含它。如果包含，我们会返回 false。循环结束后，我们返回 true
*/

const allUniquer = (s, start, end) => {
  let hashMap = {}
  for (let i = start; i < end; i++) {
    // charAt() 方法从一个字符串中返回指定的字符
    // 语法：str.charAt(index)
    const str = s.charAt(i)

    if (hashMap[str]) {
      return false
    }
    hashMap[str] = str
  }
  return true
}

const lengthOfLongestSubstring = (s) => {
  const len = s.length
  let ans = 0
  
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j <= len; j++) {
      if (allUniquer(s, i, j)) {
        ans = Math.max(ans, j - i)
      }
    }
  }

  return ans;
}


/*
解法二 滑动窗口
原理：逐个检查所有的子字符串，看它是否不含有重复的字符。
时间复杂度： O(2n)=O(n)
空间复杂度： O(min(n,m))
思路: 
1. 在暴力法中，我们会反复检查一个子字符串是否含有有重复的字符，但这是没有必要的。如果从索引 i 到 j - 1 之间的子字符串Sij 
,已经被检查为没有重复字符。我们只需要检查Sj对应的字符是否已经存在于子字符串Sij
2.滑动窗口是数组/字符串问题中常用的抽象概念。 窗口通常是在数组/字符串中由开始和结束索引定义的一系列元素的集合，即 [i, j)（左闭，右开）。而滑动窗口是可以将两个边界向某一方向“滑动”的窗口。例如，我们将 [i, j) 向右滑动 1个元素，则它将变为[i+1,j+1)（左闭，右开）
*/


const lengthOfLongestSubstring = (s) => {
  const n = s.length
  let ans = 0, i = 0, j = 0
  let hashMap = new Set()
  
  while (i < n && j < n) {
      const str = s.charAt(j)
      if (!hashMap.has(str)){
          hashMap.add(s.charAt(j++));
          ans = Math.max(ans, j - i);
      } else {
        // 如果进来b（max 3)，就先移除a和b，然后当前就是cb(max 2)，再进来c，就把左边的c移除，当前就是bc(max 2)
        hashMap.delete(s.charAt(i++));
      }
  }
  return ans;
}

/*
解法三 优化的滑动窗口
原理：上述的方法最多需要执行 2n 个步骤。事实上，它可以被进一步优化为仅需要 n 个步骤。我们可以定义字符到索引的映射，而不是使用集合来判断一个字符是否存在。 当我们找到重复的字符时，我们可以立即跳过该窗口。
也就是说，如果s[j] 在[i,j)范围内有与j重复的字符，我们不需要逐渐增加i。我们可以直接跳过 [i，j]范围内的所有元素，并将i变为 j + 1

时间复杂度： O(n)
空间复杂度： O(min(n,m))
思路:
*/

// 没整明白
// const lengthOfLongestSubstring = (s) => {
//   const n = s.length
//   let ans = 0, i = 0, j = 0
//   let hashMap = {}
  
//   for (let j = 0, i = 0; j < n; j++) {
//     if (hashMap[s.charAt(j)]) {
//         i = Math.max(hashMap[s.charAt(j)], i);
//     }
//     ans = Math.max(ans, j - i + 1);
//     map.put(s.charAt(j), j + 1);
//   }
//   return ans;
// }
