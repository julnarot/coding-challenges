export function createXmasTree(height, ornament) {
    /* Code here */
    const trunc = `${''.padStart(height-1,"_")}#${''.padEnd(height-1,"_")}\n${''.padStart(height-1,"_")}#${''.padEnd(height-1,"_")}`
     return Array.from({length: height}).map((_,index)=>`${''.padStart(height-(index+1), "_")}${''.padStart((index*2)+1,ornament)}${''.padEnd(height-(index+1), '_')}\n`).join("")+trunc
}