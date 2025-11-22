var longestPalindrome = function(s) {
    const n = s.length
    let maxLength = 1
    let start = 0

    // Create a 2D array to store palindrome status
    const dp = Array.from({ length: n }, () => Array(n).fill(false))

    // Every single character is a palindrome
    for (let i = 0; i < n; i++) {
        dp[i][i] = true
    }


    // Check for substrings of length greater than 1
    for (let length = 2; length <= n; length++) {
        for (let i = 0; i <= n - length; i++) {
            // Calculate the ending index of the substring
            const j = i + length - 1
            if (s[i] === s[j]) {
                // Check if the inner substring is a palindrome
                if (length === 2) {
                    dp[i][j] = true
                } else {
                    dp[i][j] = dp[i + 1][j - 1]
                }
                if (dp[i][j] && length > maxLength) {
                    maxLength = length
                    start = i
                }
            }
        }
    }
    return s.substring(start, start + maxLength)
}