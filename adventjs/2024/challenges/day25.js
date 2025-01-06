
export function execute(code) {
    let cells = [0];
    let pointer = 0;
    const stack = [];


    const processCode = (block) => {
        let i = 0;
        while (i < block.length) {
            const instruction = block[i];
            if (instruction === '+') {
                cells[pointer]++;
            } else if (instruction === '-') {
                cells[pointer]--;
            } else if (instruction === '[') {
                if (cells[pointer] === 0) {
                    let openBlocks = 1;
                    while (openBlocks > 0) {
                        i++;
                        if (block[i] === '[') openBlocks++;
                        if (block[i] === ']') openBlocks--;
                    }
                } else {
                    stack.push(i);
                }
            } else if (instruction === ']') {
                if (cells[pointer] !== 0) {
                    i = stack[stack.length - 1];
                } else {
                    stack.pop();
                }
            } else if (instruction === '{') {
                if (cells[pointer] === 0) {
                    let openBlocks = 1;
                    while (openBlocks > 0) {
                        i++;
                        if (block[i] === '{') openBlocks++;
                        if (block[i] === '}') openBlocks--;
                    }
                }
            }
            i++;
        }
    };


    code = code.replaceAll('>', '');
    processCode(code);

    return cells[pointer];
}