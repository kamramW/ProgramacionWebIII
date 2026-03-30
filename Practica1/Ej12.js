//  Callback anidado 
setTimeout(() => {
  console.log("Paso 1 anidado Mal");
  setTimeout(() => {
    console.log("Paso 2 anidado Mal");
    setTimeout(() => {
      console.log("Paso 3 anidado Mal");
    }, 1000);
  }, 1000);
}, 1000);


//  Con async/await 
function esperar(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
async function ejecutar() {
  await esperar(1000);
  console.log("Paso 1 Bien Hecho");

  await esperar(1000);
  console.log("Paso 2 Bien Hecho");

  await esperar(1000);
  console.log("Paso 3 Bien Hecho");
}
ejecutar();