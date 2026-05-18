class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const normalized = s.replaceAll(/[^a-zA-Z0-9]/g, "").toLowerCase();
        return (normalized === normalized.split("").reverse().join(""));
    }
}
