export function isRobotBack(moves) {
    const moveProp = {
        'U': {
            invert: 'D',
            countUsed: 0,
        },
        'R': {
            invert: 'L',
            countUsed: 0,
        },
        'D': {
            invert: 'U',
            countUsed: 0,
        },
        'L': {
            invert: 'R',
            countUsed: 0,
        },
    }
    const checkReturnOrigin = (positions) => positions[0] === 0 && positions[1] === 0 || positions

    const buildPositions = (moves) => {
        let pos = []
        let acumDob = 0;
        let nextValInvert = false;
        let hasNextVal = false;
        moves.split("").forEach(move => {
            if (move === '*') {
                acumDob++;
            } else if (move === '!') {
                nextValInvert = true;
            } else if (move === '?') {
                hasNextVal = true;
            } else if (['R', 'L', 'U', 'D'].includes(move)) {
                pos.push(move);
                moveProp[move].countUsed = moveProp[move].countUsed + 1;
                if (acumDob > 0) {
                    Array.from({ length: acumDob }).map(() => move).forEach(m => {
                        pos.push(m)
                        moveProp[m].countUsed = moveProp[m].countUsed + 1;
                    });
                    // pos = [...pos, ...];
                    acumDob = 0;
                } else if (nextValInvert) {
                    const foundMove = pos.findIndex(fi => fi === move);
                    if (foundMove >= 0) {
                        pos.splice(foundMove, 1);
                        moveProp[move].countUsed = moveProp[move].countUsed - 1;
                        pos.push(moveProp[move].invert);
                        moveProp[move].countUsed = moveProp[moveProp[move].invert].countUsed + 1;
                        nextValInvert = false;
                    }
                } else if (hasNextVal) {
                    if (moveProp[move].countUsed > 1 && moveProp[move].countUsed < 3) {
                        const foundMove = pos.findIndex(fi => fi === move);
                        if (foundMove >= 0) {
                            pos.splice(foundMove, 1);
                            moveProp[move].countUsed = moveProp[move].countUsed - 1;
                            hasNextVal = false;
                        } else {
                            console.log('...')
                        }
                    } else if (moveProp[move].countUsed >= 1 && moveProp[move].countUsed < 2) {
                        console.log('............')
                    }
                }

            }
        });
        return pos;
    }

    const movesBuilded = buildPositions(moves);
    let x = 0;
    let y = 0;
    movesBuilded.forEach(move => {
        if (move === 'R') {
            x++;
        } else if (move === 'L') {
            x--;
        }
        if (move === 'U') {
            y++;
        } else if (move === 'D') {
            y--;
        }

    });
    return checkReturnOrigin([x, y]);
}