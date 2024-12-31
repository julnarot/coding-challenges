export function distributeWeight(weight) {
    let level = 0;
    if (weight >= 0 < 3) {
        level = 2
    }
    return Array.from({ length: level }).map((_, i) => {
        let res =  Array.from({length:((weight*2)+1)-2}).map(f=>'#')
        if(i===0){
            res.pop;
            res = [' ',...[...res].map(()=>'_')]
        }else if(i===level-1){
            res = ['|',...[...res].map(()=>'_'),'|']
        }
        return res
        // return " "+"".padStart(weight, "_")+`\n|`+"".padStart(weight, "_")+`|`
        // if (weight === 1) {
        // return i === 0 ? ` ${"".padStart(weight+1, "_")}` : `|${"".padStart(weight+1, "_")}|`
        // } else if (weight === 2) {
        // return i === 0 ? ` ${"".padStart(weight + 1, "_")}` : i === weight - 1 ? `|${"".padStart(weight + 1, "_")}|` : "".padStart(weight + 1, "_")
        // }
    }).map((f, i) => {
        // if (i === 0) {
        //     return ` ${"".padStart(weight , "_")}`;
        // }
        // else {
        //     return `|${"".padStart(weight , "_")}|`;
        // }
        return f.join("")
    })
    .join("\n");
}