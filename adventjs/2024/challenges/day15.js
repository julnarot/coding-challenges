export function drawTable(data) {
    let rows = [];

    const rowsSize = (list) => {
        list.map(rc => {
            Array.from({ length: rc.length }).map((_, i) => {
                ob[i] = ob.hasOwnProperty(i) ? [...ob[i], rc[i].length] : []
            });
        })
        return Object.keys(ob).map(o => {
            const or = ob[o].sort((a, b) => a.res > b ? 1 : a < b ? -1 : 0)
            return or[or.length - 1];
        });
    }
    const columns = data.map(element => {
        const val = [];
        const keys = Object.keys(element);
        rows = keys;
        keys.forEach(key => {
            val.push(element[key])
        })
        // console.log(val)
        return val;
    });
    const ob = {}
    const rowsAndColumns = [rows, ...columns];
    const rsize = rowsSize(rowsAndColumns);
    return rowsAndColumns.map(rc => {
        return `| ${rc.map(r=>r).join('|')} |`
    }).join('\n')
}