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

            nums[index] = nums.at(-1 - removed);
            removed++;
        }

        const k = length - removed;
        nums.splice(k, removed);

        return length - removed;
    }
}
