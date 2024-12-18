export function circularArrayRotation(a, k, queries) {
  // Write your code here
  const b = [];
  console.log('>', a);
  /*for (let i = 0; i < k; i++) {
    const tempLastItem = a[a.length-1];
    a
    
  }*/
  let cont = 0;
  const lastlast = a[a.length - 2];
  const tempo = [];
  for (let x = 0; x < a.length; x++) {
    tempo.push(a[x]);
    a[x] = a[a.length - 1 - cont];
    cont++;
  }
  a[a.length - 1] = lastlast;
  console.log('<', a);
  console.log('<', lastlast);
  return b;
}
