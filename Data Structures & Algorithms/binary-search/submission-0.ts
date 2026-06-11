class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        return this.searchInternal(nums, target, 0, nums.length);
    }

    private searchInternal(nums: number[], target: number, start: number, end: number) {
        switch (end - start) {
            case 0:
                return -1;
            case 1:
                return nums[start] === target ? start : -1;
            default:
                const index = start + Math.floor((end - start) / 2);
                const mid = nums[index];

                return mid > target
                    ? this.searchInternal(nums, target, start, index)
                    : this.searchInternal(nums, target, index, end);
        }
    }
}
