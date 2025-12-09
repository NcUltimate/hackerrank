/**
 * https://www.hackerrank.com/contests/software-engineer-prep-kit/challenges/lookup-with-binary-search/problem
 */
function findFirstOccurrence(nums, target) {
  if (nums.length === 0) {
    return -1;
  }

  let s = 0;
  let e = nums.length - 1;
  
  while (e >= s) {
    let m = Math.floor((s + e) / 2);
    
    if (nums[m] === target) {
      while (m > -1 && nums[m] === target) m --;
      return m + 1;
    }
    else if (nums[m] > target) {
      const value = nums[m];
      e = m;
      while (e > -1 && nums[e] === value) e --;
    }
    else {
      const value = nums[m];
      s = m;
      while (s < nums.length && nums[s] === value) s ++;
    }
  }

  return -1;
}
