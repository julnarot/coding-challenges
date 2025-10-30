export function translatePossessed(message: string): string {
  return message.trim() === ""
    ? ""
    : [
        ...message
          .split(" ")
          .map((msg: string) => Array.from(msg).reverse().join("")),
      ].join(" ");
}
