/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {

    let res = 0
    // if the result is found in the first two elements
    res = nums[0] + nums[1]
    if (res === target) {
        return [0, 1]
    }

    // First loop to iterate through the array when -1 element is excluded
    for (let i = 0; i < nums.length - 1; i++) {
        // Second loop to iterate through the array when the first loop element is excluded
        for (let j = i + 1; j < nums.length; j++) {
            res = nums[i] + nums[j]
            if (res === target) {
                return [i, j]
            }

        }
    }
}