function otraFuncion() {
  serompe();
}

function serompe() {
  return 3 + z;
}

function seRompeAsincrona(cb) {
  setTimeout(function () {
    try {
      return 3 + z;
    } catch (error) {
      console.error('Error en la asincona');
      cb(error);
    }
  });
}

try {
  // otraFuncion();
  seRompeAsincrona(function (error) {
    console.log(error.message);
  });
} catch (error) {
  console.error('Vaya, se rompio');
  console.error(error.message);
}
