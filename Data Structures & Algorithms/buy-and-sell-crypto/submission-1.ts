class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let profit = 0;
        let max = -Infinity;
        for (let i = prices.length - 1; i >= 0; i--) {
            const price = prices[i];
            const potentialProfit = max - price;
            profit = Math.max(profit, potentialProfit);
            max = Math.max(max, price);
        }

        return profit;
    }
}
