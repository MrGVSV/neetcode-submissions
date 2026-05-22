class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        const map = new Map();

        for (let i = 0; i < numbers.length; i++) {
            const num = numbers[i];
            const diff = target - num;

            const diffIndex = map.get(diff);
            if(diffIndex !== undefined) {
                return [diffIndex + 1, i + 1];
            }

            map.set(num, i);
        }

        return []
    }
}
