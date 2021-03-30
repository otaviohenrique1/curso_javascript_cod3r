// Anonymous Function
(function(a, b, c) {
  let x = 3;
  console.log(`Result: ${a + b + c}`);
  console.log(x);
})(2, 3, 4);

(function(a, b, c) {
  let x = 4;
  console.log(`Result: ${a + b + c}`);
  console.log(x);
})(2, 3, 4);

(() => {
  console.log('arrow #01');
})();

(() => console.log('arrow #02'))();