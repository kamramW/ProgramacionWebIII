function paso1() {
  return Promise.resolve("Paso 1");
}
function paso2(data) {
  return Promise.resolve(data + "  Paso 2");
}
function paso3(data) {
  return Promise.resolve(data + "  Paso 3");
}
paso1()
  .then(res => paso2(res))
  .then(res => paso3(res))
  .then(res => console.log(res));