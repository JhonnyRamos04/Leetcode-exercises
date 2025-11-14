var removeElement = function(nums, val) {
    const n = nums.length
    let writeIndex = 0

    for (let readIndex = 0; readIndex < n; readIndex++) {
        // If the current element is not equal to val, we keep it
        if (nums[readIndex] !== val) {
            nums[writeIndex] = nums[readIndex];
            writeIndex++
        }
    }

    return writeIndex
}