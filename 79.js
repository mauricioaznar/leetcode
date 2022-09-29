/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let exists = false;

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            const curr = board[i][j]

            if (curr === word[0] && helper(board, word, 0, {}, i, j)) {
                exists = true
            }
        }
    }

    return exists
};


var helper = function (board, word, i, path, row, col) {
    if (row < 0 || row >= board.length) {
        return false;
    }

    if (col < 0 || col >= board[0].length) {
        return false
    }

    if (!path[row]) {
        path = {
            ...path,
            [row]: {
                [col]: true
            }
        }
    } else if (!path[row][col]) {
        path = {
            ...path,
            [row]: {
                ...path[row],
                [col]: true
            }
        }
    } else {
        return false
    }


    if (word[i] !== board[row][col]) {
        return false
    }

    if (i === word.length - 1) {
        return true
    }



    return helper(board, word, i + 1, path, row - 1, col)
        || helper(board, word, i + 1, path, row + 1, col)
        || helper(board, word, i + 1, path, row, col - 1)
        || helper(board, word, i + 1, path, row, col + 1)

}