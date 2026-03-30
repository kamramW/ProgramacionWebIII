function miPromesa() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Listo"), 1000);
  });
}
// convertir a callback
function usarCallback(callback) {
  miPromesa().then(resultado => callback(resultado));
}

usarCallback((res) => {
  console.log("Callback Convertido: ", res);
});