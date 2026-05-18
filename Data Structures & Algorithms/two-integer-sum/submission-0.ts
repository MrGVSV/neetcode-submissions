class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        for (const ix in nums) {
            const i = Number(ix);
            for (const jx in nums) {
                const j = Number(jx);
                if (i === j) {
                    continue;
                }

                if (nums[i] + nums[j] !== target) {
                    continue;
                }

                return i < j ? [i, j] : [j, i];
            }
        }

        return [];
    }
}
