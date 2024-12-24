export function minMovesToStables(reindeer, stables) {
    const findMinReinInStab = (rein, stab) => {
        const nearOrd = stab
            .map((s, index) => {
                return {
                    oper: rein > s ? '>' : rein < s ? '<' : '=',
                    res: rein > s ? rein - s : rein < s ? s - rein : 0,
                    stabPos: s,
                    origIndex: index
                }
            })
            .sort((a, b) => a.res > b.res ? -1 : a.res < b.res ? 1 : 0);
        return nearOrd[nearOrd.length - 1];
    }

    let lis = [...stables]
    return reindeer.map(rei => {
        const mm = findMinReinInStab(rei, lis);
        lis = lis.filter(f=>f!==mm.stabPos);
        return mm.res;
    }).reduce((rr, a) => rr + a, 0);
}
