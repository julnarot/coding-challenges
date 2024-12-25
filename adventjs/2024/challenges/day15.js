export function drawTable(data) {
    let rows = [];
    const rowsSize = (list) => {
        const ob = {}
        list.forEach(rc => {
            Array.from({ length: rc.length }).forEach((_, i) => {
                ob[i] = ob.hasOwnProperty(i) ? [...ob[i], rc[i].length] : [rc[i].length];
            });

        })
        return Object.keys(ob).map(o => {
            const or = ob[o].sort((a, b) => a.res > b ? 1 : a < b ? -1 : 0);
            return or[or.length - 1];
        });
    }
    const columns = data.map(element => {
        const val = [];
        const keys = Object.keys(element);
        rows = [...keys].map(m => `${m.charAt(0).toUpperCase()}${m.slice(1)}`);
        keys.forEach(key => {
            val.push(`${element[key]}`)
        })
        return val;
    });

    const rowsAndColumns = [[], rows, [], ...columns, []];
    const rsize = rowsSize([rows, ...columns]);
    return rowsAndColumns.map(rc => {
        return rc.length > 0 ? `| ${rc.map((r, i) => '' + r.padEnd(rsize[i], ' ')).join(' | ')}  |` : `+${rsize.map(r => "".padEnd(r + 2, '-')).join("+")}-+`
    }).join('\n')
}