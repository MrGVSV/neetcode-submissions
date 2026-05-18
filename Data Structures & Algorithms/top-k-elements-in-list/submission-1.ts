class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const counts = Array.from({ length: 2001 }, (_, index) => [index - 1000, 0]);
        for (const num of nums) {
            counts[num + 1000][1]++;
        }

        return counts
            .sort((a, b) => b[1] - a[1])
            .slice(0, k)
            .map(([num]) => num);
    }
}
