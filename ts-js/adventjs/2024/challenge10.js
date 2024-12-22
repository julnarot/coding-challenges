export function compile(instructions) {
    const memory = {};
    let lastRegister = '';

    const move = (regFrom, regTo) => {
        memory[regTo] = memory[regFrom];
    }
    const copy = (registro, value) => {
        memory[registro] = value;
    }
    const increment = (registro) => {
        memory[registro] = memory[registro] + 1;
    }


    const applyAction = (operation, instr1, instr2, value) => {
        if (operation === 'MOV') {
            if (isNaN(instr1)) {
                copy(instr2, instr1);
            } else {
                move(instr1, instr2, value);
            }
            return -1;
        } else if (operation === 'INC') {
            increment(instr1);
            return -1;
        } else if (operation === 'JMP') {
            return memory[instr1] === 0 ? instr2 : -1;
        }
    }

    for (let index = 0; index < instructions.length; index++) {
        const instruction = instructions[index];
        const [operation, instr1, instr2] = instruction.split(" ");
        const resul = applyAction(operation, instr1, instr2);
        if(resul>=0){
            index = 1
        }
        lastRegister = instr1 ?? instr2;
    }
    // instructions.forEach(instruction => {
    // });
    console.log(lastRegister, ' : ', memory[lastRegister])

}