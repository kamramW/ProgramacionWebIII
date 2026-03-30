//  Con promesas (anidado)
function obtenerDatos() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Datos obtenidos"), 1000);
  });
}

obtenerDatos()
  .then(res => {
    console.log(res);
    return obtenerDatos();
  })
  .then(res => {
    console.log(res);
  });


//  Con async/await
async function ejecutar() {
  let res1 = await obtenerDatos();
  console.log(res1);

  let res2 = await obtenerDatos();
  console.log(res2);
}

ejecutar();