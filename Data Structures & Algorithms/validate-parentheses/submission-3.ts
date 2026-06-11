class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        if (s.length === 0) {
            return true;
        }

        if (s[0] === ")" || s[0] === "}" || s[0] === "]") {
            return false;
        }

        const stack = [s[0]];
        for (let i = 1; i < s.length; i++) {
            const curr = s[i];
            const last = stack.pop();

            if(last === undefined) {
                stack.push(curr);
                continue;
            }

            if (this.isPair(last, curr)) {
                continue;
            }

            stack.push(last, curr);
        }

        return stack.length === 0;
    }

    isPair(a: string, b: string) {
        return (a === "(" && b === ")") || (a === "{" && b === "}") || (a === "[" && b === "]");
    }
}
