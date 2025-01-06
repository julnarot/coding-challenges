
export function execute(code) {
    let result = 0;
    const appyOperation = (lastValue, value, simbol) => {
        if (simbol === '+') {
            value++;
        }
        if (simbol === '-') {
            value--;
        }
        if (simbol === '>') {
        } if (simbol.startsWith("[")) {
            let acum = lastValue;
            while (acum !== 0) {
                simbol.substr(1, simbol.length - 1).split("").forEach(f => {
                    if (f === '-') {
                        acum--;
                    }
                    if (f === '+') {
                        acum++;
                    }
                })

            }
            value = acum;
        } if (simbol.startsWith("{")) {
            if (lastValue !== 0) {
                simbol.substr(1, simbol.length - 1).split("").forEach(f => {
                    if (f === '+') {
                        value++;
                    }
                })
            }
        }
        return value
    }
    const customSpliting = (code) => {
        let newCharacter = [];
        for (let index = 0; index < code.length; index++) {
            const character = code.charAt(index);
            if (['>', '+', '-'].includes(character)) {
                newCharacter.push(character)
            } else if (character === '[') {
                const mat = /\]/.exec(code);
                const nchar = code.substr(index, mat.index);
                newCharacter.push(nchar);
                index = index + (nchar.length)
            } else if (character === '{') {
                const mat = /\}/.exec(code);
                const nchar = code.substr(index, mat.index);
                newCharacter.push(nchar);
                index = index + (nchar.length)
            }

        }

        return newCharacter
    };

    const spll = customSpliting(code)
    spll.forEach((simbol) => {
        const lastResult = result;
        result = appyOperation(lastResult, result, simbol);
    });
    return result;
}