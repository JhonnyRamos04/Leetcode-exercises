var maxArea = function(height) {
    const n = height.length
    let left = 0
    let right = n - 1
    let max_area = 0

    while (left < right) {
        const current_height = Math.min(height[left], height[right])
        const current_width = right - left
        const current_area = current_height * current_width
        max_area = Math.max(max_area, current_area)

        if (height[left] < height[right]) {
            left++
        } else {
            right--
        }
    }

    return max_area
}