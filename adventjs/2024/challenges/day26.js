export function getCompleted(timeWorked, totalTime) {
    const toSeconds = (strTime) => {
        const [hour, min, sec] = strTime.split(":");
        return parseInt(hour, 10) * 3600 + parseInt(min, 10) * 60 + parseInt(sec, 10);
    }

    const secondTimeWorked = toSeconds(timeWorked);
    const secondTotalTime = toSeconds(totalTime);

    return `${((secondTimeWorked / secondTotalTime) * 100).toFixed()}%`;
}