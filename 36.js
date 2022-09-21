/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const rows = createArray()
    const columns = createArray()
    const blocks = createArray()

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            const el = board[i][j]
            if (el !== '.') {
                if (rows[i].includes(el)) {
                    return false;
                } else {
                    rows[i].push(el)
                }

                if (columns[j].includes(el)) {
                    return false;
                } else {
                    columns[j].push(el)
                }

                const blockIndex = Math.floor(j / 3) + (Math.floor(i / 3) * 3)

                if (blocks[blockIndex].includes(el)) {
                    return false
                } else {
                    blocks[blockIndex].push(el)
                }


            }
        }
    }

    return true
};

var createArray = function () {
    return Array.from(Array(9)).map(e => [])
}