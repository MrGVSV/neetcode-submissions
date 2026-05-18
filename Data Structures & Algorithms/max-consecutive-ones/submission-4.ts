class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums: number[]): number {
        let count = 0,
            max = 0;
        for (const x of nums) {
            count = x === 1 ? count + 1 : 0;
            max = Math.max(count, max);
        }

        return max;
    }
}
