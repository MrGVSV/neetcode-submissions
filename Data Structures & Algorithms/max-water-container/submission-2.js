class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        // 1. Start at edges
        // 2. Capture max area
        // 3. Move in smaller of two heights
        // 4. If equal, move to smaller of two neighbors
        // 5. Repeat

        let leftIndex = 0, rightIndex = heights.length - 1;
        let max = 0;
        while (leftIndex < rightIndex) {
            const left = heights[leftIndex];
            const right = heights[rightIndex];
            const minHeight = Math.min(left, right);
            max = Math.max(max, minHeight *  (rightIndex - leftIndex));

            if (left < right) {
                leftIndex++;
            } else if (right < left) {
                rightIndex--;
            } else {
                rightIndex--;
            }
        }

        return max;
    }
}

