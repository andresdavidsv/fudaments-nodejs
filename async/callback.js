function soyAsincrona(miCallback) {
  console.log('Soy una funcion asincrona');
  setTimeout(function () {
    console.log('Estoy siendo asincrona');
    miCallback();
  }, 1000);
}
console.log('Iniciando proceso..');
soyAsincrona(function () {
  console.log('Finalizando proceso..');
});

function hola(nombre, miCallback) {
  setTimeout(function () {
    console.log('Hola, ' + nombre);
    miCallback(nombre);
  }, 1500);
}

function adios(nombre, otroCallback) {
  setTimeout(function () {
    console.log('Adios', nombre);
    otroCallback();
  }, 5000);
}

hola('Andres', function (nombre) {
  adios(nombre, function () {
    console.log('Terminando proceso...');
  });
});
