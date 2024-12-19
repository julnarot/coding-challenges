export function organizeShoes(shoes) {
    const sizes = [];
    const shoeObj = {};
    shoes.forEach(element => {
        if (shoeObj.hasOwnProperty(element.size)) {
            shoeObj[element.size] = [...shoeObj[element.size], element];
        } else {
            shoeObj[element.size] = [element];
        }
    });
    Object.keys(shoeObj).forEach(key => {
        const leftAndRigthShoe = [
            shoeObj[key].filter(shoe => shoe.type === 'I').length,
            shoeObj[key].filter(shoe => shoe.type === 'R').length
        ];
        if (!leftAndRigthShoe.includes(0)) {
            Array.from({ length: Math.min(...leftAndRigthShoe) }).map(() => key).forEach(size => {
                sizes.push(Number(size));
            })
        }
    })
    return sizes;
}