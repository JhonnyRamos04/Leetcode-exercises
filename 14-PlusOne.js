var plusOne = function(digits) {
    const n = digits.length;
    // Traverse the array from the last digit to the first
    for (let i = n - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        }
        digits[i] = 0;
    }
    // If all digits were 9, we need to add a new digit at the front
    digits.unshift(1);
    return digits;
}