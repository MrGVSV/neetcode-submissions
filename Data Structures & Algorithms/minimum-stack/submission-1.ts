class MinStack {
    private readonly values: number[];
    private readonly minimums: number[];

    constructor() {
        this.values = []
        this.minimums = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        // 5 0 2 4
        // 5
        // 5 0
        // 5 0 0
        // 5 0 0 0
        // 
        this.values.push(val);

        const currMin = this.minimums.pop();
        if (currMin === undefined) {
            this.minimums.push(val);
            return;
        }

        if (currMin < val) {
            this.minimums.push(currMin, currMin);
        } else {
            this.minimums.push(currMin, val);
        }
    }

    /**
     * @return {void}
     */
    pop(): void {
        this.minimums.pop();
        this.values.pop();
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.values.at(-1);
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.minimums.at(-1);
    }
}
