class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const map = new Map<string, string[]>();
        for (const str of strs) {
            const key = this.sortString(str);
            const entry = map.get(key);
            if (entry) {
                entry.push(str)
            } else {
                map.set(key, [str])
            }
        }

        return Array.from(map.values())
    }

    private sortString(str: string): string {
        return str.split('').sort().join('');
    }
}

