class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        // [3,2,5,4]
        // P: [1,3,6,30]
        // S: [1,4,20,40]
        // [40,60,24,30]

        if (nums.length === 2) {
            return [nums[1], nums[0]];
        }

        const left = [1, nums.at(0)];
        const right = [1, nums.at(-1)];
        for (let i = 2; i < nums.length; i++) {
            const leftValue = nums.at(i - 1);
            const rightValue = nums.at(-i);
            left.push(leftValue * left.at(-1));
            right.push(rightValue * right.at(-1));
        }

        return Array.from({ length: nums.length }, (_, index) => {
            return left.at(index) * right.at(-1 - index);
        });
    }
}
