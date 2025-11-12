var removeDuplicates = function(nums) {
    // Edge case: if the array is empty, return 0
    const n = nums.length;
    if (n === 0) return 0;

    let writeIndex = 1;
    // Iterate through the array starting from the second element
    for (let readIndex = 1; readIndex < n; readIndex++) {
        // If the current element is different from the previous one, it's unique
        if (nums[readIndex] !== nums[readIndex - 1]) {
            nums[writeIndex] = nums[readIndex];
            writeIndex++;
        }
    }

    return writeIndex;

}

console.log(removeDuplicates([1,1,2])); // Output: 2
