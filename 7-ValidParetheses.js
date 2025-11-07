var isValid = function(s) {
    const map = {')': '(', '}': '{', ']': '['}  
    const stack = []

    for (let char of s) {
        if (map[char]) {
            // If the character is a closing bracket, check the top of the stack
            if (stack.length === 0 || stack.pop() !== map[char]) {
                return false
            }
        } else {
            // If it's an opening bracket, push it onto the stack
            stack.push(char)
        }
    }

    // If the stack is empty, all brackets were matched correctly
    return stack.length === 0
}

var s = "()[]{}"
console.log(isValid(s)) // true