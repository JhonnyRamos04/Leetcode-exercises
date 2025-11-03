var lengthOfLongestSubstring = function(s) {
    let maxLength = 0
    let start = 0
    let charIndexMap = new Map()

    for (let i = 0; i < s.length; i++) {
        // Get the current character
        const char = s[i]
        // If the character is already in the map and its index is within the current window
        if (charIndexMap.has(char) && charIndexMap.get(char) >= start) {
            start = charIndexMap.get(char) + 1
        }
        // Update the character's index in the map
        charIndexMap.set(char, i)
        // Update the maximum length found so far
        maxLength = Math.max(maxLength, i - start + 1)
    }

    return maxLength
}


console.log(lengthOfLongestSubstring("abcabcbb"))