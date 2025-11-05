var romanToInt = function(s) {
    // Map of Roman numerals to their integer values
    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    
    let total = 0// Initialize total to 0
    
    for (let i = 0; i < s.length; i++) {
        // Get the value of the current Roman numeral
        const currentVal = romanMap[s[i]]
        const nextVal = romanMap[s[i + 1]]
        // If the next numeral is larger, subtract current from total
        if (nextVal && currentVal < nextVal) {
            total -= currentVal
        } else {
            total += currentVal
        }
    }
    
    return total
}