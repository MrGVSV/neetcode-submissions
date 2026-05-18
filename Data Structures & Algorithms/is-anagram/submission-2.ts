class Solution {
    private readonly ASCII_START = 'a'.charCodeAt(0);
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) {
            return false;
        }

        const counts = Array.from({length: 26}, () => 0);
        for (const char of s) {
            const index = char.toLowerCase().charCodeAt(0) - this.ASCII_START;
            counts[index] += 1;
        }

        for (const char of t) {
            const index = char.toLowerCase().charCodeAt(0) - this.ASCII_START;
            counts[index] -= 1;

            if (counts[index] < 0) {
                return false;
            }
        }

        for (const count of counts) {
            if (count > 0) {
                return false;
            }
        }

        return true;
    }
}
