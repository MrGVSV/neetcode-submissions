class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const normalized = s.replaceAll(/[^a-zA-Z0-9]/g, "").toLowerCase();
        for (let i = 0; i < normalized.length; i++) {
            const a = normalized.at(i)!;
            const b = normalized.at(-1 - i)!;
            if (a !== b) {
                return false;
            }
        }
        return true;
    }
}
