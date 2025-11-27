var divide = function(dividend, divisor) {
    const MAX = 2147483647
    const MIN = -2147483648
    // Handle overflow case
    if (dividend === MIN && divisor === -1) return MAX
    // Determine the sign of the quotient
    const sign = (dividend > 0) === (divisor > 0) ? 1 : -1

    let absDividend = Math.abs(dividend)
    let absDivisor = Math.abs(divisor)
    let quotient = 0
    // Subtract divisor from dividend using bit manipulation
    while (absDividend >= absDivisor) {
        let temp = absDivisor
        let multiple = 1

        while (absDividend >= (temp << 1)) {
            temp <<= 1
            multiple <<= 1
        }

        absDividend -= temp
        quotient += multiple
    }

    return sign === 1 ? quotient : -quotient   
}