export function drawRace(indices, length) {
    return indices.map((indice, i) => {
        const startTrack = ''.padStart((indices.length - 1) - i);
        let track = startTrack + Array.from({ length: length }).map(() => '~').join('');
        if (indice > 0) {
            track = track.substring(0, indice + startTrack.length) + 'r' + track.substring(indice + 1 + startTrack.length);
        } else if (indice < 0) {
            const reverpos = track.length - (indice * (-1));
            track = track.substring(0, reverpos) + 'r' + track.substring(reverpos + 1);
        }
        return track + ' /' + (i + 1);
    }).join("\n");
}