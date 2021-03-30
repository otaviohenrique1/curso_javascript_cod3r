// Create a range function
function range1(n) {
  let lista = [];
  for (let i = 0; i <= n; i++) {
    lista.push(i);
  }
  return lista;
}
console.log(range1(5));

function range2(a=0,b=1,c=1) {
  let lista = [];
  for (let i = a; i <= b; i+=c) {
    lista.push(i);
  }
  return lista;
}
console.log(range2(0,5,2));

function range3(a,b,s=1) {
  const n1 = (b === undefined) ? 1 : a;
  const n2 = (b === undefined) ? a : b;
  const step = (n1 <= n2) ? Math.abs(s) : -Math.abs(s);

  const nums = [];
  for (let i = n1; (n1 <= n2) ? i <= n2 : i >= n2; i+=step) {
    nums.push(i);
  }
  return nums;
}

// range(5) -> [1,2,3,4,5]
console.log(range3(5));

// range(6,11) -> [6,7,8,9,10,11]
console.log(range3(6,11));

// range(10,19,2) -> [6,5,4,3,2]
console.log(range3(10,19,2));

// range(6,2) -> [6,5,4,3,2]
console.log(range3(6,2));

// range(8,-3,4) -> [8,4,0]
console.log(range3(8,-3,4));