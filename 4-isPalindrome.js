var isPalindrome = function(x) {
    let str = x.toString()
    let left = 0
    let right = str.length - 1

    // Compare characters from both ends of the string
    while (left < right) {
        // If characters do not match, it's not a palindrome
        if (str[left] !== str[right]) {
            return false
        }
        left++
        right--
    }
    return true
}

console.log(isPalindrome(121))  // true