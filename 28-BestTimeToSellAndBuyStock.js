var maxProfit = function(prices) {
    const n = prices.length
    if (n < 2) return 0
    let minPrice = prices[0]
    let maxProfit = 0

    for (let i = 1; i < n; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i]
        } else {
            maxProfit = Math.max(maxProfit, prices[i] - minPrice)
        }
    }

    return maxProfit   
}