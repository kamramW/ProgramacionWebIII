const arr = [10, 20, 30, 40, 50];

const [a, b, ...resto] = arr;

console.log(a);     // 10
console.log(b);     // 20
console.log(resto); // [30, 40, 50]