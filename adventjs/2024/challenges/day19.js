export function distributeWeight(weight) {
    const boxes = {
        1: [' _ ', '|_|'],
        2: [' ___ ', '|___|'],
        5: [' _____ ', '|     |', '|_____|'],
        10: [' _________ ', '|         |', '|_________|'],
    };
    const foundInBoxes = (weight) => {
        return [...Object.keys(boxes)].reverse().find(f => Number(f) <= weight)
    }
    let list = [];
    while (weight > 0) {
        const boxWeight = foundInBoxes(weight);
        const [last, ...rest] = boxes[boxWeight].slice().reverse();
        const end = list.shift();
        const newlast = `${last}${end?.slice(last.length, -1) ?? ''}`;
        list.unshift(...[newlast, ...rest].reverse());
        weight =weight- boxWeight;
      }
    return list.join('\n')
}