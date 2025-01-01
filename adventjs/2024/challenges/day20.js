export function fixGiftList(received, expected) {

    const extra = {}
    const missing = {}
    received.forEach(gift => {
        if (extra.hasOwnProperty(gift)) {
            extra[gift] = extra[gift] + 1;
        } else {
            extra[gift] = 0
        }
    });
    expected.forEach(gift => {
        if (!received.includes(gift)) {
            missing[gift] = missing.hasOwnProperty(gift) ?   missing[gift] + 1 : 1;
        } 
    })
    Object.keys(extra).forEach(k=>{
        if(extra[k]===0) {
            delete extra[k];
        }
    })

    return {
        missing,
        extra
    }
}