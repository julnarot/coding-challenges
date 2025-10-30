export function pigIt(str) {
  const li = str.split(" ");
  const datas = li
    .map(function (i) {
      return revers(i);
    })
    .join(" ");
  return datas;
}
function revers(dem) {
  return dem.length > 2
    ? dem.substr(1, dem.length - 1) + dem.substr(0, 1) + "ay"
    : dem.length == 2
    ? dem.substr(1, 1) + dem.substr(0, 1) + "ay"
    : special(dem.substr(0, 1));
  return word;
}

function special(strr) {
  return /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(strr)
    ? strr
    : strr + "ay";
}
