function esPalindromo(cadena) {
  let limpio = cadena.toLowerCase();
  let invertido = limpio.split("").reverse().join("");
  return limpio === invertido;
}

console.log(esPalindromo("oruro")); // true
console.log(esPalindromo("hola"));  // false