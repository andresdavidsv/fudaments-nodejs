console.log('Hola Mundo');

let i = 0;
setInterval(function () {
  console.log(i);
  i++;
  if (i === 5) {
    var a = 3 + z;
  }
}, 1000);

console.log('Segunda Instruccion');

/**
 * PROCESO DE NODE

    1.- Va a abrirse un proceso, ese proceso es un proceso de node
    2.- Interpreta todo el archivo
    3.- Convertirlo a código maquina
    4.- Prepara todo lo que necesita para ejecutarse
    5.- Se ejecuta
    6.- Se cierra el proceso, y termina

DESVENTAJAS MONOHILO

    - Si no se manejan bien los errores y uno truena, ya no continua con los procesos posteriores
    - Debes estar pendiente de todo el código
 */
