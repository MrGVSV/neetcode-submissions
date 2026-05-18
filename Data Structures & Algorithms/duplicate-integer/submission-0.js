class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const set = new Set();
        for (const num of nums) {
            const size = set.size;
            if (set.add(num).size === size) {
                return true;
            }
        }
        return false;
    }
}
