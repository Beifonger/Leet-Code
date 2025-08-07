/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const { sourceMapsEnabled } = require("process");

var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    console.log(i);
    console.log(nums[i]);
    for (let a = 0; a < nums.length; a++) {
      if (i === a) {
        continue;
      }
      const soma = nums[i] + nums[a];
      console.log(soma);
      if (soma === target) {
        return [i, a];
      }
    }
  }
};

const array = [5, 3, 223, 2, 23, 44, 64, 67, 23, 138, 485, 321, 332, 157, 231];
const teste = twoSum(array, 552);

console.log(array[teste[0]] + array[teste[1]]);
console.log(
  twoSum([5, 3, 223, 2, 23, 44, 64, 67, 23, 138, 485, 321, 332, 157, 231], 552)
);
