export function distributeWeight(weight) {
    /*
        const boxRepresentations = {
            1: [" _ ", "|_|"],
            2: [" ___ ", "|___|"],
            5: [" _____ ", "|     |", "|_____|"],
            10: [" _________ ", "|         |", "|_________|"]
        };
    */
  

    const baseLine = (length) => {
        return Array.from({ length }).map(() => {
            return `_`
        }).join("");
    }
    return [
        ...baseLine(weight),
        ...baseLine(weight)]
        .map((b, i) => {
            return i === 0 ? ` ${b}` : i === weight ? `|${b}|` : b
        })
        .join("\n");
}