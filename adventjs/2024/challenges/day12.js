export function calculatePrice(ornaments) {
    const ornamentPrice = {
        '*': 1,
        'o': 5,
        '^': 10,
        '#': 50,
        '@': 100,
    };
    const ornamentsList = ornaments.split("");
    return ornamentsList.map((or, i) => {
        const ornRightIsgre = i + 1 < ornamentsList.length && ornamentPrice[or] < ornamentPrice[ornamentsList[i + 1]];
        return ornRightIsgre ? ornamentPrice[or] * -1 : ornamentPrice[or]
    }).reduce((pv, a) => pv + a, 0) || undefined
}