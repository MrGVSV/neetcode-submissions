class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const set = new Set<number>();
        for (const num of nums) {
            const size = set.size;
            if (set.add(num).size === size) {
                return true;
            }
        }
        return false;
    }
}
