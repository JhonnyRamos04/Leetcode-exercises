var reverse = function(x) {
    const isNegative = x < 0
    let num = Math.abs(x)
    let reversedNum = 0

    while (num > 0) {
        const digit = num % 10
        reversedNum = reversedNum * 10 + digit
        num = Math.floor(num / 10)
    }

    if (isNegative) {
        reversedNum = -reversedNum
    }

    // Check for 32-bit signed integer overflow
    if (reversedNum < -2147483648 || reversedNum > 2147483647) {
        return 0
    }

    return reversedNum
}