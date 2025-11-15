var strStr = function(haystack, needle) {
    const n = haystack.length
    const m = needle.length

    if (m === 0) return 0 // Edge case: empty needle

    for (let i = 0; i <= n - m; i++) {
        let j = 0
        // Check if needle matches haystack starting at index i
        while (j < m && haystack[i + j] === needle[j]) {
            j++
        }
        // If we found a match, return the starting index
        if (j === m) {
            return i
        }
    }

    return -1 // Needle not found in haystack
}