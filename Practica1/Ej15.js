// función con callback
function leerDatos(callback) {
  setTimeout(() => {
    callback("Datos leídos");
  }, 1000);
}
// convertir a promesa
function leerDatosPromesa() {
  return new Promise(resolve => {
    leerDatos(resolve);
  });
}
leerDatosPromesa().then(res => console.log(res));