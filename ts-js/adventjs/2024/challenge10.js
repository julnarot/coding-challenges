export function compile(instructions) {
    const memory = {}; 

    const move = (regFrom, regTo) => {
        memory[regTo] = isNaN(regFrom) ? memory[regFrom] ?? 0 : Number(regFrom);
    };

    const increment = (registro) => {
        memory[registro] = (memory[registro] ?? 0) + 1;
    };

    const decrement = (registro) => {
        memory[registro] = (memory[registro] ?? 0) - 1;
    };

    const applyAction = (operation, instr1, instr2) => {
        if (operation === 'MOV') {
            move(instr1, instr2);
            return -1;
        } else if (operation === 'INC') {
            increment(instr1);
            return -1;
        } else if (operation === 'DEC') {
            decrement(instr1);
            return -1;
        } else if (operation === 'JMP') {
            return (memory[instr1] ?? 0) === 0 ? Number(instr2) : -1;
        }
    };

    for (let index = 0; index < instructions.length; index++) {
        const instruction = instructions[index];
        const [operation, instr1, instr2] = instruction.split(" ");
        const result = applyAction(operation, instr1, instr2);

        if (result >= 0) {
            index = result - 1; 
            continue;
        }
    }

    return memory['A']; 
}