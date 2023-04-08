/*
Assignment 5: Algorithm (Advanced Optional)
Given an array of integers, return indices of the two numbers such that they add up to a specific target. You may assume that each input would have exactly one solution, and you may not use the same element twice.
*/

function twoSum(nums, target) {
  // your code here
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = nums.length - 1; j > i; j--) {
      if (nums[i] + nums[j] === target) {
        const newArr = [].concat(i, j);
        arr.push(newArr);
      }
    }
  }
  return arr;
}

console.log(twoSum([2, 7, 11, 15], 9));

/*
For example: 
  twoSum([2, 7, 11, 15], 9); 
Should returns: 
  [0, 1] 
Because: 
  nums[0] + nums[1] is 9
*/
