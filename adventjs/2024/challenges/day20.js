export function fixGiftList(received, expected) {
    const extra = {};
    const missing = {};
    const expObj = {};
    const recObj = {};
    expected.forEach(element => {
        if (expObj.hasOwnProperty(element)) {
            expObj[element] = expObj[element] + 1
        } else {
            expObj[element] = 1
        }
    });
    received.forEach(element => {
        if (recObj.hasOwnProperty(element)) {
            recObj[element] = recObj[element] + 1
        } else {
            recObj[element] = 1
        }
    });
    Object.keys(expObj).forEach(k => {
        if (recObj.hasOwnProperty(k)) {
            const calExtra = recObj[k] - expObj[k];
            if (calExtra > 0) {
                extra[k] = calExtra
            } else if (calExtra < 0) {
                missing[k] = missing.hasOwnProperty(k) ? missing[k] + (calExtra * -1) : calExtra * -1
            }
        } else {
            missing[k] = missing.hasOwnProperty(k) ? missing[k] : expObj[k]
        }
    })

    return {
        missing,
        extra
    }
}