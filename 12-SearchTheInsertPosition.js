var searchInsert = function(nums, target) {
    let left = 0
    let right = nums.length - 1

    // Binary search to find the insert position
    while (left <= right) {
        // set mid index
        const mid = Math.floor((left + right) / 2)
        // Check if the mid element is the target
        if (nums[mid] === target) {
            return mid
        } else if (nums[mid] < target) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    
    return left
}