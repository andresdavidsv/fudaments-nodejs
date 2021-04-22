function hola(nombre) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log('Hola, ' + nombre);
      resolve(nombre);
    }, 1500);
  });
}

function hablar(nombre) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log('Blablablba');
      // resolve(nombre);
      reject('Hay un error');
    }, 1000);
  });
}
function adios(nombre) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log('Adios', nombre);
      resolve(nombre);
    }, 5000);
  });
}
// Ejecucion
console.log('Iniciando el proceso');
hola('Andres')
  .then(hablar)
  .then(adios)
  .then((nombre) => {
    console.log('Terminado el proceso');
  })
  .catch((error) => {
    console.error('Ha habido un error');
    console.error(error);
  });
