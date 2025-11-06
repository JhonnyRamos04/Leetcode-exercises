var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return "";
    
    // Start with the first string as the initial prefix
    let prefix = strs[0];
    
    // Compare the prefix with each string in the array
    for (let i = 1; i < strs.length; i++) {
        // Update the prefix by comparing it with the current string
        while (strs[i].indexOf(prefix) !== 0) {
            // Shorten the prefix by removing the last character
            prefix = prefix.substring(0, prefix.length - 1)
            // If the prefix becomes empty, return an empty string
            if (prefix === "") return ""
        }
    }
    
    return prefix
    
}

var strs = ["flower","flow","flight"]
console.log(longestCommonPrefix(strs)) // "fl"