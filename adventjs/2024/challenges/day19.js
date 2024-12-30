export function distributeWeight(weight) {
    let level = 0;
    if(weight >= 0 <3) {
        level = 1
    }
    return Array.from({ length: level }).map((_, i) => {
        return " "+"".padStart(weight, "_")+`\n|`+"".padStart(weight, "_")+`|`
        // if (weight === 1) {
            // return i === 0 ? ` ${"".padStart(weight+1, "_")}` : `|${"".padStart(weight+1, "_")}|`
        // } else if (weight === 2) {
            // return i === 0 ? ` ${"".padStart(weight + 1, "_")}` : i === weight - 1 ? `|${"".padStart(weight + 1, "_")}|` : "".padStart(weight + 1, "_")
        // }
    })
        .join("\n");
}