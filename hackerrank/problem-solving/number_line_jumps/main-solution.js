export function kangaroo(x1, v1, x2, v2) {
  let isSamePosix = false;
  let x1NewPos = x1;
  let x2NewPos = x2;
  for (let index = 0; index < 10000; index++) {
    x1NewPos = x1NewPos + v1;
    x2NewPos = x2NewPos + v2;
    isSamePosix = x1NewPos === x2NewPos;
    if (isSamePosix) {
      break;
    }
  }

  return isSamePosix ? "YES" : "NO";
}
