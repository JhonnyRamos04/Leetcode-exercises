
var deleteDuplicates = function(head) {
    if (!head) return null
    
    
    // Since the input is a sorted array, we can iterate through it and skip duplicates
    for (let i = 0; i < head.length; i++) {
        if (i === 0 || head[i] !== head[i - 1]) {
            result.push(head[i])
        }
    }   
    
    return result

}


console.log(deleteDuplicates([1,1,2,3,3])) // Output: [1,2,3]
