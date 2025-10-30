export function humanReadable(seconds) {
  // TODO
  return seconds < 86400
    ? new Date(seconds * 1000).toISOString().split("T")[1].split(".")[0]
    : seconds == 86400
    ? "24:00:00"
    : "99:59:59";
}
