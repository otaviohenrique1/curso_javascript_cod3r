const numbers = [1,2,3,4,5,6];
const students = [
  { name: 'Jake', score: 6.4 },
  { name: 'Susan', score: 8.6 },
  { name: 'Emma', score: 9.4 },
  { name: 'Peter', score: 9.1 },
];

console.log(numbers.filter(item => item > 5));
console.log(students.filter(item => item.score < 7));