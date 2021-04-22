function hola(nombre, miCallback) {
  setTimeout(function () {
    console.log('Hola, ' + nombre);
    miCallback(nombre);
  }, 1500);
}

function hablar(callbackHablar) {
  setTimeout(function () {
    console.log('Blablablba');
    callbackHablar();
  }, 1000);
}
function adios(nombre, otroCallback) {
  setTimeout(function () {
    console.log('Adios', nombre);
    otroCallback();
  }, 5000);
}

function conversacion(nombre, veces, callback) {
  if (veces > 0) {
    hablar(function () {
      conversacion(nombre, --veces, callback);
    });
  } else {
    adios(nombre, callback);
  }
}

console.log('Iniciando proceso..');
hola('Andres', function (nombre) {
  conversacion(nombre, 3, function () {
    console.log('Proceso Terminado');
  });
});

// hola('Andres', function (nombre) {
//   hablar(function () {
//     hablar(function () {
//       adios(nombre, function () {
//         console.log('Terminando proceso...');
//       });
//     });
//   });
// });
