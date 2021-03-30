function finalPrice(tax, price) {
  return price * (1 + tax);
}
// console.log(finalPrice(0.0875, 25.1));
// console.log(finalPrice(0.0875, 21.7));
// console.log(finalPrice(0.0875, 107.9));

function finalPrice2(tax) {
  return function(price) {
    return price * (1 + tax);
  }
}
// console.log(finalPrice2(0.0875, 25.1));
// console.log(finalPrice2(0.0875, 21.7));
// console.log(finalPrice2(0.0875, 107.9));

const nycFinalPrice = finalPrice2(0.0875);
console.log(nycFinalPrice(25.1));
console.log(nycFinalPrice(21.7));
console.log(nycFinalPrice(107.9));
