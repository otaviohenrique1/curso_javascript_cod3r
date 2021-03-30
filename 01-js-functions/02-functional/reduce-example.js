const numbers = [1,2,3,4,5,6];

const soma = numbers.reduce((total, item) => total + item, 0);
console.log(soma);

const media = numbers.reduce((acumulador, elemento, index, array) => {
  if (index === array.length - 1) {
    return (acumulador + elemento)/ array.length;
  } else {
    return acumulador + elemento;
  }
}, 0);
console.log(media);
