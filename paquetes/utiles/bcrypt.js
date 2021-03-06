const bcrypt = require('bcrypt');

const password = 'NuncaParesDeAprender2021';

// Con asincronismo
bcrypt.hash(password, 5, function (error, hash) {
  console.log(hash);
  // Para evaluar si una contraseña concuerda con un hash
  bcrypt.compare(password, hash, function (error, result) {
    console.log(result);
    console.log(error);
  });
  // Nos va a responder **true** *(en el result)* o **false** *(en el error)* dependiendo si la contraseña puede generar el hash
});

// La consola nos entregaria una contraseña distinta en cada oportunidad.
