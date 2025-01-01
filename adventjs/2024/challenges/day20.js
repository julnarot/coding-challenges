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
        if (received.includes(gift)) {
            missing[gift] = missing[gift] + 1;
        } else {
            missing[gift] = 0
        }
    })

    return {
        missing,
        extra
    }
}