/*

Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
Example 2:

Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).

*/
let numsArr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
/* const removeDuplicates = function (nums) {
  let stack = [];

  for (let i = 0; i < nums.length; i++) {
    if (stack[stack.length - 1] == nums[i]) {
    } else {
      stack.push(nums[i]);
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (i >= stack.length) {
      nums[i] = "_";
    } else {
      nums[i] = stack[i];
    }
  }

  console.log(nums);
  return stack.length;
};

let result = removeDuplicates();

console.log(result); */

const removeDuplicates = (nums) => {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] == nums[i + 1]) {
      nums.splice(i + 1, 1);
      i--;
    }
  }

  return nums.length;
};

let result = removeDuplicates(numsArr);
console.log(result);

// Solution 2 : For loop with continue
/* const removeDuplicates = (nums) => {
  if (nums.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] === nums[i]) continue; // If the elements are equal then continue else copy the unique element by then to "i+1" position
    nums[++i] = nums[j];
  }
  return i + 1;
}; */
