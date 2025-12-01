var singleNumber = function(nums) {
    const numCount = new Map()

    for (const num of nums) {
        numCount.set(num, (numCount.get(num) || 0) + 1)
    }

    for (const [num, count] of numCount.entries()) {
        if (count === 1) {
            return num
        }
    }
    return null // In case there is no single number
}