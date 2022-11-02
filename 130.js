/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {

    const rows = board.length
    const cols = board[0].length

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (i === 0 || j === 0 || i === rows - 1 || j === cols - 1) {
                if (board[i][j] === 'O') {
                    dfs(board, i, j)
                }
            }
        }
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === 'O') {
                board[i][j] = 'X'
            }
        }
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === 'T') {
                board[i][j] = 'O'
            }
        }
    }

    console.log(board)


};


var dfs = function(board, i, j) {
    const rows = board.length
    const cols = board[0].length


    if (i < 0 || j < 0 || i >= rows || j >= cols || board[i][j] !== 'O') {
        return
    }

    board[i][j] = 'T'

    dfs(board,i + 1, j)
    dfs(board,i - 1, j)
    dfs(board,i, j + 1)
    dfs(board,i, j - 1)
}