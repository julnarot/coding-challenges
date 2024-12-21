export function moveTrain(board, mov) {
    // Code here
    let action = 'none';
    board.forEach((row, index) => {
        const posix = row.indexOf('@');
        if (posix >= 0) {
            if (mov === 'U') {
                if (index - 1 >= 0 && index < board.length && posix >= 0 && posix < row.length) {
                    action = board[index - 1].charAt(posix) === '*' ? 'eat' : 'none';
                } else {
                    action = 'crash';
                }
            } else if (mov === 'R') {
                if (index >= 0 && index < board.length && posix >= 0 && (posix+1) < row.length) {
                    action = row.charAt(posix + 1) === '*' ? 'eat' : 'none';
                } else {
                    action = 'crash';
                }
            } else if (mov === 'L') {
                if (index >= 0 && index < board.length && (posix - 1) >= 0 && posix < row.length) {
                    action = row.charAt(posix - 1) === '*' ? 'eat' : 'none';
                } else {
                    action = 'crash';
                }
            
            } else if (mov === 'D') {
                if (index >= 0 && index + 1 < board.length && posix >= 0 && posix < row.length) {
                    action = board[index + 1].charAt(posix) === '*' ? 'eat' : board[index + 1].charAt(posix)=== 'o' ? 'crash' : 'none';
                } else {
                    action = 'crash';
                }
            }
        }
    });
    return action;
}