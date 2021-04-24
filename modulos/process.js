// const process = require('process')

process.on('beforeExit', () => {
  console.log('El proceso va a terminar');
});

process.on('exit', () => {
  console.log('Proceso terminado');
  setTimeout(() => {
    console.log(
      'Esto no debe de verse, ya que ocurriría después de que el programa se cerró'
    );
  }, 2000);
});

process.on('uncaughtException', (error, origen) => {
  console.error(error, origen);
  setTimeout(() => {
    console.log(
      'Esto viene de las exceptions'
    );
  }, 0);
});

functionNo();
