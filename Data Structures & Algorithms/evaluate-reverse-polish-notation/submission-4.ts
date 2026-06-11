class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        const stack = [];
        for (const token of tokens) {
            const op = Operations[token];
            if (op) {
                // if (stack.length < 2) {
                //     throw new Error(`expected two operands, received ${stack.length}`) ;
                // }

                const b = stack.pop()
                const a = stack.pop();
                stack.push(op(a, b));
                continue;
            }

            const num = parseInt(token, 10);
            // if(isNaN(num) || !isFinite(num)) {
            //     throw new Error(`unexpected token: ${token}`);
            // }

            stack.push(num)
        }

        // if(stack.length !== 1) {
        //     throw new Error('invalid number of arguments')
        // }

        return stack.pop();
    }
}

const Operations = {
    '+': (a: number, b: number) => a + b,
    '-': (a: number, b: number) => a - b,
    '*': (a: number, b: number) => a * b,
    '/': (a: number, b: number) => Math.trunc(a / b),
}
