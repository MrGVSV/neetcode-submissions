class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums: number[]): number {
        let count = 0,
            max = 0;
        for (const x of nums) {
            if (x !== 1) {
                max = Math.max(count, max);
                count = 0;
                continue;
            }

            count++;
        }

        max = Math.max(count, max);

        return max;
    }
}
