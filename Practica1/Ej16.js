//  Antes (promesas)
function obtenerUsuario() {
  return Promise.resolve("Usuario");
}
function obtenerPosts(usuario) {
  return Promise.resolve(usuario + " - Posts");
}
obtenerUsuario()
  .then(user => obtenerPosts(user))
  .then(posts => console.log(posts));
//  Después (async/await)
async function ejecutar() {
  let user = await obtenerUsuario();
  let posts = await obtenerPosts(user);
  console.log(posts);
}
ejecutar();