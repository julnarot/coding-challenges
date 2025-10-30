export function maskify(cc) {
  const portion = 4;
  const cutLength = cc.length - portion;
  return cc.length > 4
    ? txtJoin(cc.length - portion) + cc.slice(cutLength, cc.length)
    : cc;

  function txtJoin(_size) {
    return Array.from(Array(_size).keys())
      .map(function () {
        return "#";
      })
      .join("");
  }
}
