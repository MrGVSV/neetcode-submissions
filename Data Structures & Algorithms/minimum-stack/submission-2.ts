class MinStack {
    private readonly values: number[];
    private readonly minimums: number[];

    constructor() {
        this.values = [];
        this.minimums = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        this.values.push(val);

        const currMin = this.minimums.pop();
        this.minimums.push(currMin, Math.min(currMin === undefined ? val : currMin, val));
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
