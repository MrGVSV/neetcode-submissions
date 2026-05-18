class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums: number[], val: number): number {
        let removed = 0;
        let length = nums.length;

        for (let index = nums.length - 1; index >= 0; index--) {
            if (nums[index] !== val) {
                continue;
            }

            nums.splice(index, 1);
            removed++;
        }

        return length - removed;
    }
}
