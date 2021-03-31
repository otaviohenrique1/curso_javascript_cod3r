function bomDia() {
  console.log('Bom dia!');
}

const boaTarde = function() {
  console.log('Boa tarde!');
};

// 1) Passar uma funcao como parametro para outra funcao
function executarQualquerCoisa(fn) {
  if (typeof fn === 'function') {
    fn();
  }
}

executarQualquerCoisa(3);
executarQualquerCoisa(bomDia);
executarQualquerCoisa(boaTarde);

// 2) Retornar uma funcao a partir de outra funcao

// function potencia(base, expoente) {
//   return Math.pow(base, expoente);
// }
// const bits8 = potencia(2, 8);
// console.log(bits8);

function potencia(base) {
  return function(expoente) {
    return Math.pow(base, expoente);
  }
}
const potenciaDe2 = potencia(2);
console.log(potenciaDe2(8));
const resultadoPotencia_3_4 = potencia(3)(4);
console.log(resultadoPotencia_3_4);
