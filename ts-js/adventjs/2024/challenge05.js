export function organizeShoes(shoes) {
    const shoeObj = {};
    shoes.forEach(element => {
        if (shoeObj.hasOwnProperty(element.size)) {
            shoeObj[element.size] = [...shoeObj[element.size], element];
        } else {
            shoeObj[element.size] = [element];
        }
    });
    return Object.keys(shoeObj).filter(key => [...shoeObj[key].map(shoe => shoe.type)].length > 1).map(k => Number(k));
}