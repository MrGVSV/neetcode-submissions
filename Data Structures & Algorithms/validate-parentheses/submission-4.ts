class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const stack = [];
        const closeToOpen = {
            ')': '(',
            ']': '[',
            '}': '{',
        };

        const isClosed = (c: string) => closeToOpen[c] !== undefined

        for (const c of s) {
            if(!isClosed(c)) {
                stack.push(c);
                continue;
            }

            const last = stack.pop();
            if (last === undefined) {
                return false;
            }

            if (last !== closeToOpen[c]) {
                return false;
            }
        }
        return stack.length === 0;
    }
}
