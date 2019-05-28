/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let valueMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    const two = target - nums[i];
    const twoIndex = valueMap.get(two);
    if (Number.isInteger(twoIndex)) {
      return [twoIndex, i]
    }
    valueMap.set(nums[i], i);
  }
  return [];
};