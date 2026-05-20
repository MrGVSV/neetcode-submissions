class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const rows = Array.from({ length: 9 }, () => new Array(9).fill(0));
        const columns = Array.from({ length: 9 }, () => new Array(9).fill(0));
        const blocks = Array.from({ length: 9 }, () => new Array(9).fill(0));

        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                const cell = board[i][j];
                if (cell === ".") {
                    continue;
                }

                const cellIndex = Number(cell) - 1;

                if (++rows[i][cellIndex] > 1) {
                    return false;
                }

                if (++columns[j][cellIndex] > 1) {
                    return false;
                }

                const blockX = Math.floor(j / 3);
                const blockY = Math.floor(i / 3);
                const blockIndex = 3 * blockY + blockX;

                if (++blocks[blockIndex][cellIndex] > 1) {
                    return false;
                }
            }
        }

        return true;
    }
}
