var addBinary = function(a, b) {
    const maxLength = Math.max(a.length, b.length)
    let carry = 0
    let result = []

    // Pad the shorter string with leading zeros
    a = a.padStart(maxLength, '0')
    b = b.padStart(maxLength, '0')

    // Traverse the strings from the last character to the first
    for (let i = maxLength - 1; i >= 0; i--) {
        const bitA = parseInt(a[i], 10)
        const bitB = parseInt(b[i], 10)
        const sum = bitA + bitB + carry

        if (sum >= 2) {
            carry = 1
            result.push(sum - 2)
        } else {
            carry = 0
            result.push(sum)
        }
    }

    // If there's a carry left, add it to the result
    if (carry) {
        result.push(1)
    }
    
    // The result is in reverse order, so reverse it before returning
    return result.reverse().join('')
}