var merge = function(nums1, m, nums2, n) {
    const merged = []
    // Merge the two arrays
    for (let i = 0, j = 0; i < m || j < n;) {
        if (i === m) {
            merged.push(nums2[j])
            j++
        } else if (j === n) {
            merged.push(nums1[i])
            i++
        } else if (nums1[i] < nums2[j]) {
            merged.push(nums1[i])
            i++
        } else {
            merged.push(nums2[j])
            j++
        }
    }
    // Copy back to nums1
    for (let k = 0; k < merged.length; k++) {
        nums1[k] = merged[k]
    }

    return nums1
}