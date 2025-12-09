/**
 * https://www.hackerrank.com/contests/software-engineer-prep-kit/challenges/lookup-with-binary-search/problem
 */
function binarySearch(nums, target) {
  if (nums.length === 0) {
    return -1;
  }
  
  // This is pretty CS 101

  let s = 0;
  let e = nums.length - 1;
  
  while (e >= s) {
    let m = Math.floor((s + e) / 2);
    
    if (nums[m] === target) {
      return m;
    }
    else if (nums[m] > target) {
      e = m - 1;
    }
    else {
      s = m + 1;
    }
  }

  return -1;
}
